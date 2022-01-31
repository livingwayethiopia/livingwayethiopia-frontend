
import router from 'next/router';
import React from 'react';
import { theme } from '../../../styles/theme';
import ReactHtmlParser from 'react-html-parser';
import { BackGroundImage, ButtonContainer, HallowButton, LeftContainer, WelcomeContainer, } from './style';


const Welcome = ({ hero, title, description }: { hero: string, title: string, description: string }) => {
    let images = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + hero;
    if (hero == null)
        images = "/images/header.webp";
    return (
        <WelcomeContainer >
            <BackGroundImage
                loading="lazy"
                placeholder="blur"
                blurDataURL={images}
                src={images}
                layout='fill'
                alt="hero-image"
                className='z-10'
            />
            <LeftContainer className='z-20'>
                <p className='title'>
                    {ReactHtmlParser(title)}
                </p>
                <p className='midText text-xl'>
                    {ReactHtmlParser(description)}
                </p>
                <div className="buttonContainer ">
                    <ButtonContainer onClick={async () => {
                        let element: any = document.getElementById("subscription");
                        await element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })

                        setTimeout(function () {
                            document.getElementById("subInput")?.focus();

                        }, 800);

                    }}>
                        <p>
                            Subscribe
                        </p>
                    </ButtonContainer>
                    <HallowButton onClick={() => {
                        router.push(`/articles`, undefined, { shallow: true })
                    }}>
                        <p>
                            Read More
                        </p>
                    </HallowButton>
                </div>
            </LeftContainer>
            <div className='absolute  z-10' style={{ width: "100%", height: "100%", background: `${theme.colors.third}66` }} />
        </WelcomeContainer>
    );
}

export default Welcome;
