
import React from 'react';
import { theme } from '../../../styles/theme';
import { ComponentSupportUsGiving, Maybe } from '../../../types/strapi';
import { ImageContainer } from './style';
import ReactHtmlParser from 'react-html-parser';

const GivingComponent = ({ data }: { data: Maybe<ComponentSupportUsGiving> }) => {
    return (
        <div className="relative mt-12 " style={{ paddingTop: 20 }}>
            {data?.heroImage?.data?.attributes?.url! && <div className="relative h-96 w-auto overflow-hidden " >
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
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:gap-6  xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
                {data?.bank!.map((item, index) => {
                    return <div key={index} className="shadow-md rounded-2xl w-full p-4 " style={{ background: `${theme.colors.background}` }}>
                        <div className="flex flex-row items-start gap-4">
                            {item?.image?.data?.attributes?.url! && <div className='relative rounded-md overflow-hidden' style={{ width: 100, height: 75 }} >
                                <ImageContainer
                                    loading='lazy'
                                    placeholder="blur"
                                    blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + item?.image?.data?.attributes?.url!}
                                    layout='fill'
                                    alt="giving"
                                    quality={100}
                                    src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + item?.image?.data?.attributes?.url!}
                                />
                            </div>}
                            <div className=" w-full flex flex-col justify-between">
                                <div>
                                    <p className=" text-xl font-medium">
                                        {ReactHtmlParser(item?.name!)}
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        {ReactHtmlParser(item?.detail!)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </div>

    );
}

export default GivingComponent;