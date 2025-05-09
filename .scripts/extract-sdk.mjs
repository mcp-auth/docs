// @ts-check

/**
 * @fileoverview Extracts the SDK reference documentation from the given project and branch.
 */

import { checkoutRepo, ensureProjectRoot, execPromise } from './shared.mjs';

ensureProjectRoot();

const [_, __, project, branch = 'master'] = process.argv;
const validProjects = ['js'];

if (!validProjects.includes(project)) {
  console.error(
    'Please provide a project name as an argument. Valid options are: ' + validProjects.join(', ')
  );
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

await checkoutRepo(project, branch);
await execPromise(`npm run typedoc`);
