import Layout from '../../components/layout';
import SermonSection from '../../sections/sermons';
import { theme } from '../../styles/theme';
import Parser from 'rss-parser';
import axios from 'axios';
import Subscription from '../../components/subscription';

let parser = new Parser();


const Sermon = ({ episodes, playlists }: any) => {
    return (
        <Layout header={"Sermon"} background={theme.colors.background_secondary} >
            <SermonSection episodes={episodes} playlists={playlists} />

            <Subscription />
        </Layout>
    )

}

export default Sermon


export async function getStaticProps() {
    let link = `https://anchor.fm/s/7dee6420/podcast/rss`;
    const episodes = await getPodcast(link);
    const playlists = await getPlaylists({ token: "" });
    return {
        props: {
            episodes: episodes,
            playlists: playlists,
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


const getPlaylists = async ({ token }: { token: string }) => {
    let playlists: any[] = [];
    try {
        const res: any = await axios({
            method: 'get',
            url: `https://www.googleapis.com/youtube/v3/playlists?channelId=${process.env.NEXT_PUBLIC_YOUTUBECHANNELID}&key=${process.env.NEXT_PUBLIC_YOUTUBEAPIKEY}&part=snippet&maxResults=50&part=contentDetails&pageToken=${token}`,
        });
        playlists = [...res.data.items]
        if (res.data.nextPageToken) {
            let videoData: any[] = await getPlaylists({ token: res.data.nextPageToken });
            playlists = [...playlists, ...videoData]
        }
        return playlists;
    }
    catch (e) {
        console.error(e);
        return playlists;
    }
}


