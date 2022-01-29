
import React from 'react';
import { theme } from '../../styles/theme';
import { AboutUsEntity } from '../../types/strapi';
import { Container, ImageContainer } from './style';;


const AboutUsContainer = ({ aboutUs, members }:
    { aboutUs: AboutUsEntity, members: { image: string, name: string, title: string }[] }) => {

    return (
        <Container >
            {aboutUs?.attributes?.ourBeliefs && <div className="mt-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-wide uppercase" style={{ color: theme.colors.primary }}>Our Beliefs</h2>
                        <p className="mt-4 max-w-2xl text-xl text-left mx-auto" style={{ color: theme.colors.text }}>
                            {aboutUs?.attributes?.ourBeliefs}
                        </p>
                    </div>
                </div>
            </div>}
            {aboutUs?.attributes?.missionAndValues &&
                <div className="mt-10 px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-normal leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
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
                                <span className="relative">Our</span>
                            </span>{' '}
                            Values and Mission
                        </h2>
                    </div>
                    <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                        {aboutUs?.attributes?.missionAndValues?.map((data, index) => {
                            if (data?.value?.length! > 0)
                                return <div className="flex  max-w-md sm:mx-auto sm:flex-row" key={index}>
                                    <div className="mr-4">
                                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50" style={{ background: "#3FDBB1" }}>
                                            <svg width="24" height="18" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.7066 3.51178L11.3734 19.8747C11.0451 20.2763 10.5876 20.4834 10.1267 20.4834C9.76097 20.4834 9.39351 20.3525 9.08604 20.0869L0.752606 12.8134C0.0342672 12.1869 -0.0822419 11.042 0.492729 10.2567C1.067 9.47399 2.11683 9.34564 2.83517 9.97335L9.93255 16.1668L22.2149 1.09489C22.8251 0.34264 23.8799 0.275286 24.5674 0.943709C25.2558 1.61083 25.3183 2.75953 24.7066 3.51178Z" fill="#fff" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-3 text-lg leading-7 text-gray-900">
                                            {data?.value}
                                        </p>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>}
            <p className='sm:mt-2 md:mt-9 text-5xl py-3 font-sans font-thin tracking-widest text-center mb-10' style={{ color: "#EA3A60" }}>
                Main Church  Staff
                <br />
                And leaders
            </p>
            <div className="rounded-lg grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3  gap-4 py-2">
                {members.map((data, index) => {
                    return <div className="flex-col flex justify-center items-center py-3 hover:bg-slate-50 hover:shadow-md rounded-lg " key={index}>
                        <div className="relative rounded-full h-36 w-36 overflow-hidden border-2 " style={{ borderColor: theme.colors.text }}>
                            <ImageContainer
                                loading='lazy'
                                placeholder="blur"
                                blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image}
                                layout='fill'
                                alt="profile"
                                quality={100}
                                src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.image}
                            />
                        </div>
                        <div className="mt-2 text-center flex flex-col">
                            <span className=" text-lg font-bold" style={{ color: theme.colors.text }}>
                                {data.name}
                            </span>
                            <span className="text-xs" style={{ color: "#343D48" }}>
                                {data.title}
                            </span>
                        </div>
                    </div>
                })}

            </div>

        </Container >
    );
}

export default AboutUsContainer;