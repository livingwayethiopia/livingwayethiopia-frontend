import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";
export const SubscriptionContainer = styled.div`
  width: 100vw;
  background-color: ${theme.colors.background_secondary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${cssSnippets.padding}
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 300px;
  right: 0px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
`;

export const SubscriptionBox = styled.div`
  width: 100%;
  z-index: 10;
  background-color: #f9fafcdd;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    color: ${theme.colors.text};
    font-style: normal;
  }
  .title {
    font-weight: 500;
    font-size: 32px;
    line-height: 50px;
    letter-spacing: -0.5px;
  }
  .subText {
    margin-top: 20px;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.5px;
    opacity: 0.6;
  }

  .form {
    margin-top: 40px;
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const SubscriptionFormInput = styled.input`
  width: 300px;
  height: 55px;
  @media (min-width: 520px) {
    width: 400px;
  }
  border: 0px;
  background-color: #eff3f7;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: ${theme.boarder.radius}px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #02073e;
  opacity: 0.8;
  @media (max-width: 595px) {
    width: 100%;
  }
  :focus {
    /* border: 1px solid ${theme.colors.primary}; */
    outline-color: ${theme.colors.secondary};
  }
`;
export const SubscriptionFormButton = styled.button`
  border-radius: ${theme.boarder.radius}px;
  border: 0px;
  height: 55px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  :hover {
    padding-left: 21px;
    padding-right: 21px;
    font-size: 20.5px;
  }
  @media (max-width: 595px) {
    width: 90%;
  }
  p {
    font-style: normal;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.5px;
    opacity: 0.8;
  }
`;
