
import React from 'react';
import { VideoListContainer } from './style';
import VideoCard from '../../../components/cards/video';
import router from 'next/router';
import { PlaylistType } from '../../../types/custom';

const VideoList = ({ playlists }: { playlists: PlaylistType[] }) => {

    return (
        <VideoListContainer >
            <div className='videoListBottom '>
                {playlists?.map((item, index: number) => {
                    return <div key={index} className='videoCard' onClick={() => {
                        router.push(`sermon/video/${item.id}`, undefined, { shallow: true })
                    }}>
                        <VideoCard data={{
                            image: item.snippet.thumbnails.high.url,
                            title: item.snippet.localized.title,
                            description: item.snippet.localized.description,
                            count: item.contentDetails.itemCount
                        }} />
                    </div>
                })}
            </div>
        </VideoListContainer >
    );
}

export default VideoList;
