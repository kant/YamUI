/**
 * Compares 2 package.json versions.
 * Fails if the first package is not incremented past the second package.
 */

/* eslint-disable import/no-dynamic-require, no-console */

const path = require('path');
const chalk = require('chalk');
const compareVersions = require('compare-versions');


const rootDir = path.resolve(__dirname, '../', '../');
const packageJsonPath = path.resolve(rootDir, process.argv[2]);
const packageJsonPathPrev = path.resolve(rootDir, process.argv[3]);

const version = require(packageJsonPath).version;
const previousVersion = require(packageJsonPathPrev).version;

if (compareVersions(version, previousVersion) !== 1) {
  console.log(chalk.red(`Please increment package version. Previous version is ${previousVersion}`));
  throw new Error('Package version not incremented');
} else {
  console.log(chalk.green(`Package version is correctly versioned from ${previousVersion} to ${version}`));
}
