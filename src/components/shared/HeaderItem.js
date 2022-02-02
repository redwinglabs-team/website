import React, { useState } from "react";
import styled from "styled-components/macro";
import { ROUTE_PRODUCTS } from "../../router/routes";
import { matchPathname } from "../../utils/UtilStrings";

const Item = styled.a`
  color: ${({colorInverted,theme:{colors}})=>colorInverted ? colors.primaryColor : colors.white};
  font-size: 14px;
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
    background: ${({colorInverted,theme:{colors}})=>colorInverted ? colors.primaryColor : colors.red};
    height: 3px;
  }

  .is-underlined{
    width:100%;
    background: ${({colorInverted,theme:{colors}})=>colorInverted ? colors.primaryColor : colors.red};
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
  colorInverted,
  onClick
}) => {
  const [isHover, setIsHover] = useState(false);
  // console.log(`${children}`,href === window.location.pathname && matchPathname("products"))

  const isSelectedItem = () => {
    // eslint-disable-next-line prefer-destructuring
    const pathname = window.location.pathname;
    if(href === pathname)return true
    if(href===pathname && matchPathname(ROUTE_PRODUCTS))
      return true
    return false
  }

  return (
    <Item
      id={id}
      className={className}
      href={href}
      target={target}
      colorInverted={colorInverted}
      isHover={disabledHover ? false : isHover}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={style}
      textRegular={textRegular}
      shadowHover={shadowHover}
      onClick={onClick}
    >
      <>
        {children}
        {!disabledHover &&
        <div className={
           isSelectedItem()
          ? "is-underlined"
          :"underline"}
        />}
      </>
    </Item>
  );
};

export default HeaderItem;
