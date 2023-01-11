import type { GetStaticProps, NextPage } from 'next';

import Layout from '@/components/Layout';
import Post from '@/components/Post';
import Search from '@/components/Search';
import LanguageSelect from '@/components/common/LanguageSelect';

import { PostsProps } from '@/models/post.props';

import client from '@/lib/apollo-client';
import { GetPostsQuery } from 'services/blog';
import { useState } from 'react';
import { filtered } from '@/utils/filter';

const BlogPage: NextPage<{ data: PostsProps }> = ({ data }) => {
    const [query, setQuery] = useState('');

    return (
        <Layout>
            <div className="flex justify-between">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 dark:text-gray-200">
                    All posts
                </h2>
                <LanguageSelect />
            </div>
            <Search query={query} setQuery={setQuery} />
            <div className="relative space-y-8">
                <div className="hidden absolute top-12 bottom-0 right-full mr-7 md:mr-[3.35rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
                {filtered(data, query).map(({ attributes }) => (
                    <Post attributes={attributes} key={attributes?.slug} />
                ))}
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const { data } = await client.query({
        query: GetPostsQuery,
        variables: { locale: locale },
    });

    return {
        props: {
            data,
        },
    };
};

export default BlogPage;
