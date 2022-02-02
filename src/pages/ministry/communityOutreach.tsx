import Layout from '../../components/layout';

import { request, gql } from 'graphql-request';
import { CommunityOutReachEntity, MinistryEntity } from '../../types/strapi';
import CommunityOutReach from '../../sections/ministry/communityOutreach';

const CommunityOutReachMinistry = ({ community }: { community: CommunityOutReachEntity }) => {
  return (
    <Layout header={"Community Out Reach"} >
      <CommunityOutReach community={community} />
    </Layout>
  )
}

export default CommunityOutReachMinistry



export async function getStaticProps({ }) {
  const query = gql`
  query Query {
    communityOutReach {
      data {
        attributes {
          vocationalYouthTrainings {
            title
            detail
            media {
              data {
                attributes {
                  url
                }
              }
            }
          }
          womenEmpowerment {
            detail
            title
            media {
              data {
                attributes {
                  url
                }
              }
            }
          }
          childrenHolistics {
            title
            detail
            media {
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
      community: data.communityOutReach.data,
    },
    revalidate: 600,
  };
}

