import Plugin from "../../src/Plugin";
import config from "../../src/config";

declare let tinymce: any;

Plugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: config.pluginId + " ",
  toolbar: config.pluginId + " ",
  menubar: false,
  apyKey: "",
});
