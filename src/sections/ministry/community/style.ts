import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  min-width: 300px;
  width: 100vw;
  gap: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  ${cssSnippets.padding}
`;

export const ImageBoxContainer = styled.div`
  width: 100%;
  min-height: 180px;
  @media (max-width: ${theme.breakpoints.Md}px) {
    min-height: 300px;
  }
`;

export const BiggerImageBoxContainer = styled.div`
  width: 100%;
  min-height: 440px;
  @media (max-width: ${theme.breakpoints.Md}px) {
    min-height: 300px;
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: cover;
  width: 100%;
  object-position: 50% 50%;
  height: 100%;
`;
