import Layout from "../../components/layout";
import MinistryContainer from "../../sections/ministry/container";

import { request, gql } from "graphql-request";
import { MinistryEntity } from "../../types/strapi";

const MissionAndChurchPlantingMinistry = ({
  ministry,
}: {
  ministry: MinistryEntity;
}) => {
  return (
    <Layout header={"Mission And Church Planting Ministry"}>
      <MinistryContainer
        ministryData={ministry?.attributes?.missionAndChurchPlanting!}
        title={
          process.env.NEXT_PUBLIC_LANGUAGE === "en"
            ? "Mission And Church Planting Ministry"
            : "ሚስዮን እና የቤተክርስቲያን ተከላ"
        }
      />
    </Layout>
  );
};

export default MissionAndChurchPlantingMinistry;

export async function getStaticProps({ }) {
  const query = gql`
    query Query($locale: I18NLocaleCode) {
      ministry(locale: $locale) {
        data {
          attributes {
            missionAndChurchPlanting {
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
