import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';


const Divider = styled.hr``


const CustomDivider = ({red}) => {
    return (
        <Divider
        style={{
          width: '85%',
          backgroundColor: red ? theme.colors.red : theme.colors.grey,
          height: 0.5
        }}
      />
    );
};

export default CustomDivider;