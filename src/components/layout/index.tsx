import React, { useState } from "react";
import Header from "../header";
import { Waypoint } from "react-waypoint";
import Drawer from '../drawer';
import { LayoutContainer } from './style';
import Footer from '../footer';
import Subscription from '../subscription';
import { useNavBar } from '../../contexts/navbar';
import Head from 'next/head';

export default function Layout({ children, background, header = "Living Way Ethiopia" }: any) {
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
                <Subscription />
                <Footer />
            </LayoutContainer>
        </React.Fragment>
    );
}
