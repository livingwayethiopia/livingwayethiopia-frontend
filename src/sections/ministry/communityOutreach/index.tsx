
import React, { useState } from 'react';
import { theme } from '../../../styles/theme';
import { ComponentGlobalDetailedContainer, Maybe, CommunityOutReachEntity } from '../../../types/strapi';
import { Container, ImageContainer, TabContainer } from './style';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CommunityContainer from './community';


const CommunityOutReach = ({ community, }:
    { community: CommunityOutReachEntity, }) => {
    const [tap, setTap] = useState<number>(0);
    const [communityData, setCommunityData] = useState<Maybe<ComponentGlobalDetailedContainer>[]>(community.attributes?.childrenHolistics!)
    return (
        <Container >
            <div className='CommunityOutReachTopPart '>
                <div className='CommunityOutReachTabs'>
                    <TabContainer className='text-sm  md:text-xl font-light font-sans' active={tap === 0} onClick={() => {
                        setTap(0)
                        setCommunityData(community.attributes?.childrenHolistics!)
                        let element: any = document.getElementById("CommunityOutReach");
                        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
                    }}>
                        Children Holistic's
                    </TabContainer>
                    <TabContainer className='text-sm   md:text-xl font-light font-sans' active={tap === 1} onClick={() => {
                        setTap(1);
                        setCommunityData(community.attributes?.womenEmpowerment!)
                        let element: any = document.getElementById("CommunityOutReach");
                        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
                    }}>
                        Women Empowerment
                    </TabContainer>
                    <TabContainer className='text-sm   md:text-xl  font-light font-sans' active={tap === 2} onClick={() => {
                        setTap(2);
                        setCommunityData(community.attributes?.vocationalYouthTrainings!)

                        let element: any = document.getElementById("CommunityOutReach");
                        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
                    }}>
                        Vocational Youth Training's
                    </TabContainer>
                </div>
                <div className='CommunityOutReachDivider' />
            </div>
            <div id="CommunityOutReach" />
            <CommunityContainer community={communityData} />

        </Container >
    );
}

export default CommunityOutReach;