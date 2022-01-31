/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  cursor: pointer;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold} !important;
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : '16px !important'};
  color: ${({ color,inverted,theme:{colors} }) =>{
    if(color) return color;
    if (inverted) return colors.primaryColor;
    return colors.white}};
  background: ${({
    disabled,
    background,
    inverted,
    theme: { colors },
  }) => {
    if (background) return `${background}`;
    if (disabled) return 'transparent';
    if (inverted) return `${colors.white}`;
    return `${colors.primaryColor}`;
  }};
  opacity: 1 ;
  border: ${({ border,theme:{colors} }) =>border ? `2px solid ${colors.primaryColor}` : 'none'};
  box-shadow: ${({ boxShadow }) => {
    if (boxShadow) return `${boxShadow}`;
    return 'none ';
  }};
  white-space:nowrap;
  margin-top:16px;
  padding:12px 24px;
  border-radius:2px;
`;

const CustomButton = ({
  props,
  disabled,
  border,
  boxShadow,
  buttonStyle,
  background,
  color,
  fontSize,
  children,
  onClick,
  loading,
  hover,
  inverted
}) => {
  return (
    <StyledButton
      {...props}
      disabled={disabled}
      background={background}
      color={color}
      fontSize={fontSize}
      style={buttonStyle}
      onClick={onClick}
      loading={loading}
      border={border}
      boxShadow={boxShadow}
      hover={hover}
      inverted={inverted}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
