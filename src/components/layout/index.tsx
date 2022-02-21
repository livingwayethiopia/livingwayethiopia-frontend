import React, { useState } from "react";
import Header from "../header";
import { Waypoint } from "react-waypoint";
import Drawer from '../drawer';
import { LayoutContainer } from './style';
import Footer from '../footer';
import Subscription from '../subscription';
import { useNavBar } from '../../contexts/navbar';
import Head from 'next/head';

export default function Layout({ children,
    background,
    header = "Living Way Ethiopia",
    headerImage = `https://cms.livingwayethiopia.org/uploads/lw_25_b9516a3869.jpg`,
    headerTitle = "Living Way Ethiopia",
    headerDescription = process.env.NEXT_PUBLIC_LANGUAGE === "en" ? "We are a community of believers aspiring to be an authentic Christian community that glorifies Christ in both proclamation and lifestyle. Though we are not a gathering of perfect people, yet as a community, we believe that we are in the process of sanctification.  This is why we strive to devote ourselves to studying Scripture, prayer, fellowship and the sharing of resources." :
        "እኛ ክርስቶስን በቃል እና በተግባር የሚያከብር እውነተኛ የአማኞች ማህበር ለመሆን የምንሻ ህብረት ነን፡፡ ምንም ያህል እንኳን ፍጹማን ሰዎች ባንሆንም፣ እንደማህበር በቅድስና ሂደት ላይ እንዳለን እና ይህ ደግሞ አጽንኦት ሊሰጠው የሚገባ ነገር እንደሆነ እናምናለን፡፡ ስለዚህም ቃሉን ለማጥናት፣ ለጸሎት፣ ለሕብረት እና ያለንን ለማካፈል እንተጋለን፡፡" }
    : any) {
    const navbar = useNavBar();
    const onWaypointPositionChange = ({ currentPosition }: any) => {
        if (currentPosition === "above")
            navbar.updateIsSticky(true);
        if (currentPosition === "inside")
            navbar.updateIsSticky(false);
    };
    return (
        <React.Fragment>
            <Head>
                <title>{header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={headerTitle} />
                <meta property="og:description" content={headerDescription} />
                <meta property="og:image" content={headerImage} />
            </Head>
            <LayoutContainer background={background}>
                <Header />
                <Drawer />
                <Waypoint
                    onEnter={() => {
                        navbar.updateIsSticky(false);
                    }}
                    onPositionChange={onWaypointPositionChange}
                />
                <main>
                    {children}
                </main>
                <Footer />
            </LayoutContainer>
        </React.Fragment>
    );
}
