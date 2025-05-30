import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import { CheckCircle, AlertTriangle, XCircle, Loader } from 'lucide-react';
import { type ChangeEvent, type ElementType, useMemo, useState } from 'react';

import styles from './index.module.css';

const uppercaseTerms = Object.freeze(['mcp', 'oidc', 'jwt', 'pkce', 'url', 'uri']);
const transformTerm = (term: string) => (uppercaseTerms.includes(term) ? term.toUpperCase() : term);
const capitalize = (term: string) => term.charAt(0).toUpperCase() + term.slice(1);
const transformCode = (code: string) =>
  capitalize(
    code
      .split('_')
      .map((value) => transformTerm(value))
      .join(' ')
  );

type Message = {
  code: string;
  description: string;
};

type ApiResponse =
  | {
      success: true;
      type: string;
      config: {
        metadata: Record<string, unknown>;
        type: string;
      };
      isValid: boolean;
      warnings?: Message[];
      successes?: Message[];
      errors?: Message[];
    }
  | {
      success: false;
      error: string;
      errorDescription: string;
    };

const MessageGroup = ({
  title,
  icon: Icon,
  type,
  messages,
}: {
  readonly title: string;
  readonly icon: ElementType;
  readonly type: 'success' | 'warning' | 'error';
  readonly messages: Message[];
}) => {
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className={styles.group}>
      <h3 className={clsx(styles.groupTitle, styles[type])}>
        <Icon strokeWidth={3} size={16} className={styles.icon} />
        {title} ({messages.length})
      </h3>
      <ul className={styles.messageList}>
        {messages.map((msg) => (
          <li key={msg.code} className={styles.messageItem}>
            <div className={styles.messageCode}>{transformCode(msg.code)}</div>
            <div className={styles.messageDescription}>{msg.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TestResultStatus = ({ data }: { readonly data: ApiResponse }) => {
  const statusContent = useMemo(() => {
    if (data.success) {
      if (data.isValid) {
        return translate({
          id: 'testProvider.status.compatible',
          message: 'Compatible with MCP',
        });
      }

      return translate({
        id: 'testProvider.status.notCompatible',
        message: 'Not compatible with MCP',
      });
    }

    return `${transformCode(data.error)} - ${data.errorDescription}`;
  }, [data]);

  return (
    <p
      className={`${styles.status} ${data.success && data.isValid ? styles.statusValid : styles.statusInvalid}`}
    >
      <Translate id="testProvider.result">Result:</Translate> <strong>{statusContent}</strong>
    </p>
  );
};

const TestProvider = () => {
  const [url, setUrl] = useState('');
  const [testUrl, setTestUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState<ApiResponse>();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleFetchData = async () => {
    if (!url) {
      return;
    }

    setTestUrl(url);

    if (!customFields?.providerTestUrl) {
      console.error(
        translate({
          id: 'testProvider.consoleError.providerTestUrlNotDefined',
          message: 'Provider test URL is not defined in custom fields',
        })
      );
      setApiData({
        success: false,
        error: translate({
          id: 'testProvider.error.providerTestUrlNotDefined',
          message: 'Provider test URL is not defined',
        }),
        errorDescription: translate({
          id: 'testProvider.error.providerTestUrlNotDefinedDescription',
          message: 'Please set the provider test URL in custom fields of Docusaurus config.',
        }),
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(String(customFields.providerTestUrl), {
        method: 'POST',
        body: JSON.stringify({ url }),
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result: ApiResponse = await response.json();
      setApiData(result);
    } catch (error) {
      console.error(
        translate({
          id: 'testProvider.consoleError.fetchError',
          message: 'Error fetching data:',
        }),
        error
      );
      setApiData({
        success: false,
        error: translate({
          id: 'testProvider.error.fetchError',
          message: 'Fetch Error',
        }),
        errorDescription: translate({
          id: 'testProvider.error.fetchErrorDescription',
          message: 'An error occurred while fetching data. Please try again.',
        }),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <Translate id="testProvider.heading">Authorization server MCP compatibility test</Translate>
      </h2>
      <div className={styles.urlInputContainer}>
        <input
          type="text"
          value={url}
          placeholder={translate({
            id: 'testProvider.urlInput.placeholder',
            message: 'Enter a URL to test',
          })}
          className={styles.urlInput}
          onChange={handleUrlChange}
        />
        <button disabled={isLoading} className={styles.fetchButton} onClick={handleFetchData}>
          {isLoading ? (
            <Loader size={16} className={styles.loader} />
          ) : (
            <Translate id="testProvider.fetchButton.label">Test</Translate>
          )}
        </button>
      </div>
      {testUrl && apiData && !isLoading && (
        <>
          <div className={styles.resultHeader}>
            <h3 className={styles.resultHeading}>
              <Translate id="testProvider.resultHeader.heading">Test results for</Translate>{' '}
              {testUrl}
            </h3>
            <TestResultStatus data={apiData} />
          </div>
          {apiData.success && (
            <>
              <MessageGroup
                title={translate({
                  id: 'testProvider.messageGroup.successes',
                  message: 'Successes',
                })}
                icon={CheckCircle}
                type="success"
                messages={apiData.successes ?? []}
              />
              <MessageGroup
                title={translate({
                  id: 'testProvider.messageGroup.warnings',
                  message: 'Warnings',
                })}
                icon={AlertTriangle}
                type="warning"
                messages={apiData.warnings ?? []}
              />
              <MessageGroup
                title={translate({
                  id: 'testProvider.messageGroup.errors',
                  message: 'Errors',
                })}
                icon={XCircle}
                type="error"
                messages={apiData.errors ?? []}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TestProvider;
