
import React from 'react';
import { theme } from '../../../styles/theme';
import { AboutUsEntity } from '../../../types/strapi';
import { Container } from './style';;


const WhoWeAre = ({ aboutUs, }:
    { aboutUs: AboutUsEntity, }) => {

    return (
        <Container >

            {aboutUs?.attributes?.ourBeliefs && <div className="mt-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-wide uppercase" style={{ color: theme.colors.primary }}>Our Beliefs</h2>
                        <p className="mt-4 max-w-2xl text-xl text-left mx-auto" style={{ color: theme.colors.text }}>
                            {aboutUs?.attributes?.ourBeliefs}
                        </p>
                    </div>
                </div>
            </div>}
        </Container >
    );
}

export default WhoWeAre;