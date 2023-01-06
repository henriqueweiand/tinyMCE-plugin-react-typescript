import Plugin from "../../src/Plugin";

declare let tinymce: any;

Plugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: "pluginId ",
  toolbar: "pluginId",
  menubar: false,
  apyKey: "",
});
