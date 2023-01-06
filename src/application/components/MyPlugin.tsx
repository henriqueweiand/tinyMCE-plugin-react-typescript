import * as React from 'react';
// import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const MyPlugin = () => {
  return (
      <>
        <Title>
          modal with reactjs
        </Title>

        <input type="file" accept="image/*" id="my-image-input"></input>
      </>
  );
};


export default MyPlugin;
