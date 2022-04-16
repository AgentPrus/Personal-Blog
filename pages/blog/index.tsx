import type { NextPage } from 'next';
import { gql } from '@apollo/client';

import Layout from '@/components/Layout';
import Post from '@/components/Post';

import { PostsProps } from '@/models/post.props';

import client from '@/lib/apollo-client';

const GetPostsQuery = gql`
    query {
        articles {
            data {
                attributes {
                    title
                    excerpt
                    slug
                    publicationDate
                    categories {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                    cover {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

const BlogPage: NextPage<{ data: PostsProps }> = ({ data }) => {
    return (
        <Layout>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 dark:text-gray-200">All posts</h2>
            {data.articles.data.map((article) => {
                const { attributes } = article;

                return <Post attributes={attributes} key={attributes?.slug} />;
            })}
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
