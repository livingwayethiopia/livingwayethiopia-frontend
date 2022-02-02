import React from "react";
import { Title } from "../event/style";
import Image from "next/image";
import {
  BottomContainer,
  OurCurchContainer,
  SmallImage,
  TopContainer,
} from "./style";
import { UploadFileEntity } from "../../../types/strapi";

const OurCurchSection = ({ images }: { images: UploadFileEntity[] }) => {
  return (
    <OurCurchContainer>
      <Title className="text-3xl mb-10 mt-14">
        {process.env.NEXT_PUBLIC_LANGUAGE === "en"
          ? "Our Church"
          : "ቤተክርስቲያናችን"}
      </Title>
      <TopContainer>
        <div className="firstContainer">
          <div>
            {images[0] && (
              <SmallImage
                quality={100}
                loading="lazy"
                blurDataURL={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[0].attributes?.url!
                }
                placeholder="blur"
                src={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[0].attributes?.url!
                }
                alt="church image"
                layout="fill"
              />
            )}
          </div>
          <div>
            {images[1] && (
              <SmallImage
                quality={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[1].attributes?.url!
                }
                src={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[1].attributes?.url!
                }
                alt="church image"
                layout="fill"
              />
            )}
          </div>
        </div>
        {images[2] && (
          <div className="secondContainer">
            <SmallImage
              quality={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                images[2].attributes?.url!
              }
              src={
                process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                images[2].attributes?.url!
              }
              alt="church image"
              layout="fill"
            />
          </div>
        )}
        {images[3] && (
          <div className="thirdContainer">
            <SmallImage
              quality={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                images[3].attributes?.url!
              }
              src={
                process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                images[3].attributes?.url!
              }
              alt="church image"
              layout="fill"
            />
          </div>
        )}
      </TopContainer>
      {images.length > 4 && (
        <BottomContainer>
          {images[4] && (
            <div className="firstContainer">
              <SmallImage
                quality={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[4].attributes?.url!
                }
                src={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[4].attributes?.url!
                }
                alt="church image"
                layout="fill"
              />
            </div>
          )}
          <div className="secondContainer">
            {images[5] && (
              <SmallImage
                quality={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[5].attributes?.url!
                }
                src={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[5].attributes?.url!
                }
                alt="church image"
                layout="fill"
              />
            )}
          </div>
          <div className="thirdContainer">
            {images[6] && (
              <SmallImage
                quality={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[6].attributes?.url!
                }
                src={
                  process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                  images[6].attributes?.url!
                }
                alt="church image"
                layout="fill"
              />
            )}
          </div>
        </BottomContainer>
      )}
    </OurCurchContainer>
  );
};

export default OurCurchSection;
