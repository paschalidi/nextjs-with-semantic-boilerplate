/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add component / container',
  prompts: [
    {
      type: 'confirm',
      name: 'isContainer',
      message: 'Is container:',
      default: false,
    },
    {
      type: 'confirm',
      name: 'wantContentful',
      message: 'Are you gonna use Contentful',
      default: false,
      choices: () => ['Yes', 'No'],
    },
    {
      type: 'list',
      name: 'component',
      message: 'Select a base component:',
      default: 'Component',
      choices: () => ['Component', 'PureComponent'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js

    const actions = [{
      type: 'add',
      path: '../../components/{{properCase name}}/index.js',
      templateFile: './component/es6.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../components/{{properCase name}}/tests/index.test.js',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }];

    if (data.wantContentful) {
      // Constants
      actions.push({
        type: 'add',
        path: '../../components/{{properCase name}}/constants.js',
        templateFile: './component/constants.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
