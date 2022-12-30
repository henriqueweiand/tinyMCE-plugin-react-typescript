import * as React from 'react';
import * as ReactDOM from 'react-dom';
import tinymce from 'tinymce';
import MyPlugin from './MyPlugin';

tinymce.PluginManager.add('my_plugin', (editor) => {
  const element = document.createElement('div');
  element.setAttribute('id', 'my-plugin');

  editor.on('init', () => {
    ReactDOM.render(<MyPlugin />, element);
  });

  editor.on('remove', () => {
    ReactDOM.unmountComponentAtNode(element);
  });

  return {
    getMetadata: () => {
      return {
        name: 'My Plugin',
      };
    },
    render: () => element,
  };
});
