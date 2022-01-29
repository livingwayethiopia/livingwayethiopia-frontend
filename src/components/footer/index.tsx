import React, { useState } from "react";
import MapDisplay from './map';
import Image from "next/image";
import { FooterContainer, MapContainer, TextContainer } from './style';
import LangDropdown from '../local';

const Footer = () => {
    return <FooterContainer>
        <div className="upper">
            <MapContainer>
                <MapDisplay />
            </MapContainer>
            <TextContainer>
                <div>
                    <p className="title">
                        Address
                    </p>
                    <p className='detailText mt-2 mb-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
                <div>
                    <p className="title">
                        Mail
                    </p>
                    <p className='detailText mt-2 mb-2'>
                        P.O. Box: 12091
                    </p>
                </div>
                <div>
                    <p className="title">
                        Phone Number
                    </p>
                    <div className="multipleDetailText mt-2 mb-2">
                        <div className='left'>
                            <p className='detailText'>
                                +25111223344
                            </p>
                            <p className='detailText'>
                                +25111223344
                            </p>
                        </div>
                        <div className='right'>
                            <p className='detailText'>
                                +25111223344
                            </p>
                            <p className='detailText'>
                                +25111223344
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='title'>
                        Email Address
                    </p>
                    <p className="detailText mt-2 mb-2">
                        LivingwayEthiopia@gmail.com
                    </p>
                </div>
                <div>
                    <p className='title'>
                        Connects
                    </p>
                    <div className='SocialList'>
                        <Image loading="eager" width={25} height={25} src="/icons/twitter.svg" alt="social-twitter" onClick={() => {
                            window.open('https://twitter.com', '_blank');
                        }} />
                        <Image loading="eager" width={25} height={25} src="/icons/facebook.svg" alt="social-facebook" onClick={() => {
                            window.open('https://www.facebook.com/LivingWayChurch1', '_blank');
                        }} />
                        <Image loading="eager" width={25} height={25} src="/icons/instagram.svg" alt="social-instagram" onClick={() => {
                            window.open('https://www.instagram.com/livingway_church', '_blank');
                        }} />
                        <Image loading="eager" width={25} height={25} src="/icons/youtube.svg" alt="social-youtube" onClick={() => {
                            window.open(`https://youtube.com/channel/${process.env.NEXT_PUBLIC_YOUTUBECHANNELID}`, '_blank');
                        }} />
                    </div>
                </div>
            </TextContainer>
        </div>
        <div className="divider" />
        <div className="bottom flex w-full flex-wrap justify-between items-center gap-x-10 gap-y-2">
            <p>
                Copyright © {new Date().getFullYear()}, Living way Ethiopia . Power by
            </p>
        </div>
    </FooterContainer>

}

export default Footer;