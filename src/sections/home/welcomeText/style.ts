import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  position: relative;
  min-width: 300px;
  width: 100vw;
  ${cssSnippets.padding}
  display: flex;
`;
