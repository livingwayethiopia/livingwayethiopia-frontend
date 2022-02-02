import Layout from "../../components/layout";
import MinistryContainer from "../../sections/ministry/container";

import { request, gql } from "graphql-request";
import { MinistryEntity } from "../../types/strapi";

const MarriageAndFamilyMinistry = ({
  ministry,
}: {
  ministry: MinistryEntity;
}) => {
  return (
    <Layout header={"Marriage And Family Ministry"}>
      <MinistryContainer
        ministryData={ministry?.attributes?.marriageAndFamily!}
        title={
          process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? "Marriage And Family Ministry"
            : "ጋብቻ እና ቤተሰብ"
        }
      />
    </Layout>
  );
};

export default MarriageAndFamilyMinistry;

export async function getStaticProps({}) {
  const query = gql`
    query Query($locale: I18NLocaleCode) {
      ministry(locale: $locale) {
        data {
          attributes {
            marriageAndFamily {
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
