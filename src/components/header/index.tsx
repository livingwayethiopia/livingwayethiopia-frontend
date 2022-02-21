
import React, { useEffect } from 'react';
import { HeaderContainer, Logo, Detail, FullScreenComponent, MobileScreenComponent, NavLink, ButtonNav } from './style';
import { useNavBar } from '../../contexts/navbar';
import LogoContainer from '../logo';
import Image from "next/image";
import { useRouter } from 'next/router';
import ChangeLanguage from '../lang';
import HeaderPopover from './popover';

const Header = () => {
    const navbar = useNavBar();
    const router = useRouter();

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
                                return <NavLink
                                    className='text-sm xl:text-lg'
                                    isSticky={navbar.isSticky} key={index} active={router.asPath === data.path} onClick={() => {
                                        navbar.updateNavBar(data.path);
                                        router.push(data.path, undefined, { shallow: true })
                                    }}>
                                    {data.name}
                                </NavLink>
                            else if (data.button) {
                                return <ButtonNav key={index} >
                                    <div className="border" />
                                    <button className='buttonContainer text-sm xl:text-lg' onClick={async () => {
                                        window.open(`https://youtube.com/channel/${process.env.NEXT_PUBLIC_YOUTUBECHANNELID}`, '_blank');
                                    }}>
                                        {data.name}
                                        <div style={{ width: 20, height: 20 }}>
                                            <Image loading="eager" width={20} height={20} src="/icons/live.svg" alt="live" />
                                        </div>
                                    </button>
                                </ButtonNav>
                            }

                    })}
                    <div className={" ml-2 "}>
                        <ChangeLanguage />
                    </div>
                </FullScreenComponent>
                <MobileScreenComponent>
                    <div className='navBar cursor-pointer' onClick={() => {
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
