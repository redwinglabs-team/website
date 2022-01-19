import React, { useState } from "react";
import styled from "styled-components/macro";

const Item = styled.a`
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme: { fontFamily }, textRegular }) =>
    textRegular ? fontFamily.regular : fontFamily.bold};

  &:hover {
    text-shadow: ${({ shadowHover }) => shadowHover && "0 0 5px #ffffff"};
  }

  .underline {
    width: ${({ isHover }) => (isHover ? "100%" : 0)};
    transition: width 0.3s;
    background: ${({theme:{colors}})=>colors.red};
    height: 3px;
  }
`;
const HeaderItem = ({
  id,
  className,
  href,
  target,
  children,
  disabledHover,
  style,
  textRegular,
  shadowHover,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Item
      id={id}
      className={className}
      href={href}
      target={target}
      isHover={disabledHover ? false : isHover}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={style}
      textRegular={textRegular}
      shadowHover={shadowHover}
    >
      <>
        {children}
        {!disabledHover && <div className="underline"/>}
      </>
    </Item>
  );
};

export default HeaderItem;
