import { theme } from "../../styles/theme";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

type DrawerViewType = {
  view: boolean;
};

type FullComponentType = {
  center: boolean;
};

export const MainContainer = styled.div<DrawerViewType>`
  width: 100vw;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin-left: ${(props) => (!props.view ? "100vw" : "0vw")};
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  @media (min-width: 1023px) {
    display: none;
  }
  font-weight: normal;
  background-color: ${theme.colors.background_secondary};
`;

export const TopDrawerContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
    stroke: ${theme.colors.third};
    :hover {
      stroke: ${theme.colors.secondary};
    }
  }
`;

export const MidDrawerContainer = styled.div`
  width: 100%;
  position: relative;
  overflow-y: auto;
  grid-row: 2/100;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const BottomDrawerContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
`;
