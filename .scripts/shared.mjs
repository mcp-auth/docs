// @ts-check

import { spawn } from 'node:child_process';
import fs from 'node:fs';

/**
 * Executes a command in a child process and pipes the output to the parent process.
 *
 * @type (command: string, args?: string[], options?: object) => Promise<boolean>
 */
export function execPromise(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(command, args, {
      shell: true,
      stdio: 'inherit', // This pipes stdout and stderr to the parent process
      ...options,
    });

    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve(true);
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });
}

/**
 * Ensure the script is run from the root of the project by checking for the presence of a
 * `package.json` file.
 */
export const ensureProjectRoot = () => {
  try {
    const stat = fs.statSync('package.json');
    if (!stat.isFile()) {
      throw new Error('package.json not found');
    }
  } catch {
    throw new Error(
      'This script must be run from the root of the project. Please navigate to the project root and try again.'
    );
  }
};

/**
 * Checkout a specific branch of a repository. The repository should be available on GitHub under
 * the `mcp-auth` organization.
 *
 * @type (repoName: string, branch?: string) => Promise<void>
 */
export const checkoutRepo = async (repoName, branch = 'master') => {
  // Ensure `sdk` directory exists
  await fs.promises.mkdir('sdk', { recursive: true });
  process.chdir('sdk');

  // Check if the target repo (`repoName`) exists and is a git repo
  try {
    await execPromise(`git rev-parse --is-inside-work-tree ${repoName}`);
  } catch {
    // If it doesn't exist, clone the repo
    await execPromise(`git clone https://github.com/mcp-auth/${repoName}.git`);
  }

  process.chdir(repoName);
  // Check if the target branch exists
  try {
    await execPromise(`git rev-parse --verify ${branch}`);
  } catch {
    // If it doesn't exist, fetch target branch and check it out
    await execPromise(`git fetch origin ${branch}`);
    await execPromise(`git checkout ${branch}`);
  }

  // Pull the latest changes
  await execPromise(`git pull origin ${branch}`);
  // Change directory back to the root
  process.chdir('../..');
};
