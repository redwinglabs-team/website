import React from 'react';
import styled from 'styled-components/macro';
import { CrossIcon } from '../../assets';
import CustomButton from './CustomButton';

const Container = styled.div`
  transition: transform 1s linear;
  transform: ${({ show }) => (show ? 'translateX(0px)' : 'translateX(-200%)')};
  height: 100%;
  position: fixed;
  z-index: 100;
  width: 50%;
`;

const ContactUsIFrame = ({ show, onClose }) => {
  return (
    <Container show={show}>
      <CustomButton onClick={onClose} background="transparent" buttonStyle={{ position: 'fixed', right: 24 }}>
        <CrossIcon style={{ transform: 'scale(1.5)' }} />
      </CustomButton>
      <iframe
        title="contact-us"
        src="https://forms.monday.com/forms/embed/1d33bcb11c4d13483e5bd75d6b73ff7b?r=use1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
      />
    </Container>
  );
};

export default ContactUsIFrame;