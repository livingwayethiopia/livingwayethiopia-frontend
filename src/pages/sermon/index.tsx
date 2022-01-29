import type { NextPage } from 'next'
import Layout from '../../components/layout';
import SermonSection from '../../sections/sermons';
import { theme } from '../../styles/theme';
import Parser from 'rss-parser';

let parser = new Parser();


const Sermon = ({ episodes }: any) => {
    return (
        <Layout header={"Sermon"} background={theme.colors.background_secondary} >
            <SermonSection episodes={episodes} />
        </Layout>
    )

}

export default Sermon


export async function getStaticProps() {
    let link = `https://anchor.fm/s/7dee6420/podcast/rss`;
    const episodes = await getPodcast(link);
    return {
        props: {
            episodes: episodes,
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