import type { NextPage } from 'next'
import Layout from '../components/layout';
import MinistryContainer from '../sections/ministry/container';

import { request, gql } from 'graphql-request';
import { MinistryEntity } from '../types/strapi';

const Ministry = ({ ministry }: { ministry: MinistryEntity }) => {
  return (
    <Layout>
      <MinistryContainer ministryData={ministry} />
    </Layout>
  )
}

export default Ministry



export async function getStaticProps({ }) {
  const query = gql`
query Query($locale: I18NLocaleCode) {
  ministry(locale: $locale) {
    data {
      attributes {
        youth {
          BackgroundInfo
          InfoImage {
            data {
              attributes {
                url
              }
            }
          }
          communityOutReach {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          staffMember {
            name
            title
            avatar {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
        children {
          BackgroundInfo
          InfoImage {
            data {
              attributes {
                url
              }
            }
          }
          communityOutReach {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          staffMember {
            name
            title
            avatar {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
        senior {
          BackgroundInfo
          InfoImage {
            data {
              attributes {
                url
              }
            }
          }
          communityOutReach {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          staffMember {
            name
            title
            avatar {
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
}
    `
  const variables = {
    "locale": process.env.NEXT_PUBLIC_LANGUAGE,
  }
  const data = await request(
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, variables)
  return {
    props: {
      ministry: data.ministry.data,
    },
    revalidate: 3600,
  };
}

