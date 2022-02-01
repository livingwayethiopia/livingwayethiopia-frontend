
import React from 'react';
import { theme } from '../../../styles/theme';
import { AboutUsEntity } from '../../../types/strapi';
import { Container, ImageContainer } from './style';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const Beliefs = ({ aboutUs, }:
    { aboutUs: AboutUsEntity, }) => {

    return (
        <Container >
            {aboutUs?.attributes?.ourBeliefs && <div className="mt-10">
                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl mt-10 sm:mt-24" >
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-normal leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto" style={{ color: theme.colors.primary }}>
                        <span className="relative inline-block" style={{ color: theme.colors.primary }}>
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="27df4f81-c854-45de-942a-fe90f7a300f9"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-5xl py-3 font-sans ">Our</span>
                        </span>{' '}
                        <span className='sm:mt-2  text-5xl py-3 font-sans font-thin tracking-widest text-center ' style={{ color: theme.colors.primary }}> Beliefs</span>
                    </h2>
                </div>
                <div className='flex flex-wrap '>
                    {aboutUs?.attributes?.ourBeliefs?.media?.data?.attributes?.url! &&
                        <div className='w-0 md:w-4/12 rounded-lg overflow-hidden'>
                            <div className='relative w-full ' style={{ height: "100%" }} >
                                <ImageContainer
                                    loading='lazy'
                                    placeholder='blur'
                                    blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + aboutUs?.attributes?.ourBeliefs?.media?.data?.attributes?.url!}
                                    src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + aboutUs?.attributes?.ourBeliefs?.media?.data?.attributes?.url!}
                                    layout='fill'
                                    quality={100}
                                    alt='video-Image'
                                />

                            </div>
                        </div>}
                    <div className='w-full md:w-8/12 md:px-2'>
                        <ReactMarkdown remarkPlugins={[[remarkGfm]]} className='text-lg font-thin text-left'>
                            {aboutUs?.attributes?.ourBeliefs?.detail!}
                        </ReactMarkdown>
                    </div>

                </div>
            </div>}
        </Container >
    );
}

export default Beliefs;