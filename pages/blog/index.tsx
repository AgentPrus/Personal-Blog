import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Post from '@/components/Post';

import { PostsProps } from '@/models/post.props';

import client from '@/lib/apollo-client';
import { GetPostsQuery } from 'services/blog';

const BlogPage: NextPage<{ data: PostsProps }> = ({ data }) => {
    return (
        <Layout>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 dark:text-gray-200">All posts</h2>
            <div className="relative space-y-8">
                <div className="hidden absolute top-12 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
                {data.articles.data.map(({ attributes }) => (
                    <Post attributes={attributes} key={attributes?.slug} />
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const { data } = await client.query({
        query: GetPostsQuery,
    });

    return {
        props: {
            data,
        },
    };
}

export default BlogPage;
