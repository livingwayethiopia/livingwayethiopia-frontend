import React from "react";
import {
  Arrow,
  EventContainer,
  IconImage,
  SliderContainer,
  Title,
} from "./style";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { UploadFileEntity } from "../../../types/strapi";

const EventSection = ({ images }: { images: UploadFileEntity[] }) => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    breakpoints: {
      "(min-width: 560px)": {
        slides: {
          perView: images.length >= 2 ? 2 : images.length,
          spacing: 10,
        },
      },
      "(min-width: 700px)": {
        slides: {
          perView: images.length >= 3 ? 3 : images.length,
          spacing: 15,
        },
      },
      "(min-width: 1000px)": {
        slides: {
          perView: images.length >= 4 ? 4 : images.length,
          spacing: 15,
        },
      },
      "(min-width: 1600px)": {
        slides: {
          perView: images.length >= 6 ? 6 : images.length,
          spacing: 15,
        },
      },
      "(min-width: 2100px)": {
        slides: {
          perView: images.length >= 8 ? 8 : images.length,
          spacing: 15,
        },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <>
      <EventContainer>
        <Title className="text-3xl mb-10 mt-14">
          {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "Events" : "ዝግጅቶች"}
        </Title>
      </EventContainer>
      <SliderContainer>
        <div ref={ref} className="keen-slider">
          {images.map((data, index) => {
            return (
              <div className="keen-slider__slide customSlider" key={index}>
                <Image
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={
                    process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                    data.attributes?.url!
                  }
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
                    data.attributes?.url!
                  }
                  alt="event"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
        <Arrow
          left={true}
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        >
          <Image
            loading="eager"
            src="/icons/leftArrow.svg"
            alt="event"
            width={25}
            height={25}
          />
        </Arrow>
        <Arrow
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        >
          <Image
            loading="eager"
            src="/icons/arrowRight.svg"
            alt="event"
            width={25}
            height={25}
          />
        </Arrow>
      </SliderContainer>
    </>
  );
};

export default EventSection;
