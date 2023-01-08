import React from 'react';

import { Container, Modal as ModalStyle } from './styles';

interface ModalProps {
  display?: string;
}

const Modal: React.FC<ModalProps> = ({ children, display = "none" }) => {
  return (
    <Container display={display}>
      <ModalStyle>{children}</ModalStyle>
    </Container>
  );
};

export default Modal;