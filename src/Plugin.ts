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
          const input = document.getElementById(
            "my-image-input"
          ) as HTMLInputElement;

          if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
              const dataUrl = e.target.result;
              const img = new Image();
              img.src = dataUrl;
              editor.insertContent(`<img src="${dataUrl}" alt="${file.name}">`);
            };
            reader.readAsDataURL(file);

            editor.windowManager.close();
          }
        },
        buttons: [
          {
            type: "custom",
            text: "Ok",
            primary: true,
          },
        ],
      });

      setupReactApp(document.getElementById("pluginId-content"));
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
