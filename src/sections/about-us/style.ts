import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-width: 300px;
  width: 100vw;
  padding-bottom: 100px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  position: relative;
  .topPart {
    margin: 0px;
    display: flex;
    position: fixed;
    gap: 10px;
    width: 100%;
    z-index: 15;
    padding-top: 20px;
    background-color: ${theme.colors.background_secondary};
    flex-direction: column;
    .tabs {
      display: flex;
      justify-content: space-around;
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

  .sermonContainerBottom {
    ${cssSnippets.padding}
  }
`;

interface TabContainerData {
  active?: boolean;
}

export const TabContainer = styled.div<TabContainerData>`
  margin: 0px;
  font-weight: ${(props) => (props.active ? "bolder" : "bolder")};
  color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.third};
  transition: all 0.2s ease-out;
  :hover {
    color: ${theme.colors.primary};
  }
  display: flex;
  align-items: center;
  cursor: pointer;
  ${cssSnippets.select}
`;
