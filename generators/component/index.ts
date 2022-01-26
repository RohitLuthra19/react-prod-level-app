/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component (atoms, molecules, organisms, templates)',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'React.Component']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value, 'components')
            ? 'A component with this name already exists '
            : true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'list',
      name: 'folder',
      message: 'Where do you want to keep this component?',
      default: 'atoms',
      choices: () => ['atoms', 'molecules', 'organisms', 'templates']
    }
  ],
  actions: (data) => {
    // Generate index.tsx and index.test.tsx
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.tsx.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.tsx.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../components/{{ folder }}/{{properCase name}}/index.tsx',
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../components/{{ folder }}/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: 'add',
        path:
          '../components/{{ folder }}/{{properCase name}}/tests/{{properCase name}}.test.tsx',
        templateFile: './component/test.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path:
          '../components/{{ folder }}/{{properCase name}}/{{properCase name}}.style.module.scss',
        templateFile: './component/style.module.scss.hbs',
        abortOnFail: true
      }
    ];

    return actions;
  }
};
