import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const AudioContainer = styled.div`
  min-width: 300px;
  width: 100vw;
  position: relative;
  padding-bottom: 100px;
  background: ${theme.colors.background_secondary};
  ${cssSnippets.padding}
  .bodyText {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .imageData {
    height: 500px;
    object-fit: cover;
    width: 100%;
    object-position: center;
    @media (max-width: ${theme.breakpoints.SMd}px) {
      height: 300px;
    }
  }
`;
