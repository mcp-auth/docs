import type { Props } from '@theme/MDXComponents/Pre';
import { type ReactNode } from 'react';

export default function MDXPre(props: Props): ReactNode | undefined {
  return <pre {...props} />;
}
