import Layout from '../../components/layout'
import ArticleSection from '../../sections/articles/article'
import { request, gql } from 'graphql-request';
import { ArticleEntity, } from '../../types/strapi';
import Subscription from '../../components/subscription';


const Article = ({
    article,
}: { article: ArticleEntity }) => {
    return (
        <Layout header={`${article?.attributes?.title}`} >
            <ArticleSection article={article} />

            <Subscription />
        </Layout>
    )
}
export default Article

export async function getStaticPaths() {

    const query = gql`
        query Query($locale: I18NLocaleCode) {
            articles(locale: $locale) {
                data {
                    id
                }
            }
        }
    `

    const res = await request(
        process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, {
        "locale": process.env.NEXT_PUBLIC_LANGUAGE,
    })

    // Get the paths we want to pre-render based on posts
    const paths = res.articles.data.map((article: ArticleEntity) => ({
        params: { id: article.id },
    }))

    // We'll pre-render only these paths at build time.
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const query = gql`
       query Query($id: ID, ) {
            article(id: $id, ) {
                data {
                    id
                    attributes {
                        title
                        content
                        image {
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
    `

    const variables = {
        "id": params.id,
    };
    try {
        const res = await request(process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, variables)
        return {
            props: {
                article: res.article.data,
            },
            revalidate: 600,
        };
    } catch {
        return {
            redirect: {
                destination: "/articles",
            },
        }
    }
}
