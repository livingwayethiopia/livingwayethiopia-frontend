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

export const ImageContainer = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 40% 100%;
  border-radius: 20px;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  overflow: hidden;
  position: relative;
`;
