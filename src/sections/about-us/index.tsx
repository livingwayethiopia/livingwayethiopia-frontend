
import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import { AboutUsEntity } from '../../types/strapi';
import Beliefs from './beliefs';
import Staffs from './staff';
import { Container, TabContainer } from './style'; import WhoWeAre from './who';
;


const AboutUsContainer = ({ aboutUs, members }:
    { aboutUs: AboutUsEntity, members: { image: string, name: string, title: string }[] }) => {

    const [tap, setTap] = useState<number>(0);
    return (
        <Container >
            <div className='absolute flex z-50 bg-white gap-3 justify-between w-full items-center paddingSnippet py-2 mt-2 shadow-sm'>
                <TabContainer active={tap === 0} className='w-1/3 text-md sm:text-xl font-black text-center cursor-pointer' onClick={() => {
                    setTap(0)
                }}>
                    Who We are
                </TabContainer>
                <TabContainer active={tap === 1} className='w-1/3 text-md sm:text-xl font-black text-center cursor-pointer' onClick={() => {
                    setTap(1);
                }}>
                    Vision
                </TabContainer>
                <TabContainer active={tap === 2} className='w-1/3 text-md sm:text-xl font-black text-center cursor-pointer ' onClick={() => {
                    setTap(2);
                }}>
                    Staff Member
                </TabContainer>
                <div className='divider' />
            </div>
            <div className='h-6'></div>
            <div className='sermonContainerBottom'>
                {tap === 0 && <WhoWeAre aboutUs={aboutUs} />}
                {tap === 1 && <Beliefs aboutUs={aboutUs} />}
                {tap === 2 && <Staffs members={members} />}
            </div>


        </Container >
    );
}

export default AboutUsContainer;