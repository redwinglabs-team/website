/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  cursor: pointer;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold} !important;
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : '16px !important'};
  color: ${({ color,theme:{colors} }) =>
    color ? `${color}` : colors.white};
  background: ${({
    disabled,
    background,
    theme: { colors },
  }) => {
    if (background) return `${background}`;
    if (disabled) return 'transparent';
    return `${colors.primaryColor}`;
  }};
  opacity: 1 ;
  border: ${({ theme:{colors} }) =>`5px dashed ${colors.primaryColor}`};
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
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
