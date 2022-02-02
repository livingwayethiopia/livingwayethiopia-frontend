import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";

export const SermonContainer = styled.div`
  min-width: 300px;
  width: 100vw;
  gap: 10px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  .topPart {
    padding-top: 70px;
    margin: 0px;
    display: flex;
    position: fixed;
    gap: 10px;
    width: 100%;
    z-index: 15;
    background-color: ${theme.colors.background_secondary};
    flex-direction: column;
    .tabs {
      display: flex;
      justify-content: space-around;
      padding-top: 2.5px;
      gap: 30px;
      ${cssSnippets.padding}
    }
    .divider {
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.third}22;
      border-radius: 50px;
    }
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
