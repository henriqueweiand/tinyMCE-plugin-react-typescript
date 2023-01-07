import { Editor } from 'tinymce';
import * as React from 'react';
// import './App.css';
import styled from 'styled-components';

const Title = styled.h1``;

const MyPlugin = (props: { editor: Editor}) => {
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

      editor.windowManager.close();
    }
  }

  return (
      <>
        <Title>
          modal with reactjs
        </Title>

        <input type="file" accept="image/*" id="my-image-input"></input>

        <button type="button" onClick={saveImage}>Salvar</button>
      </>
  );
};


export default MyPlugin;
