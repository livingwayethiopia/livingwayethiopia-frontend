
import React from 'react';
import { theme } from '../../../styles/theme';
import { AboutUsEntity } from '../../../types/strapi';
import { Container, ImageContainer } from './style';
import ReactHtmlParser from 'react-html-parser';
import { marked } from "marked";


const WhoWeAre = ({ aboutUs, }:
    { aboutUs: AboutUsEntity, }) => {

    return (
        <Container >
            <div className="mt-10">
                {aboutUs?.attributes?.whoWeAre &&
                    aboutUs?.attributes?.whoWeAre?.map((data, index) => {
                        return <div key={index} className='mt-5'>
                            <p className='text-3xl font-extrabold mb-5'>{data?.Title}</p>
                            <div className={data?.detail?.length! > 1 ? "grid gap-x-6 gap-y-1 justify-between row-gap-10 mx-auto lg:grid-cols-2" : ""}>
                                {data?.detail && data?.detail!.map((item, index) => {
                                    return <div className="flex w-full items-start " key={index}>
                                        {data?.detail?.length! > 1 && <div className="mr-4">
                                            <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-indigo-50" style={{ background: theme.colors.primary }}>
                                                <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke='#fff' />
                                                    <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke='#fff' />
                                                </svg>

                                            </div>
                                        </div>}
                                        {item?.content! && <div className=' pr-10 sm:pr-2'>
                                            {ReactHtmlParser(marked.parse(item?.content!))}
                                        </div>}
                                    </div>
                                })
                                }
                            </div>
                        </div>
                    })
                }

            </div>
        </Container >
    );
}

export default WhoWeAre;