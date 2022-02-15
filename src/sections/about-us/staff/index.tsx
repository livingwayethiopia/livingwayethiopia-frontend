import React from "react";
import HtmlParser from "react-html-parser";
import { theme } from "../../../styles/theme";
import { AboutUsEntity } from "../../../types/strapi";
import { Container, ImageContainer } from "./style";

const Staffs = ({
  members,
}: {
  members: { image: string; name: string; title: string }[];
}) => {
  return (
    <Container className="mt-10">
      <p
        className="sm:mt-2 md:mt-9 text-6xl py-3  font-extraBold tracking-widest text-center mb-10"
        style={{ color: theme.colors.primary }}
      >
        {process.env.NEXT_PUBLIC_LANGUAGE === "en"
          ? HtmlParser(`Our Team`)
          : "የቤተክርስቲያን አገልጋዮች"}
      </p>
      <div className="rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 py-2">
        {members.map((data, index) => {
          return (
            <div
              className="flex-col flex justify-center items-center py-3 bg-slate-50 shadow-sm  hover:shadow-md rounded-lg "
              key={index}
            >
              <div
                className="relative  overflow-hidden imageCard "
                style={{ borderColor: theme.colors.text, width: "100%" }}
              >
                <ImageContainer
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={
                    process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image
                  }
                  layout="fill"
                  alt="profile"
                  quality={100}
                  src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image}
                />
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span
                  className=" text-lg font-bold"
                  style={{ color: theme.colors.text }}
                >
                  {data.name}
                </span>
                <span className="text-md" style={{ color: "#343D48" }}>
                  {data.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Staffs;
