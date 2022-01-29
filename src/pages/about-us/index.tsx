import Layout from '../../components/layout';
import { request, gql } from 'graphql-request';
import { AboutUsEntity } from '../../types/strapi';
import AboutUsContainer from '../../sections/about-us';

const AboutUS = ({ aboutUs, members }: { aboutUs: AboutUsEntity, members: { image: string, name: string, title: string }[] }) => {
    return (
        <Layout header={"About Us"} >
            <AboutUsContainer aboutUs={aboutUs} members={members} />
        </Layout>
    )
}

export default AboutUS



export async function getStaticProps({ }) {
    const query = gql`
        query AboutUs($locale: I18NLocaleCode) {
            aboutUs(locale: $locale) {
                data {
                attributes {
                    churchStaff {
                        avatar {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        name
                        title
                    }
                    ourBeliefs
                    missionAndValues {
                        value
                    }   
                }
                }
            }
        }
    `
    const variables = {
        "locale": process.env.NEXT_PUBLIC_LANGUAGE,
    }
    const data = await request(
        process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, variables)
    let members: { image: string, name: string, title: string }[] = [];
    if (data?.aboutUs?.data?.attributes?.churchStaff! != null)
        for (let resData of data?.aboutUs?.data?.attributes?.churchStaff!) {
            members = [...members, {
                title: resData?.title,
                name: resData?.name,
                image: resData?.avatar?.data?.attributes?.url
            }
            ]
        }
    return {
        props: {
            aboutUs: data.aboutUs.data,
            members: members,
        },
        revalidate: 3600,
    };
}

