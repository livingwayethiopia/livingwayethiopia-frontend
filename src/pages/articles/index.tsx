import type { NextPage } from 'next'
import Layout from '../../components/layout';
import ArticleList from '../../sections/articles/list';
import { theme } from '../../styles/theme';
import { request, gql } from 'graphql-request';
import { ArticleEntity } from '../../types/strapi';

const Articles = ({
    articles,
}: { articles: ArticleEntity[] }) => {
    return (
        <Layout header={"Articles"} background={theme.colors.background} >
            <div style={{ height: 80, width: "100%" }} />
            <ArticleList articles={articles} />
        </Layout>
    )
}
export default Articles


export async function getStaticProps({ }) {
    const query = gql`
        query Articles($locale: I18NLocaleCode, $pagination: PaginationArg) {
            articles(locale: $locale, pagination: $pagination) {
                data {
                    id
                    attributes {
                        title
                        content
                        createdAt
                        updatedAt
                        publishedAt
                        locale
                        image {
                            data {
                                attributes {
                                    url
                                    previewUrl
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
            articles: data.articles.data,
        },
        revalidate: 600,
    };
}
