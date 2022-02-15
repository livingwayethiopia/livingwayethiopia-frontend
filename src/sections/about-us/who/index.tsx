
import React from 'react';
import { theme } from '../../../styles/theme';
import { AboutUsEntity } from '../../../types/strapi';
import { Container, ImageContainer } from './style';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const WhoWeAre = ({ aboutUs, }:
    { aboutUs: AboutUsEntity, }) => {

    return (
        <Container >
            <div className="mt-10">
                {aboutUs?.attributes?.whoWeAre &&
                    aboutUs?.attributes?.whoWeAre?.map((data, index) => {
                        return <div key={index} className='mt-10'>
                            <p className='text-3xl font-black mb-5'>{data?.Title}</p>
                            <div className={data?.detail?.length! > 1 ? "grid gap-6 row-gap-10 mx-auto lg:grid-cols-2" : ""}>
                                {data?.detail && data?.detail!.map((item, index) => {
                                    return <div className="flex w-full" key={index}>
                                        {data?.detail?.length! > 1 && <div className="mr-4">
                                            <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-indigo-50" style={{ background: "#3FDBB1" }}>
                                                <svg width="20" height="18" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.7066 3.51178L11.3734 19.8747C11.0451 20.2763 10.5876 20.4834 10.1267 20.4834C9.76097 20.4834 9.39351 20.3525 9.08604 20.0869L0.752606 12.8134C0.0342672 12.1869 -0.0822419 11.042 0.492729 10.2567C1.067 9.47399 2.11683 9.34564 2.83517 9.97335L9.93255 16.1668L22.2149 1.09489C22.8251 0.34264 23.8799 0.275286 24.5674 0.943709C25.2558 1.61083 25.3183 2.75953 24.7066 3.51178Z" fill="#fff" />
                                                </svg>

                                            </div>
                                        </div>}
                                        <div>
                                            <ReactMarkdown remarkPlugins={[[remarkGfm]]} className='text-gray-900'>
                                                {item?.content!}
                                            </ReactMarkdown>
                                        </div>
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