import React, { useState } from "react";
import MapDisplay from "./map";
import { FooterContainer, TextContainer } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <div className="flex flex-wrap gap-x-10 gap-y-4 justify-between w-auto">
          <div className="w-48">
            <p className="title">
              {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "Address" : "አድራሻ"}
            </p>
            <p className="detailText mt-2 mb-2">
              {process.env.NEXT_PUBLIC_LANGUAGE === "en"
                ? "Behind the Exhibition Center and St. Joseph's School, around Bole Flamingo Cafe"
                : "ቦሌ ፍላሚንጎ ካፌ ጋር ባለው ቅያስ ገባ ብሎ ኤግዚቢሽን ማዕከል እና ሴንት ጆሴፍ ት/ቤት ጀርባ"}
            </p>
          </div>
          <div>
            <p className="title">
              {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "Mail" : "ፖስታ"}
            </p>
            <p className="detailText mt-2 mb-2">
              {process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "P.O.BOX" : "ፖ.ሳ. ቁ"}
              : 4478
            </p>
          </div>

          <div>
            <p className="title">
              {process.env.NEXT_PUBLIC_LANGUAGE === "en"
                ? "Phone Number"
                : "ስልክ ቁጥር"}
            </p>
            <div className="multipleDetailText mt-2 mb-2 flex">
              <div className="left">
                <p className="detailText">+251901777774</p>
                <p className="detailText">+251901777775</p>
              </div>
            </div>
          </div>
          <div>
            <p className="title">
              {process.env.NEXT_PUBLIC_LANGUAGE === "en"
                ? "Email Address"
                : "የ ኢሜል አድራሻ"}
            </p>
            <div className="right ">
              <div className="w-full flex flex-col gap-x-4 mt-2 mb-2 justify-between ">
                <p className="detailText mb-1">Info@livingwayethiopia.org</p>
                <p className="detailText mb-1">livingwayethiopia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <p className="title">Connects</p> */}
          <div className="SocialList">
            <svg
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                window.open("https://twitter.com/livingwayethiop", "_blank");
              }}
            >
              <path d="M29.9547 2.93389C29.9281 2.53274 29.6638 2.18653 29.2839 2.05504C28.904 1.92355 28.4823 2.03235 28.2134 2.33123C27.5222 3.09955 26.6486 3.62017 25.762 3.85755C24.5289 2.70631 22.872 2.00004 21.0513 2.00004C17.1436 2.00004 13.9785 5.1723 13.9785 9.08223V9.96185C7.99597 9.49952 4.79676 4.95497 3.9335 2.64939C3.79396 2.27672 3.44674 2.02225 3.04935 2.00141C2.65196 1.98058 2.28003 2.19734 2.10229 2.55338C0.00883627 6.74675 -0.313715 10.8139 1.2078 14.2773C2.54064 17.3111 5.22111 19.7278 9.02017 21.3289C7.29358 22.5525 4.38758 24 1.00008 24C0.559542 24 0.170899 24.2883 0.043089 24.7099C-0.0847215 25.1315 0.078411 25.5871 0.444784 25.8317C3.69299 28.0005 7.09729 28.0003 10.2637 28L10.3606 28C20.0819 28 27.9599 20.1076 27.9599 10.375V9.41844C28.6868 8.67969 29.2527 7.92345 29.5995 6.9458C29.9865 5.85491 30.0645 4.59 29.9547 2.93389Z" />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/LivingWayChurch1",
                  "_blank"
                );
              }}
            >
              <path d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 22.9482 23.818 29.4526 16 29.9672V18H20V16H16V13C16 11.3431 17.3431 10 19 10H20V8H19C16.2386 8 14 10.2386 14 13V16H10V18H14V29.9672C6.18197 29.4526 0 22.9482 0 15Z" />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/livingway_church",
                  "_blank"
                );
              }}
            >
              <path d="M15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C4.02944 0 0 4.02944 0 9V21C0 25.9706 4.02944 30 9 30H21C25.9706 30 30 25.9706 30 21V9C30 4.02944 25.9706 0 21 0H9ZM8 15C8 11.134 11.134 8 15 8C18.866 8 22 11.134 22 15C22 18.866 18.866 22 15 22C11.134 22 8 18.866 8 15ZM22 8H24V6H22V8Z"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                window.open(
                  `https://youtube.com/channel/${process.env.NEXT_PUBLIC_YOUTUBECHANNELID}`,
                  "_blank"
                );
              }}
            >
              <path d="M17.1972 15L14 17.1315V12.8685L17.1972 15Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.01221 3.54611C10.9144 1.85279 19.0856 1.85279 26.9878 3.54611C28.7448 3.92261 30 5.47531 30 7.27218V22.7278C30 24.5247 28.7448 26.0774 26.9878 26.4539C19.0856 28.1472 10.9144 28.1472 3.01221 26.4539C1.25523 26.0774 0 24.5247 0 22.7278V7.27218C0 5.47531 1.25523 3.92261 3.01221 3.54611ZM13.5547 10.168C13.2478 9.96338 12.8533 9.94431 12.5281 10.1183C12.203 10.2923 12 10.6312 12 11V19C12 19.3688 12.203 19.7077 12.5281 19.8817C12.8533 20.0557 13.2478 20.0366 13.5547 19.8321L19.5547 15.8321C19.8329 15.6466 20 15.3344 20 15C20 14.6656 19.8329 14.3534 19.5547 14.168L13.5547 10.168Z"
              />
            </svg>
          </div>
        </div>
      </TextContainer>
      <div className="divider" />
      <div className="bottom flex w-full flex-wrap justify-center items-center gap-x-10 gap-y-2">
        <p>
          {process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? `Copyright © ${new Date().getFullYear()}, Living way Ethiopia. Power by etn.et`
            : `የቅጂ መብት © ${new Date().getFullYear()}, ህያው መንገድ ኢትዮጵያ። የተሰራው በ etn.et`}
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
