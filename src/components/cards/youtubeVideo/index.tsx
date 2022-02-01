import React from "react";
import Image from "next/image";
import { VideoCardContainer, } from './style';
import { theme } from '../../../styles/theme';

const YoutubeVideoCard = ({ data }: { data: { image: string, title: string, description: string, playing?: boolean } }) => {
    return <VideoCardContainer>
        <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL={data.image}
                src={data.image}
                layout='fill'
                alt="video-Image"
            />
            {data.playing && <div className='absolute z-30 flex justify-center items-center' style={{ height: "100%", width: "100%", background: `${theme.colors.third}99` }}>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1787 0.346191C31.2019 0.346191 40.1787 9.3187 40.1787 20.3578C40.1787 31.3737 31.2019 40.3462 20.1787 40.3462C9.15555 40.3462 0.178711 31.3737 0.178711 20.3578C0.178711 9.3187 9.15555 0.346191 20.1787 0.346191ZM17.9007 12.406C17.476 12.406 17.0706 12.5025 16.6845 12.6954C16.2019 12.9656 15.8158 13.3901 15.6034 13.8918C15.4683 14.2391 15.2559 15.2811 15.2559 15.3004C15.0436 16.4388 14.9277 18.2912 14.9277 20.3365C14.9277 22.2873 15.0436 24.0606 15.2173 25.2184C15.2366 25.2377 15.449 26.5305 15.6806 26.9743C16.1054 27.7847 16.9355 28.2864 17.8235 28.2864H17.9007C18.4799 28.2671 19.6961 27.7654 19.6961 27.7461C21.7424 26.8971 25.7772 24.2536 27.3988 22.4977L27.5146 22.3819C27.727 22.1696 27.9972 21.8416 28.0552 21.7644C28.364 21.3592 28.5185 20.8575 28.5185 20.3578C28.5185 19.7963 28.3447 19.2753 28.0165 18.8508C27.9393 18.7736 27.6498 18.4456 27.3795 18.1754C25.7965 16.4774 21.6652 13.6988 19.503 12.8498C19.1748 12.7167 18.3447 12.4253 17.9007 12.406Z" fill="white" />
                </svg>

            </div>}
        </div>
        <div className='videoCardBottom'>
            <p className='text-base font-bold mb-2'>
                {data.title}
            </p>
            <p className='videoDescription mb-4 text-sm'>
                {data.description.slice(0, 50)}{data.description.length > 50 && '...'}
            </p>
        </div>
    </VideoCardContainer>


}

export default YoutubeVideoCard;