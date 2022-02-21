import Layout from "../../components/layout";
import MinistryContainer from "../../sections/ministry/container";

import { request, gql } from "graphql-request";
import { MinistryEntity } from "../../types/strapi";

const SmallGroupMinistry = ({ ministry }: { ministry: MinistryEntity }) => {
  return (
    <Layout header={"Small Group Ministry"}>
      <MinistryContainer
        ministryData={ministry?.attributes?.smallGroup!}
        title={
          process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? "Small Group Ministry"
            : "የመጽሐፍ ቅዱስ ጥናት ቡድኖች"
        }
      />
    </Layout>
  );
};

export default SmallGroupMinistry;

export async function getStaticProps({ }) {
  const query = gql`
    query Query($locale: I18NLocaleCode) {
      ministry(locale: $locale) {
        data {
          attributes {
            smallGroup {
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
    revalidate: 600,
  };
}
