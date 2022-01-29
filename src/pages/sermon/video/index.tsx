import type { NextPage } from 'next'
import Layout from '../../../components/layout'
import SingleVideo from '../../../sections/sermon/video'
import { theme } from '../../../styles/theme'

const Video: NextPage = () => {

    return (
        <Layout header={"Church Video"} background={theme.colors.background} >
            <SingleVideo />
        </Layout>
    )
}

export default Video