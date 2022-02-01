import axios from 'axios'
import type { NextPage } from 'next'
import Layout from '../../../components/layout'
import SingleVideo from '../../../sections/sermon/video'
import { theme } from '../../../styles/theme'
import { PlaylistType, VideoType } from '../../../types/custom'

const Video = ({ videos }: {
    videos: VideoType[]
}) => {
    return (
        <Layout header={"Church Video"} background={theme.colors.background} >
            <SingleVideo videos={videos} />
        </Layout>
    )
}

export default Video



export async function getStaticPaths() {
    const playlists: PlaylistType[] = await getPlaylists({ token: "" });
    const paths = playlists.map((playlist) => {
        return ({
            params: {
                videoId: playlist?.id,
            },
        })
    })
    return {
        paths,
        fallback: true,
    }
}


export async function getStaticProps({ params }: {
    params: {
        videoId: string,
    }
}) {
    let videos = await getVideosData({ token: "", id: params.videoId })

    if (videos === [])
        return {
            redirect: {
                destination: "/sermon",
            },
        }
    return {
        props: {
            videos: videos,
        },
        revalidate: 3600,
    };
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


const getVideosData = async ({ token, id }: { token: string, id: string }) => {
    let maxAmount = 50;
    let videos: any[] = [];
    try {
        const res = await axios({
            method: 'get',
            url: `https://www.googleapis.com/youtube/v3/playlistItems?&playlistId=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBEAPIKEY}&maxResults=50&part=snippet${token ? '&pageToken=' + token : ''}`,
        });
        videos = [...res.data.items]
        if (res.data.nextPageToken) {
            let videoData: any[] = await getVideosData({ token: res.data.nextPageToken, id: id });
            videos = [...videos, ...videoData]
        }
        return videos;
    }
    catch (e) {
        console.log(e)
        return videos;
    }
}

