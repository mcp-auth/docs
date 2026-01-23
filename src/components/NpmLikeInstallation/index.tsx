import MDXCode from '@theme/MDXComponents/Code';
import MDXPre from '@theme/MDXComponents/Pre';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

type Props = {
  readonly packageName: string;
};

export const NpmLikeInstallation = ({ packageName }: Props) => {
  return (
    <Tabs groupId="package-manager">
      <TabItem value="pnpm" label="pnpm">
        <MDXPre>
          <MDXCode>{`pnpm add ${packageName}`}</MDXCode>
        </MDXPre>
      </TabItem>
      <TabItem value="npm" label="npm">
        <MDXPre>
          <MDXCode>{`npm install ${packageName}`}</MDXCode>
        </MDXPre>
      </TabItem>
      <TabItem value="yarn" label="yarn">
        <MDXPre>
          <MDXCode>{`yarn add ${packageName}`}</MDXCode>
        </MDXPre>
      </TabItem>
    </Tabs>
  );
};
