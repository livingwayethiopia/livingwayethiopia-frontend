import styled from "styled-components";
import { theme } from "../../styles/theme";
interface LayoutContainerData {
  background?: string;
}
export const LayoutContainer = styled.header<LayoutContainerData>`
  background-color: ${(props) =>
    props.background ? props.background : theme.colors.background_secondary};
  color: ${theme.colors.text};
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  li {
    list-style-type: circle;
    margin-left: 20px;
  }
`;
