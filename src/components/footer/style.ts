import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.div`
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  min-width: 320px;
  ${cssSnippets.padding}
  background-color: ${theme.colors.footer_background};
  .bottom {
    width: 100%;
    p {
      font-size: 14px;
      line-height: 18px;
      color: ${theme.colors.white};
    }
  }
  .divider {
    width: 100%;
    /* margin-left: 5%; */
    margin-bottom: 20px;
    margin-top: 20px;
    justify-self: center;
    z-index: 1;
    border: 1px solid ${theme.colors.border_color};
  }
`;

export const TextContainer = styled.div`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    margin: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .detailText {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    opacity: 0.8;
  }
  .multipleDetailText {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
  }
  .SocialList {
    cursor: pointer;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    svg {
      fill: ${theme.colors.white};
      :hover {
        fill: ${theme.colors.primary};
      }
    }
  }
`;
