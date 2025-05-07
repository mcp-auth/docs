import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import { CheckCircle, AlertTriangle, XCircle, Loader } from 'lucide-react';
import { type ChangeEvent, type ElementType, useState } from 'react';

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

const resolvedUrlTypes: Readonly<Record<string, string>> = Object.freeze({
  oidc: 'OIDC issuer',
  oauth: 'OAuth issuer',
  raw: 'Raw metadata URL',
});

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
      console.error('Provider test URL is not defined in custom fields');
      setApiData({
        success: false,
        error: 'Provider test URL is not defined',
        errorDescription: 'Please set the provider test URL in custom fields of Docusaurus config.',
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
      console.error('Error fetching data:', error);
      setApiData({
        success: false,
        error: 'Fetch Error',
        errorDescription: 'An error occurred while fetching data. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Authorization server MCP compatibility test</h2>
      <div className={styles.urlInputContainer}>
        <input
          type="text"
          value={url}
          placeholder="Enter a URL to test"
          className={styles.urlInput}
          onChange={handleUrlChange}
        />
        <button disabled={isLoading} className={styles.fetchButton} onClick={handleFetchData}>
          {isLoading ? <Loader size={16} className={styles.loader} /> : 'Test'}
        </button>
      </div>
      {testUrl && apiData && !isLoading && (
        <>
          <div className={styles.resultHeader}>
            <h3 className={styles.resultHeading}>Test results for {testUrl}</h3>
            {apiData.success && (
              <p className={styles.resolvedUrlType}>
                <strong>Resolved URL type:</strong> {resolvedUrlTypes[apiData.type] ?? 'Unknown'}
              </p>
            )}
            <p
              className={`${styles.status} ${apiData.success && apiData.isValid ? styles.statusValid : styles.statusInvalid}`}
            >
              Result:{' '}
              {apiData.success && (
                <strong>
                  {apiData.isValid ? 'Compatible with MCP' : 'Not compatible with MCP'}
                </strong>
              )}
              {!apiData.success && (
                <strong>
                  {transformCode(apiData.error)} - {apiData.errorDescription}
                </strong>
              )}
            </p>
          </div>
          {apiData.success && (
            <>
              <MessageGroup
                title="Successes"
                icon={CheckCircle}
                type="success"
                messages={apiData.successes ?? []}
              />
              <MessageGroup
                title="Warnings"
                icon={AlertTriangle}
                type="warning"
                messages={apiData.warnings ?? []}
              />
              <MessageGroup
                title="Errors"
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
