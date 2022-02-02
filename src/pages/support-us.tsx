import type { NextPage } from 'next'
import Layout from '../components/layout';
import SupportUsContainer from '../sections/support-us';
import { request, gql } from 'graphql-request';
import { SupportUsEntity } from '../types/strapi';

const SupportUs = ({ supportUs }: { supportUs: SupportUsEntity }) => {
  return (
    <Layout header={"Support Us"} >
      <SupportUsContainer supportUs={supportUs} />
    </Layout>
  )
}

export default SupportUs


export async function getStaticProps({ }) {
  const query = gql`
    query Query($locale: I18NLocaleCode) {
      supportUs(locale: $locale) {
        data {
          attributes {
            Giving {
              title
              detail
              heroImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              bank {
                name
                detail
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            partnership {
              title
              detail
              partnership {
                title
                description
                coverImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              heroImage {
                data {
                  attributes {
                    url
                  }
                }
              }
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
  return {
    props: {
      supportUs: data.supportUs.data,
    },
    revalidate: 600,
  };
}
