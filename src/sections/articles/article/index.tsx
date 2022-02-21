import React, { useState } from "react";
import Image from "next/image";
import { ArticleContainer } from "./style";
import Navigation from "../../../components/navigation";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { ArticleEntity } from "../../../types/strapi";
import ReactHtmlParser from "react-html-parser";
import { marked } from "marked";
dayjs.extend(LocalizedFormat);

const ArticleSection = ({ article }: { article: ArticleEntity }) => {
  const data: {
    title: string;
    date: string;
    image: string;
    text: string;
  } = {
    title: article?.attributes?.title!,
    date: article?.attributes?.publishedAt,
    image: article?.attributes?.image?.data?.attributes?.url!,
    text: article?.attributes?.content!,
  };

  const markdown = () => {
    return (
      <p className="text-lg font-extralight font-sans mt-2 mb-4 px-3 md:px-5 bodyText">
        {data.text}
      </p>
    );
  };
  return (
    <ArticleContainer className="mt-20">
      <Navigation routeData="/articles" />
      <div className="px-0 md:px-10">
        <p className="text-4xl font-extrabold mt-4">{data.title}</p>
        <p className="text-md font-extralight font-sans mt-2 mb-4">
          Published on{" "}
          <span className="underline underline-offset-1 ">
            {" "}
            {dayjs(data.date).format("LL")}
          </span>
          , by The Church
        </p>
        <div className="relative w-auto imageData">
          {data.image! && (
            <Image
              className="rounded-xl"
              loading="lazy"
              placeholder="blur"
              blurDataURL={
                process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image!
              }
              src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image!}
              layout="fill"
              alt="podcast-Image"
            />
          )}
        </div>
        {data!.text! && (
          <p className="text-md mt-2 mb-4 px-3 md:px-5 bodyText">
            {ReactHtmlParser(marked.parse(data!.text!))}
          </p>
        )}
      </div>
    </ArticleContainer>
  );
};

export default ArticleSection;
