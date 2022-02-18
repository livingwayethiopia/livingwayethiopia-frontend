import React from "react";
import Image from "next/image";
import { AudioContainer } from "./style";
import Navigation from "../../../components/navigation";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { theme } from "../../../styles/theme";
import { EpisodeType } from "../../../types/custom";
import ReactHtmlParser from "react-html-parser";
dayjs.extend(LocalizedFormat);

const AudioData = ({ episode }: { episode: EpisodeType }) => {
  const data = {
    title: episode?.title,
    date: episode?.pubDate,
    image: episode?.itunes?.image,
    audio: episode?.enclosure.url,
    description: episode?.itunes?.summary,
  };
  return (
    <AudioContainer className="mt-20">
      <Navigation routeData="/sermon" />
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
        <div className="w-auto mx-0 lg:mx-20">
          <div
            className="relative overflow-hidden imageData"
            style={{
              width: "100%",
              background: theme.colors.background,
              borderTopLeftRadius: 9,
              borderTopRightRadius: 9,
            }}
          >
            {data.image && (
              <img
                loading="lazy"
                placeholder="blur"
                src={data.image}
                className="imageData"
                alt="podcast-Image"
              />
            )}
          </div>
          <div
            className="w-auto py-5 px-0 sm:px-2"
            style={{
              background: theme.colors.background,
              borderBottomLeftRadius: 9,
              borderBottomRightRadius: 9,
            }}
          >
            <audio controls style={{ width: "100%", borderRadius: 0 }}>
              <source src={data.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <p className="text-lg font-extralight font-sans mb-4 px-3 md:px-5 bodyText mt-5">
          {ReactHtmlParser(data.description)}
        </p>
      </div>
    </AudioContainer>
  );
};

export default AudioData;
