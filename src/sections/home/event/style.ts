import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const EventContainer = styled.div`
  min-width: 300px;
  background: ${theme.colors.background_secondary};
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .eventSectionTitle {
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    letter-spacing: -0.5px;
    color: ${theme.colors.text};
    padding-left: 15vw;
    padding-right: 15vw;
    @media (min-width: ${theme.breakpoints.XXXL}px) {
      padding-left: 17.5vw;
      padding-right: 17.5vw;
    }
    @media (max-width: ${theme.breakpoints.XXL}px) {
      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
    @media (max-width: ${theme.breakpoints.XL}px) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
    @media (max-width: ${theme.breakpoints.LG}px) {
      padding-left: 2.5vw;
      padding-right: 2.5vw;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
export const Title = styled.p`
  font-weight: 600;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.5px;
  color: ${theme.colors.text};
  ${cssSnippets.padding}
`;

export const IconImage = styled(Image)`
  object-fit: fill;
`;

export const SliderContainer = styled.div`
  position: relative;
  margin-bottom: 100px;
  .keen-slider {
    transition: height 0.3s;
  }
  .customSlider {
    height: 300px;
    border-radius: 9px;
    width: 400px;
    overflow: hidden;
  }
  .arrow-left {
    position: absolute;
    display: flex;
    top: 0;
    height: 100%;
    align-self: center;
    justify-content: center;
    background: #015b8f66;
    padding-left: 10px;
    padding-right: 10px;
    fill: #fff;
    cursor: pointer;
  }

  .arrow-right {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    height: 100%;
    align-self: center;
    justify-content: center;
    background: #015b8f66;
    padding-left: 10px;
    padding-right: 10px;
    fill: #fff;
    cursor: pointer;
  }
`;

interface ArrowType {
  left?: boolean;
}
export const Arrow = styled.div<ArrowType>`
  position: absolute;
  display: flex;
  top: 0;
  ${(props: any) => {
    if (props.left) return "left: 0;";
    else return "right: 0;";
  }}
  height: 100%;
  align-self: center;
  justify-content: center;
  background: #015b8f66;
  padding-left: 10px;
  padding-right: 10px;
  fill: #fff;
  cursor: pointer;
`;
