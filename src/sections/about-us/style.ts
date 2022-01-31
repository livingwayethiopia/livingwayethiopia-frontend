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

  .paddingSnippet {
    ${cssSnippets.padding}
  }
  .sermonContainerBottom {
    ${cssSnippets.padding}
  }
`;

interface TabContainerData {
  active?: boolean;
}

export const TabContainer = styled.p<TabContainerData>`
  font-weight: ${(props) => (props.active ? "bolder" : "bolder")};
  color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.third};
  transition: color 0.2s ease-out;
  :hover {
    color: ${theme.colors.primary};
  }
`;
