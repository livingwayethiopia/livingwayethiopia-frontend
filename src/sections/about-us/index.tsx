import React, { useState } from "react";
import { theme } from "../../styles/theme";
import { AboutUsEntity } from "../../types/strapi";
import Beliefs from "./beliefs";
import Staffs from "./staff";
import { Container, TabContainer } from "./style";
import WhoWeAre from "./who";
const AboutUsContainer = ({
  aboutUs,
  members,
}: {
  aboutUs: AboutUsEntity;
  members: { image: string; name: string; title: string }[];
}) => {
  const [tap, setTap] = useState<number>(0);
  return (
    <Container>
      <div className="topPart ">
        <div className="tabs">
          <TabContainer
            className="text-md sm:text-2xl"
            active={tap === 0}
            onClick={() => {
              setTap(0);
              let element: any = document.getElementById("aboutUS");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }}
          >
            {process.env.NEXT_PUBLIC_LANGUAGE === "en"
              ? "Who We Are"
              : "እኛ ማን ነን"}
          </TabContainer>
          <TabContainer
            className="text-md sm:text-2xl"
            active={tap === 1}
            onClick={() => {
              setTap(1);
              let element: any = document.getElementById("aboutUS");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }}
          >
            {process.env.NEXT_PUBLIC_LANGUAGE === "en"
              ? "Our Beliefs"
              : "የእምነት አቋማችን"}
          </TabContainer>
          <TabContainer
            className="text-md sm:text-2xl"
            active={tap === 2}
            onClick={() => {
              setTap(2);
              let element: any = document.getElementById("aboutUS");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }}
          >
            {process.env.NEXT_PUBLIC_LANGUAGE === "en"
              ? "Church Staff"
              : "የቤተክርስቲያን አገልጋዮች"}
          </TabContainer>
        </div>
        <div className="divider" />
      </div>
      <div className="h-6" id="aboutUS"></div>
      <div className="sermonContainerBottom">
        {tap === 0 && <WhoWeAre aboutUs={aboutUs} />}
        {tap === 1 && <Beliefs aboutUs={aboutUs} />}
        {tap === 2 && <Staffs members={members} />}
      </div>
    </Container>
  );
};

export default AboutUsContainer;
