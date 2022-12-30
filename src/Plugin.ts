import { Editor, TinyMCE } from 'tinymce';
import { setupReactApp } from './application/App';

declare const tinymce: TinyMCE;

const setup = (editor: Editor) => {
  const element = document.createElement('div');
  element.setAttribute('id', 'my-plugin');

  editor.on('init', () => {
    setupReactApp(element);
  });

  return {
    getMetadata: () => {
      return {
        name: 'Custom plugin',
        url: 'https://example.com/docs/customplugin'
      };
    },
    render: () => element,
  };
};

export default () => {
  tinymce.PluginManager.add('my_plugin', setup);
};
