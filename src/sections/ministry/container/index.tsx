
import React, { useState } from 'react';
import Image from "next/image";
import { Container, TabContainer, } from './style';
import { theme } from '../../../styles/theme';
import StaffMember from '../staff';
import BackgroundInfo from '../background';
import { ComponentMinistryMinistry, Maybe } from '../../../types/strapi';


const MinistryContainer = ({ ministryData, title }: { ministryData: Maybe<ComponentMinistryMinistry>, title: string, }) => {

    const [ministry, setMinistry] = useState({
        staff: ministryData?.staffMember,
        background: {
            image: ministryData?.InfoImage?.data?.attributes?.url,
            text: ministryData?.BackgroundInfo
        },
    })

    return (
        <Container >
            <div className='topPart tabs w-full  flex justify-center'>
                <p className='text-3xl font-black  text-center' >
                    {title}
                </p>
            </div>
            {ministry.staff! &&
                <StaffMember staff={ministry.staff!} />
            }{
                ministry.background! &&
                ministry.background.text! &&
                ministry.background.image! &&
                <BackgroundInfo background={ministry.background} />}
        </Container>
    );
}

export default MinistryContainer;