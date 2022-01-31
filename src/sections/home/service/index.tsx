
import React from 'react';
import { Title } from '../event/style';
import Image from "next/image";
import { CardContainer, InnerServiceContainer, ServiceContainer, } from './style';
import { ComponentHomepageServiceTime, Maybe } from '../../../types/strapi';
import ReactHtmlParser from 'react-html-parser';


interface ServiceDataType {
    title: string,
    detail: string,
}
const ServiceSection = ({ serviceData }: { serviceData: Maybe<ComponentHomepageServiceTime>[] }) => {
    return (
        <ServiceContainer >
            <Title className="mb-10 mt-14">
                Service Times
            </Title>
            <InnerServiceContainer>
                {serviceData.map((data, index) => {
                    return <CardContainer key={index}>
                        <div className="left">
                            <Image src="/icons/calendar.svg" alt="calender" width={35} height={35} loading="eager" />
                        </div>
                        <div className="right">
                            <p className='text-xl leading-8 font-extrabold mb-3 md:mt-4'>
                                {ReactHtmlParser(data!.title!)}
                            </p>
                            <p className='text-sm font-thin '>
                                {ReactHtmlParser(data!.description!)}
                            </p>
                        </div>
                    </CardContainer>
                })}

            </InnerServiceContainer>
        </ServiceContainer>
    );
}

export default ServiceSection;
