import React, { useState } from "react";
import {
  MainContainer,
  TopDrawerContainer,
  MidDrawerContainer,
  BottomDrawerContainer,
} from "./style";
import { useNavBar } from "../../contexts/navbar";
import LogoContainer from "../logo";
import { theme } from "../../styles/theme";
import { useRouter } from "next/router";
import LangDropdown from "../local";
import { ButtonNav } from "../header/style";
import Image from "next/image";
import ChangeLanguage from "../lang";

const Drawer = () => {
  const navbar = useNavBar();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <MainContainer view={navbar.drawerView}>
      <TopDrawerContainer>
        <LogoContainer />
        <svg
          width="22.5"
          height="22.5"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            navbar.updateDrawerView();
          }}
        >
          <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" />
        </svg>
      </TopDrawerContainer>
      <MidDrawerContainer>
        <div className="relative flex flex-col px-6" style={{ width: "100%" }}>
          {navbar.paths.map((data, index) => {
            if (data.path === "/ministry")
              return (
                <div key={index}>
                  <div
                    className="mx-1 flex justify-between border-b-2 align-middle border-gray-100 my-2  h-8 "
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <p
                      className=" w-full  text-lg font-bold"
                      style={{ color: theme.colors.third }}
                    >
                      {data.name}
                    </p>
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-3 text-gray-600 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {isOpen &&
                    navbar.aboutUs.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            navbar.updateNavBar(data.path);
                            router.replace(`/ministry${item.path}`, undefined, {
                              shallow: true,
                            });
                            navbar.updateDrawerView();
                          }}
                          className="
                                    ml-1 mb-1 cursor-pointer flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            <item.iconData aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-md font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            else if (!data.button)
              return (
                <div
                  key={index}
                  className="hover:bg-slate-200 flex items-center p-1 mb-1 rounded-md transition-colors justify-start"
                  style={{ width: "100%", height: 50 }}
                  onClick={() => {
                    router.replace(data.path, undefined, { shallow: true });
                    navbar.updateDrawerView();
                    navbar.updateNavBar(data.path);
                  }}
                >
                  <p
                    className="text-lg font-bold"
                    style={{ color: theme.colors.third }}
                  >
                    {data.name}
                  </p>
                </div>
              );
          })}
        </div>
      </MidDrawerContainer>
      <BottomDrawerContainer className="flex flex-wrap justify-center  py-2 px-2 ">
        <ButtonNav>
          <button
            className="buttonContainer"
            onClick={() => {
              window.open(
                `https://youtube.com/channel/${process.env.NEXT_PUBLIC_YOUTUBECHANNELID}`,
                "_blank"
              );
            }}
          >
            {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "LIVE" : "ቀትታ"}
            <div style={{ width: 20, height: 20 }}>
              <Image
                loading="eager"
                width={20}
                height={20}
                src="/icons/live.svg"
                alt="live"
              />
            </div>
          </button>
        </ButtonNav>

        <ChangeLanguage />
      </BottomDrawerContainer>
    </MainContainer>
  );
};

export default Drawer;
