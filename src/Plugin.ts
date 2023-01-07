import { Editor, TinyMCE } from "tinymce";
import { setupReactApp } from "./application/App";

declare const tinymce: TinyMCE;

const setup = (editor: Editor) => {
  const element = document.createElement("div");
  element.setAttribute("id", "my-plugin");

  editor.ui.registry.addButton("pluginId", {
    text: "My button",
    onAction: function () {
      editor.windowManager.open({
        title: "Plugin Title",
        body: {
          type: "panel",
          items: [
            {
              type: "htmlpanel",
              html: '<div id="pluginId-content">loading</div>',
            },
          ],
        },
        onAction: () => {
          alert('on action');
        },
        buttons: [
          {
            type: "custom",
            text: "Ok",
            primary: true,
          },
        ],
      });

      setupReactApp(document.getElementById("pluginId-content"), editor);
    },
  });

  return {
    getMetadata: () => {
      return {
        name: "Custom plugin",
        url: "https://example.com/docs/customplugin",
      };
    },
    render: () => element,
  };
};

export default () => {
  tinymce.PluginManager.add("pluginId", setup);
};
