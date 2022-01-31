
import React, { useState } from 'react';
import Image from "next/image";
import { SermonContainer, TabContainer } from './style';
import AudioList from './audio';
import PodcastList from './podcast';
import VideoList from './video';
import { useGeneralData } from '../../contexts/data';
import { EpisodeType } from '../../types/custom';

enum ActiveTabData {
    Podcasts,
    Videos,
    Audios,
}


const SermonSection = ({ episodes }: { episodes: EpisodeType[] }) => {
    const { sermon, updateSermon } = useGeneralData()
    return (
        <SermonContainer >
            <div className='topPart'>
                <div className='tabs'>
                    <TabContainer active={ActiveTabData.Videos === sermon} onClick={() => {
                        updateSermon(ActiveTabData.Videos)
                    }}>
                        <p>
                            Videos
                        </p>
                    </TabContainer>
                    <TabContainer active={ActiveTabData.Podcasts === sermon} onClick={() => {
                        updateSermon(ActiveTabData.Podcasts)
                    }}>
                        <p>
                            Podcast
                        </p>
                    </TabContainer>
                </div>
                <div className='divider' />
            </div>
            <div className='sermonBottom'>
                {ActiveTabData.Videos === sermon && <VideoList />}
                {ActiveTabData.Podcasts === sermon && <PodcastList episodes={episodes} />}
            </div>
        </SermonContainer>
    );
}

export default SermonSection;
