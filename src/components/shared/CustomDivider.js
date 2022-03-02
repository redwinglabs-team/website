import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Divider = styled.div``;

const CustomDivider = ({ red, style }) => {
  return (
    <Divider
      style={{
        width: '85%',
        backgroundColor: red ? theme.colors.red : theme.colors.grey,
        height: 2,
        ...style
      }}
    />
  );
};

export default CustomDivider;
