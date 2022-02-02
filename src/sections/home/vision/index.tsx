import React from "react";
import { BottomPart, TopImage, TopPart, VisionContainer } from "./style";
import ReactHtmlParser from "react-html-parser";

const Vision = ({
  vision,
  mission,
  image,
}: {
  vision: string;
  mission: string;
  image: string;
}) => {
  return (
    <VisionContainer>
      <TopPart>
        {image && (
          <TopImage
            loading="lazy"
            placeholder="blur"
            blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + image}
            src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + image}
            layout="fill"
            alt="vision"
            quality={100}
          />
        )}
        <div className="coverColor" />
        <p>
          {process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? "VISION & MISSION"
            : "ራዕይ እና እሴቶች"}
        </p>
      </TopPart>
      <BottomPart left={false}>
        <p className="title">
          {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "OUR VISION" : "ራዕይ"}
        </p>
        <p className="subText">{ReactHtmlParser(vision)}</p>
      </BottomPart>
      <BottomPart left={true}>
        <p className="title">
          {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "OUR MISSION" : "ተልዕኮ"}
        </p>
        <p className="subText">{ReactHtmlParser(mission)}</p>
      </BottomPart>
    </VisionContainer>
  );
};
export default Vision;
