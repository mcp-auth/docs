import CodeInline from '@theme/CodeInline';
import type { Props } from '@theme/MDXComponents/Code';
import type { ComponentProps, JSX, ReactNode } from 'react';
import { Children } from 'react';

function shouldBeInline(props: Props) {
  return (
    // Empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    props.children !== undefined &&
    Children.toArray(props.children).every((el) => typeof el === 'string' && !el.includes('\n'))
  );
}

function CodeBlock(props: ComponentProps<'code'>): JSX.Element {
  return <code {...props} />;
}

export default function MDXCode(props: Props): ReactNode {
  return shouldBeInline(props) ? (
    <CodeInline {...props} />
  ) : (
    // eslint-disable-next-line no-restricted-syntax
    <CodeBlock {...(props as ComponentProps<typeof CodeBlock>)} />
  );
}
