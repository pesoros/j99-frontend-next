module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'yarn typecheck',
  '**/*.(ts|tsx|js|jsx)': () => 'yarn lint',

  // // This will lint and format TypeScript and                                             //JavaScript files
  // '**/*.(ts|tsx|js)': (filenames) => [
  //   `pnpm eslint --fix ${filenames.join(' ')}`,
  //   `pnpm prettier --write ${filenames.join(' ')}`,
  // ],

  // // this will Format MarkDown and JSON
  // '**/*.(md|json)': (filenames) =>
  //   `pnpm prettier --write ${filenames.join(' ')}`,
};
