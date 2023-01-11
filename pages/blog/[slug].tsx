import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Layout from '@/components/Layout';

import PostContent from '@/components/PostContent';

import { ArticleEntity, ArticleEntityResponseCollection } from 'generated/graphql-types';
import client from '@/lib/apollo-client';
import { GetPostBySlug, GetPostsQueryAttributes } from 'services/blog';

const PostPage: NextPage<ArticleEntityResponseCollection> = ({ data }) => {
    return (
        <Layout title={data?.[0]?.attributes?.title}>
            <PostContent attributes={data?.[0]?.attributes} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: GetPostsQueryAttributes,
    });

    const paths = data.articles.data.map(({ attributes }: ArticleEntity) => ({
        params: {
            slug: attributes?.title,
        },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const post = await client.query({
        query: GetPostBySlug,
        variables: { slug: params?.slug, locale },
    });

    return {
        props: post.data.articles,
    };
};

export default PostPage;
