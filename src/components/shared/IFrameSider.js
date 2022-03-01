import React from 'react';
import styled from 'styled-components/macro';
import { CrossIcon } from '../../assets';
import CustomButton from './CustomButton';

const Container = styled.div`
  transition: transform 1s linear;
  transform: ${({ open }) => (open ? 'translateX(0px)' : 'translateX(-200%)')};
  height: 100%;
  position: fixed;
  z-index: 100;
  width: 50%;
  top: 0px;
`;

const IFrameSider = ({ open, onClose, src }) => {
  console.log('OPEN', open);
  return (
    <Container open={open}>
      <CustomButton onClick={onClose} background="transparent" buttonStyle={{ position: 'fixed', right: 24 }}>
        <CrossIcon style={{ transform: 'scale(1.5)' }} />
      </CustomButton>
      <iframe title="contact-us" src={src} width="100%" height="100%" style={{ border: 0 }} />
    </Container>
  );
};

export default IFrameSider;
