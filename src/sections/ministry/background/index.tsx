import React, { useState } from "react";
import Image from "next/image";
import { Container, ImageContainer, SliderContainer } from "./style";
import { theme } from "../../../styles/theme";
import { Maybe } from "../../../types/strapi";
import ReactHtmlParser from "react-html-parser";

interface backgroundType {
  image: string | undefined;
  text: Maybe<string> | undefined;
}
const BackgroundInfo = ({ background }: { background: backgroundType }) => {
  return (
    <Container className="sm:pt-10">
      <div className="relative ">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-1 ">
            <p
              className="mt-2 text-sm font-thin"
              style={{ color: theme.colors.text }}
            >
              {ReactHtmlParser(background.text!)}
            </p>
          </div>
          <div
            className="mt-10 relative lg:mt-0 lg:col-start-2"
            style={{ width: "100%", height: "100%", minHeight: 350 }}
          >
            <ImageContainer
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + background.image!
              }
              layout="fill"
              alt="background image data"
              quality={100}
              src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + background.image!}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BackgroundInfo;
