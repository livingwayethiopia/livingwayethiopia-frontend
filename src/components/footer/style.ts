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
  background-color: ${theme.colors.background};

  .bottom {
    width: 100%;
    align-self: flex-end;
    p {
      font-size: 14px;
      line-height: 18px;
      color: ${theme.colors.text};
    }
  }
  .upper {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    grid-column-gap: 35px;
    grid-row-gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .divider {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20px;
    margin-top: 20px;
    justify-self: center;
    z-index: 1;
    border: 1px solid ${theme.colors.border_color};
  }
`;

export const MapContainer = styled.div`
  width: 600px;
  min-width: 320px;
  @media (min-width: 1700px) {
    width: 750px;
  }
  @media (max-width: 1324px) {
    width: 600px;
  }
  @media (max-width: 1224px) {
    width: 575px;
  }
  @media (max-width: 1053px) {
    width: 500px;
  }
  @media (max-width: 953px) {
    width: 450px;
  }
  @media (max-width: 865px) {
    width: 400px;
  }
  @media (max-width: 834px) {
    width: 95vw;
  }
  @media (max-width: ${theme.breakpoints.SM}px) {
    width: calc(100vw - 40px);
  }
  height: 100%;
  background: #123;
  display: flex;
`;

export const TextContainer = styled.div`
  width: 400px;
  @media (max-width: 953px) {
    width: 350px;
  }
  @media (max-width: 834px) {
    width: 95vw;
  }
  @media (max-width: ${theme.breakpoints.SM}px) {
    width: calc(100vw - 40px);
  }
  color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 7.5px;
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
    flex-wrap: wrap;
    gap: 20px;
    svg {
      fill: ${theme.colors.secondary};
      :hover {
        fill: ${theme.colors.primary};
      }
    }
  }
`;
