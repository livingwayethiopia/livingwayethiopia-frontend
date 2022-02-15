import React from "react";
import Image from "next/image";
import { CardContainer, } from './style';
import DateComponent from '../../dateComponent';
import { ArticleEntity } from '../../../types/strapi';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import { marked } from "marked";

const ArticleCard = ({ article }: { article: ArticleEntity }) => {
    const router = useRouter();
    return <CardContainer onClick={() => {
        router.push(`articles/${article.id}`, undefined, { shallow: true })
    }}>
        <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + article.attributes?.image?.data?.attributes?.url!}
                src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + article.attributes?.image?.data?.attributes?.url!}
                layout='fill'
                alt="article-Image"
            />
        </div>
        <p className='articleTitle'>

            {ReactHtmlParser(article.attributes?.title!)}
        </p>
        <DateComponent date={article.attributes?.publishedAt} />
        <p className='articleDescription'>

            {article!.attributes!.content! && ReactHtmlParser(marked.parse(
                `${article!.attributes!.content!.slice(0, 300)!}...`
            ))}
        </p>
    </CardContainer>


}

export default ArticleCard;