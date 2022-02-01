
import React from 'react';
import { theme } from '../../../styles/theme';
import { ComponentSupportUsPartnerShip, Maybe } from '../../../types/strapi';
import { ImageContainer } from './style';
import ReactHtmlParser from 'react-html-parser';

const PartnershipComponent = ({ data }: { data: Maybe<ComponentSupportUsPartnerShip> }) => {

    return (

        <div className="relative mt-12 ">
            {data?.heroImage?.data?.attributes?.url! && <div className="relative h-96 w-auto overflow-hidden ">
                <ImageContainer
                    loading='lazy'
                    placeholder="blur"
                    blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data?.heroImage?.data?.attributes?.url!}
                    layout='fill'
                    alt="giving"
                    quality={100}
                    src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data?.heroImage?.data?.attributes?.url!}
                />
            </div>}
            <h4 className="text-5xl mt-10 leading-10 font-extrabold text-gray-900  tracking-tight sm:leading-9 text-center">
                {ReactHtmlParser(data?.title!)}
            </h4>
            <p className='text-center text-lg md:text-xl mt-10'>
                {ReactHtmlParser(data?.detail!)}
            </p>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {data?.partnership!.map((item, index) => {
                    return (
                        <div className="relative rounded-md overflow-hidden shadow-sm" style={{ background: `${theme.colors.background}55 `, }} key={index}>
                            <div className="py-3 z-10 text-xl absolute text-center " style={{ background: `${theme.colors.third}55`, color: theme.colors.white, width: "100%" }}>
                                <p >
                                    {ReactHtmlParser(item?.title!)}
                                </p>
                            </div>
                            {item?.coverImage?.data?.attributes?.url! &&
                                <div className="relative h-40 w-auto" style={{ width: "100%", height: 300 }}>
                                    <ImageContainer
                                        loading='lazy'
                                        placeholder="blur"
                                        blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + item?.coverImage?.data?.attributes?.url!}
                                        layout='fill'
                                        alt="giving"
                                        quality={100}
                                        src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + item?.coverImage?.data?.attributes?.url!}
                                    />
                                </div>
                            }
                            <div className='px-3'>
                                <p className="mt-2 text-lg font-thin ">Description</p>
                                <p className="mt-1 mb-3 text-sm  font-light leading-4 ">
                                    {ReactHtmlParser(item?.description!)}
                                </p>
                            </div>

                        </div>
                    )

                })}
            </div>
        </div>

    );
}

export default PartnershipComponent;