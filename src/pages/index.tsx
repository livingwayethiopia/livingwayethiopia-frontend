import type { NextPage } from 'next'
import Layout from '../components/layout';
import Welcome from '../sections/home/hero';
import ServiceSection from '../sections/home/service';
import EventSection from '../sections/home/event';
import Vision from '../sections/home/vision';
import OurCurchSection from '../sections/home/ourChurch';
import { request, gql } from 'graphql-request';
import { HomepageEntity } from '../types/strapi';

const Home = ({ homePage }: { homePage: HomepageEntity }) => {
  return (
    <Layout header={homePage?.attributes?.seo?.title!} >
      <Welcome hero={homePage.attributes?.heroImage?.data?.attributes?.url!} title={homePage.attributes?.heroTitle!} description={homePage.attributes?.heroDescription!} />
      <ServiceSection serviceData={homePage.attributes?.serviceTime!} />
      <EventSection images={homePage.attributes?.events?.data!} />
      <Vision
        vision={homePage.attributes?.missionAndVision?.vision!}
        image={homePage.attributes?.visionAndValueImage?.data?.attributes?.url!}
        mission={homePage.attributes?.missionAndVision?.mission!}
      />
      <OurCurchSection images={homePage.attributes?.ourChurchImage?.data!} />
    </Layout>
  )
}

export default Home


export async function getStaticProps({ }) {
  const query = gql`
    query Query($locale: I18NLocaleCode) {
      homepage(locale: $locale) {
        data {
          id
          attributes {
            heroImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            events {
              data {
                attributes {
                  url
                }
              }
            }
            ourChurchImage {
              data {
                attributes {
                  url
                }
              }
            }
            serviceTime {
              id
              title
              description
            }
            heroTitle
            heroDescription
            visionAndValueImage {
              data {
                attributes {
                  url
                }
              }
            }
            seo{
              title
            }
            missionAndVision {
              id
              mission
              vision
            }
            publishedAt
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
  return {
    props: {
      homePage: data.homepage.data,
    },
    revalidate: 3600,
  };
}

