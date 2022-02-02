import React, { useState } from "react";
import { SupportUsEntity } from "../../types/strapi";
import Giving from "./giving";
import PartnershipComponent from "./partnerShip";
import { Container, TabContainer } from "./style";

const SupportUsContainer = ({ supportUs }: { supportUs: SupportUsEntity }) => {
  enum CurrentTabData {
    Giving,
    Partnership,
  }

  const [current, setCurrent] = useState<CurrentTabData>(CurrentTabData.Giving);
  return (
    <Container>
      <div className="SupportUSTopPart ">
        <div className="SupportUSTabs">
          <TabContainer
            active={CurrentTabData.Giving === current}
            onClick={() => {
              setCurrent(CurrentTabData.Giving);
              let element: any = document.getElementById("SupportUS");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }}
          >
            <p>
              {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "Giving" : "ስጦታ"}
            </p>
          </TabContainer>
          <TabContainer
            active={CurrentTabData.Partnership === current}
            onClick={() => {
              setCurrent(CurrentTabData.Partnership);
              let element: any = document.getElementById("SupportUS");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }}
          >
            <p>
              {" "}
              {process.env.NEXT_PUBLIC_LANGUAGE === "en"
                ? "Partnership"
                : "አጋር ይሁኑ"}
            </p>
          </TabContainer>
        </div>
        <div className="SupportUSDivider" />
      </div>
      <div className="mb-10" id="SupportUS" />
      <div className="bottom">
        {supportUs?.attributes?.Giving! &&
          CurrentTabData.Giving === current && (
            <Giving data={supportUs?.attributes?.Giving!} />
          )}
        {supportUs?.attributes?.partnership! &&
          CurrentTabData.Partnership === current && (
            <PartnershipComponent data={supportUs?.attributes?.partnership!} />
          )}
      </div>
    </Container>
  );
};

export default SupportUsContainer;
