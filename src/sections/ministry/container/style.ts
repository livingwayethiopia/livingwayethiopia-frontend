import { Arrow } from "./../../home/event/style";
import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  min-width: 300px;
  width: 100vw;
  gap: 10px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  .topPart {
    margin: 0px;
    display: flex;
    gap: 10px;
    width: 100%;
    padding-top: 80px;
    text-align: center;
    color: ${theme.colors.primary};
    ${cssSnippets.padding}
  }
  .sermonBottom {
    padding-top: 110px;
  }
`;

interface TabContainerData {
  active?: boolean;
}

export const TabContainer = styled.div<TabContainerData>`
  p {
    font-size: 20px;
    margin: 0px;
    font-weight: ${(props) => (props.active ? "bolder" : "bolder")};
    color: ${(props) =>
      props.active ? theme.colors.primary : theme.colors.third};
    transition: all 0.2s ease-out;
    :hover {
      /* font-weight: bolder; */
      color: ${theme.colors.primary};
    }
  }
  display: flex;
  align-items: center;
  cursor: pointer;
  ${cssSnippets.select}
`;
