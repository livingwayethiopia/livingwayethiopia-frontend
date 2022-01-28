
import React, { useEffect, useState } from 'react';
import { HeaderContainer, Logo, Detail, FullScreenComponent, MobileScreenComponent, NavLink, ButtonNav } from './style';
import { useNavBar } from '../../contexts/navbar';
import LogoContainer from '../logo';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react'
import { loadDefaultErrorComponents } from 'next/dist/server/load-components';
import axios from "axios";



// 

const Header = () => {
    const navbar = useNavBar();
    const router = useRouter();

    useEffect(() => {
        getLiveData();
        return () => {
        }
    }, [])


    const getLiveData = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_YOUTUBECHANNELID}&type=video&eventType=live&key=${process.env.NEXT_PUBLIC_YOUTUBEAPIKEY}`,
            });
            if (res.status === 200) {
                if (res.data?.items?.length) {
                    navbar.updateVideoId(res.data?.items[0]?.id?.videoId);
                    navbar.updateLive(true);
                }
            } else { throw new Error() }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <HeaderContainer isSticky={navbar.isSticky}>
            <Logo>
                <LogoContainer />
            </Logo>
            <Detail>
                <FullScreenComponent center={true}>
                    {navbar.paths.map((data, index) => {
                        if (data.path === "/about-us") return (
                            <Popover key={index} >
                                {({ open }) => {
                                    if (navbar.about !== open)
                                        navbar.updateAbout(open)
                                    return <>
                                        <Popover.Button >
                                            <NavLink isSticky={navbar.isSticky} active={navbar.about || router.asPath.toLocaleLowerCase().includes(data.path)} onClick={() => {
                                                navbar.updateNavBar(data.path);
                                            }}>
                                                {data.name}
                                            </NavLink>
                                        </Popover.Button>

                                        <Transition
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                        >
                                            <Popover.Panel className="absolute z-50 w-screen max-w-sm mt-6 transform -translate-x-1/2 lg:left-1/2 md:left-3/4 2xl:left-2/3 sm:px-0 lg:max-w-4xl">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                        {navbar.aboutUs.map((item: any, index: number) => (
                                                            <div
                                                                key={index}
                                                                onClick={() => {
                                                                    navbar.updateNavBar(data.path);
                                                                    router.replace(`/about-us${item.path}`, undefined, { shallow: true })
                                                                }}
                                                                className="
                                                                cursor-pointer
                                                                flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                            >
                                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                                                    <item.iconData aria-hidden="true" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <p className="text-sm font-medium text-gray-900">
                                                                        {item.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                }}
                            </Popover>
                        )
                        else if (!data.button)
                            return <NavLink isSticky={navbar.isSticky} key={index} active={router.asPath === data.path && !navbar.about} onClick={() => {
                                navbar.updateNavBar(data.path);
                                router.push(data.path, undefined, { shallow: true })
                            }}>
                                {data.name}
                            </NavLink>
                        else if (data.button && navbar.live && navbar.videoId) {
                            return <ButtonNav key={index} >
                                <div className="border" />
                                <button className='buttonContainer' onClick={() => {
                                    window.open(`https://www.youtube.com/watch?v=${navbar.videoId}`, '_blank');
                                }}>
                                    {data.name}
                                    <div style={{ width: 20, height: 20 }}>
                                        <Image loading="eager" width={20} height={20} src="/icons/live.svg" alt="live" />
                                    </div>
                                </button>
                            </ButtonNav>
                        }

                    })}
                </FullScreenComponent>
                <MobileScreenComponent>
                    <div className='navBar' onClick={() => {
                        navbar.updateDrawerView();
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <g id="menu">
                                <path id="Icon color" fillRule="evenodd" clipRule="evenodd" d="M10 8V5C10 3.89543 9.10457 3 8 3H5C3.89543 3 3 3.89543 3 5V8C3 9.10457 3.89543 10 5 10H8C9.10457 10 10 9.10457 10 8ZM16 3H19C20.1046 3 21 3.89543 21 5V8C21 9.10457 20.1046 10 19 10H16C14.8954 10 14 9.10457 14 8V5C14 3.89543 14.8954 3 16 3ZM8 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21H8C9.10457 21 10 20.1046 10 19V16C10 14.8954 9.10457 14 8 14ZM16 14H19C20.1046 14 21 14.8954 21 16V19C21 20.1046 20.1046 21 19 21H16C14.8954 21 14 20.1046 14 19V16C14 14.8954 14.8954 14 16 14Z" />
                            </g>
                        </svg >
                    </div>
                </MobileScreenComponent>
            </Detail>
        </HeaderContainer>
    );
}




export default Header;
