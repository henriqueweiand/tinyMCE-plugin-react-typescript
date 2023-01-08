import { Editor } from 'tinymce';
import * as React from 'react';

import Modal from './Modal';

const MyPlugin = (props: { editor: Editor }) => {
  const [modalStauts, setModalStatus] = React.useState("block");
  const { editor } = props;

  const saveImage = () => {
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
    }

    setModalStatus("none");
  }

  return (
      <Modal display={modalStauts}>
        <h3>
          modal with reactjs
        </h3>

        <input type="file" accept="image/*" id="my-image-input"></input>

        <button type="button" onClick={saveImage}>Ok</button>
      </Modal>
  );
};


export default MyPlugin;
