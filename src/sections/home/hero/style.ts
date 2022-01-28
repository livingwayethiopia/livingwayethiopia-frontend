import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const WelcomeContainer = styled.div`
  position: relative;
  min-width: 300px;
  width: 100vw;
  padding-bottom: 40vh;
  @media (max-width: ${theme.breakpoints.LG}px) {
    padding-bottom: 150px;
  }
  @media (max-width: ${theme.breakpoints.SM}px) {
    padding-bottom: 75px;
  }
  display: flex;
`;

export const BackGroundImage = styled(Image)`
  z-index: 1;
  object-fit: cover;
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  padding-left: 15vw;
  gap: 0px;
  @media (min-width: 1800px) {
    padding-top: 150px;
  }
  @media (max-width: ${theme.breakpoints.XXL}px) {
    padding-left: 7.5vw;
    width: 60%;
    padding-top: 12.5%;
  }
  @media (max-width: ${theme.breakpoints.XL}px) {
    padding-left: 5vw;
  }
  @media (max-width: ${theme.breakpoints.LG}px) {
    padding-left: 2.5vw;
    width: 60%;
  }
  @media (max-width: ${theme.breakpoints.XMd}px) {
    width: 75%;
  }
  @media (max-width: ${theme.breakpoints.Md}px) {
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    width: 80%;
  }
  @media (max-width: ${theme.breakpoints.SM}px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 95%;
    padding-top: 100px;
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    letter-spacing: -1px;
    color: ${theme.colors.white};
    margin-bottom: 20px;
    line-height: 55px;
  }
  .midText {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: ${theme.colors.white};
  }
  .buttonContainer {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 418px) {
      button {
        width: 100%;
      }
    }
  }
`;

export const ButtonContainer = styled.button`
  border: 0px;
  border-radius: 9px;
  height: 55px;
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  :hover {
    padding-left: 30.5px;
    padding-right: 30.5px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: ${theme.colors.white};
  }
`;

export const HallowButton = styled.button`
  border: 2px solid ${theme.colors.white};
  box-sizing: border-box;
  height: 55px;
  border-radius: 9px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  :hover {
    border: 3px solid ${theme.colors.white};
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${theme.colors.white};
  }
`;
