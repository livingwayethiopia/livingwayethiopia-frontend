import styled from "styled-components";
import Image from "next/image";
import { theme } from "../../../../styles/theme";
import { cssSnippets } from "../../../../styles/cssSnippets";
export const Container = styled.div`
  ${cssSnippets.padding}
  margin-bottom: 200px;
`;

export const ImageContainer = styled(Image)`
  object-fit: cover;
  width: 100%;
  object-position: 50% 50%;
  height: 100%;
`;
