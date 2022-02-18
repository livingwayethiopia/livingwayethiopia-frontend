import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, ImageContainer } from "./style";
import Navigation from "../../../components/navigation";
import axios from "axios";
import router, { useRouter } from "next/router";
import ErrorPage from "../../../components/error";
import Loading from "../../../components/loading";
import DateComponent from "../../../components/dateComponent";
import YoutubeVideoCard from "../../../components/cards/youtubeVideo";
import { theme } from "../../../styles/theme";
import { VideoType } from "../../../types/custom";

const SingleVideo = ({ videos }: { videos: VideoType[] }) => {
  const [allVideos, setAllVideos] = useState<VideoType[]>();
  const [currentVideos, setCurrentVideos] = useState<VideoType[]>();

  const [video, setVideo] = useState<VideoType | null>(
    allVideos ? allVideos[0] : null
  );

  useEffect(() => {
    if (videos) {
      setAllVideos([...videos]);
      let lengthData = 6;
      if (videos.length < 6) lengthData = videos.length;
      setCurrentVideos([...videos?.slice(0, lengthData)]);
      if (videos.length > 0) setVideo(videos[0]);
    }
    return () => {};
  }, []);

  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(6);

  const update = (startData: number, endData: number) => {
    setStart(startData);
    setEnd(endData);
    setCurrentVideos([...allVideos!.slice(startData, endData)]);
    let element: any = document.getElementById("videoRelated");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Container style={{ paddingTop: 80 }}>
      <Navigation routeData="/sermon" />

      <div className="videoVisual mt-5 shadow-sm relative">
        {video && (
          <>
            <p className="mb-2 text-xl">{video.snippet.title}</p>
            <DateComponent date={video.snippet.publishedAt} />
            <div className="mb-3" />
            <div className="background">
              <div className="">
                <ImageContainer
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={`${video.snippet.thumbnails.high?.url}`}
                  src={`${video.snippet.thumbnails.high?.url}`}
                  layout="fill"
                  quality={100}
                  alt="video-Image"
                />
              </div>
            </div>

            <iframe
              id="ytplayer"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              frameBorder="0"
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </>
        )}
      </div>
      {video && (
        <div className="w-full py-10 description ">
          <p className="mb-2 text-lg">Description</p>
          <p className="mb-2 text-base">{video.snippet.description}</p>
        </div>
      )}
      <div id="videoRelated" />
      <div
        className=" shadow-sm "
        style={{ background: theme.colors.background }}
      >
        <p className="text-2xl pl-5 pt-3">Related Videos</p>
        <div className="w-full py-5  flex flex-wrap " id="ytplayerDescription">
          {currentVideos?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 px-3 mb-5 "
                onClick={() => {
                  setVideo(item);
                  let element: any = document.getElementById("ytplayer");
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "end",
                  });
                }}
              >
                <YoutubeVideoCard
                  data={{
                    description: item.snippet.description,
                    title: item.snippet.title,
                    image: item.snippet.thumbnails.medium.url,
                    playing:
                      video?.snippet.resourceId.videoId ===
                      item?.snippet.resourceId.videoId,
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className=" px-4 py-3 flex items-center justify-end border-gray-200 ">
          {start > 0 && (
            <div
              onClick={() => {
                let startData = start - 6;
                let endData = end - 6;
                update(startData, endData);
              }}
              className=" cursor-pointer relative inline-flex items-center px-4 py-2 border border-gray-300 text-md font-medium rounded-md  text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </div>
          )}
          <div className=" w-full h-10"></div>
          {allVideos && allVideos!.length > end && (
            <div
              onClick={() => {
                let startData = start + 6;
                let endData = end + 6;
                update(startData, endData);
              }}
              className=" cursor-pointer ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-md font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SingleVideo;
