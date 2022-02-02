import Layout from "../../components/layout";
import MinistryContainer from "../../sections/ministry/container";

import { request, gql } from "graphql-request";
import { MinistryEntity } from "../../types/strapi";

const YouthMinistry = ({ ministry }: { ministry: MinistryEntity }) => {
  return (
    <Layout header={"Youth Ministry"}>
      <MinistryContainer
        ministryData={ministry?.attributes?.youth!}
        title={
          process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? "Youth Ministry"
            : "የወጣቶች አገልግሎቶች"
        }
      />
    </Layout>
  );
};

export default YouthMinistry;

export async function getStaticProps({}) {
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
  `;
  const variables = {
    locale: process.env.NEXT_PUBLIC_LANGUAGE,
  };
  const data = await request(
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!,
    query,
    variables
  );
  return {
    props: {
      ministry: data.ministry.data,
    },
    revalidate: 3600,
  };
}
