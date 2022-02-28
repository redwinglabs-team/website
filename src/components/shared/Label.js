/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { capitalizeFirstLetter, translate } from '../../translator';
import { theme } from '../../styles/theme';
import { LanguageContext } from '../../context/LanguageContext';

const STYText = styled.span`
  display: flex;

  z-index: 1;

  &.fit-content {
    width: fit-content;
  }
  &.uppercase {
    text-transform: uppercase;
  }

  &.capitalize {
    text-transform: capitalize;
  }

  &.text-center {
    text-align: center;
  }

  &.align-fs {
    align-items: flex-start;
  }

  &.justify-ce {
    justify-content: center;
  }

  &.block {
    display: block;
  }

  &.nowrap {
    white-space: nowrap;
  }
`;

const Label = ({ id, className, translate, children, fontFamily, fontSize, color, style, onClick }) => {
  const { language } = useContext(LanguageContext);
  return (
    <STYText
      id={id}
      className={className}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        fontSize,
        color,
        fontFamily: theme.fontFamily[fontFamily],
        ...style
      }}
    >
      {typeof children === 'string' && translate ? capitalizeFirstLetter(translate(children, language)) : children}
    </STYText>
  );
};

export default Label;
