
import React, { useEffect } from 'react';
import { HeaderContainer, Logo, Detail, FullScreenComponent, MobileScreenComponent, NavLink, ButtonNav } from './style';
import { useNavBar } from '../../contexts/navbar';
import LogoContainer from '../logo';
import Image from "next/image";
import { useRouter } from 'next/router';
import axios from "axios";
import ChangeLanguage from '../lang';
import HeaderPopover from './popover';

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
                        if (data.path === "/ministry") return (
                            <HeaderPopover data={data} key={index} />
                        )
                        else
                            if (!data.button)
                                return <NavLink isSticky={navbar.isSticky} key={index} active={router.asPath === data.path} onClick={() => {
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
                    <div className={
                        !(navbar.live && navbar.videoId) ?
                            'border-cyan-700  border-l-2  ' : " ml-4 "}>
                        <ChangeLanguage />
                    </div>
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
