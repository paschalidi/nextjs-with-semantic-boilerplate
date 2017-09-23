/**
 * Page Generator
 */

/* eslint strict: ["off"] */

'use strict';

const pageExists = require('../utils/pageExist');

module.exports = {
  description: 'Add a new page route',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'index',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return pageExists(value) ? 'A page with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantContentful',
      message: 'Are you gonna use Contentful',
      default: true,
      choices: () => ['Yes', 'No'],
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const pageTemplate = './page/page.hbs';

    const actions = [{
      type: 'add',
      path: '../../pages/{{name}}.js',
      templateFile: pageTemplate,
      abortOnFail: true,
    }];

    return actions;
  },
};
