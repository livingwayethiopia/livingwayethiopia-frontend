import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const CardContainer = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 9px;
  background-color: transparent;
  overflow: hidden;
  /* background-color: ${theme.colors.background_secondary}; */
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  .imageContainer {
    height: 300px;
    width: 100%;
    margin: 0px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .articleTitle {
    margin: 0px;
    font-style: italic;
    display: flex;
    align-items: center;
    color: ${theme.colors.text};
  }
  .articleDescription {
    margin: 0px;
    font-size: 14px;
    color: ${theme.colors.text_third};
  }
  @media (max-width: ${theme.breakpoints.SMd}px) {
    background-color: ${theme.colors.background_secondary};
  }
  :hover {
    background-color: ${theme.colors.background_secondary};
    box-shadow: 3px 3px 10px ${theme.colors.third}33;
  }
`;
