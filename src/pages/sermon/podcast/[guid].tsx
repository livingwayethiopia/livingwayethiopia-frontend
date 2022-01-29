import type { NextPage } from 'next'
import Layout from '../../../components/layout'
import AudioData from '../../../sections/sermon/audio'
import Parser from 'rss-parser';
import { EpisodeType } from '../../../types/custom';

let parser = new Parser();

const Podcast = ({ episode }: {
    episode: EpisodeType
}) => {

    return (
        <Layout header={`${episode.title}`}  >
            <AudioData episode={episode} />
        </Layout>
    )
}

export default Podcast

export async function getStaticPaths() {
    let link = `https://anchor.fm/s/7dee6420/podcast/rss`;
    const episodes: EpisodeType[] = await getPodcast(link);
    // Get the paths we want to pre-render based on posts
    const paths = episodes.map((episode) => {
        return ({
            params: {
                guid: episode?.guid,
            },
        })
    })
    // We'll pre-render only these paths at build time
    return {
        paths,
        fallback: true,
    }
}


export async function getStaticProps({ params }: {
    params: {
        guid: string,
    }
}) {
    let link = `https://anchor.fm/s/7dee6420/podcast/rss`;
    const episodes: EpisodeType[] = await getPodcast(link);

    // Get the paths we want to pre-render based on posts
    let episode = null;
    episodes.map((episodeData) => {
        if (episodeData.guid == params.guid) {
            return episode = episodeData;
        }
        return;
    })

    if (episode === null)
        return {
            redirect: {
                destination: "/sermon",
            },
        }
    return {
        props: {
            episode: episode,
        },
        revalidate: 3600,
    };
}



const getPodcast = async (link: string) => {
    let feed: any = await parser.parseURL(link);
    let episodes = [...feed.items];
    if (feed.paginationLinks.self !== link) {
        let feedData: any = await getPodcast(link);
        episodes = [...feedData.items];
    }

    return episodes;
}