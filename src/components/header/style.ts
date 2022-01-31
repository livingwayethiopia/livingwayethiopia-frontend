import styled from "styled-components";
import { theme } from "../../styles/theme";
import Image from "next/image";
import Link from "next/link";
import { cssSnippets } from "../../styles/cssSnippets";
import { useRouter } from "next/router";

type HeaderType = {
  isSticky: boolean;
};

type NavLinkType = {
  active: boolean;
  isSticky: boolean;
};

type FullComponentType = {
  center: boolean;
};

export const HeaderContainer = styled.header<HeaderType>`
  font-weight: normal;
  padding: 10px;
  height: 70px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
  display: flex;
  z-index: 40;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isSticky ? theme.colors.background_secondary : "transparent"};
  box-shadow: ${(props) =>
    props.isSticky ? "0 1px 2px rgba(0, 0, 0, 0.08)" : "0 0 0"};
  ${cssSnippets.padding}
`;

export const Logo = styled.div`
  grid-column: 1/2;
  @media (max-width: ${theme.breakpoints.SM}px) {
    grid-column: 1/3;
  }
`;

export const Detail = styled.div`
  grid-column: 2/10;
  display: grid;
  @media (max-width: ${theme.breakpoints.SM - 1}px) {
    grid-column: 8/10;
  }
`;

export const FullScreenComponent = styled.div<FullComponentType>`
  @media (max-width: 919px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;

export const NavLink = styled.span<NavLinkType>`
  margin-left: 12.5px;
  margin-right: 12.5px;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "bold" : 100)};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  text-transform: capitalize;
  color: ${(props) => {
    const router = useRouter();
    if (props.active) return theme.colors.primary;
    else {
      if (props.isSticky) return theme.colors.text;
      else if (router.pathname === "/") return theme.colors.white;
      else return theme.colors.third;
    }
  }};
  cursor: pointer;
  text-transform: uppercase;
  :hover {
    color: ${theme.colors.primary};
  }
`;

export const ButtonNav = styled.div`
  width: 95px;
  height: 40px;
  display: grid;
  grid-template-columns: auto auto;
  .border {
    height: 40px;
    width: 1.5px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    background-color: ${theme.colors.secondary};
    border-radius: 15px;
  }
  .buttonContainer {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7.5px;
    border-radius: ${theme.boarder.radius}px;
    font-size: 14px;
    text-decoration: none;
    border: 0px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    font-weight: 450;
    text-transform: capitalize;
    cursor: pointer;
    font-family: ${theme.fonts.body};
  }
`;

export const MobileScreenComponent = styled.div`
  justify-self: center;
  align-self: center;
  overflow: hidden;
  @media (min-width: 920px) {
    display: none;
  }
  .navBar {
    overflow: hidden;
    svg {
      fill: ${theme.colors.secondary};
    }
    :hover {
      svg {
        fill: ${theme.colors.primary};
      }
    }
  }
`;
