import { Editor, TinyMCE } from "tinymce";
import { setupReactApp, removeReactApp } from "./application/App";
import config from "./config";

declare const tinymce: TinyMCE;

const setup = (editor: Editor) => {
  const element = document.createElement("div");
  element.setAttribute("id", config.pluginId);

  editor.ui.registry.addButton(config.pluginId, {
    text: config.pluginButtonText,
    onAction: function () {
      var pluginContentDiv = document.getElementById(config.pluginContentDiv);

      if (!pluginContentDiv) {
        var PluginContent = document.createElement("div");
        PluginContent.setAttribute("id", config.pluginContentDiv);
        document.body.appendChild(PluginContent);

        pluginContentDiv = document.getElementById(config.pluginContentDiv);
      } else {
        removeReactApp(pluginContentDiv);
      }

      setupReactApp(pluginContentDiv, editor);
    },
  });

  return {
    getMetadata: () => {
      return {
        name: config.pluginName,
        url: config.pluginURL,
      };
    },
    render: () => element,
  };
};

export default () => {
  tinymce.PluginManager.add(config.pluginId, setup);
};
