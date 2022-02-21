import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const ArticleListContainer = styled.div`
  min-width: 300px;
  width: 100vw;
  gap: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ${cssSnippets.padding}
  .articleCard {
    margin: 0px;
    width: calc(50% - 10px);
    @media (max-width: ${theme.breakpoints.XMd}px) {
      width: 100%;
    }
  }
`;
