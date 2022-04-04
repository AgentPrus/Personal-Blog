import { GetStaticPaths, NextPage } from 'next';

import Layout from '@/components/Layout';

import PostContent from '@/components/PostContent';
import { gql } from '@apollo/client';
import { ArticleEntity, ArticleEntityResponseCollection } from 'generated/graphql-types';
import client from '@/lib/apollo-client';
import { useRouter } from 'next/router';

const GetPostsQuery = gql`
    query {
        articles {
            data {
                attributes {
                    title
                }
            }
        }
    }
`;

const GetPostBySlug = gql`
    query Article($slug: String!) {
        articles(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    title
                    publicationDate
                    categories {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                    content
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

const PostPage: NextPage<ArticleEntityResponseCollection> = ({ data }) => {
    const router = useRouter();

    // TODO: add custom loader
    return router.isFallback ? (
        <div>Loading...</div>
    ) : (
        <Layout title={data?.[0]?.attributes?.title}>
            <PostContent attributes={data?.[0]?.attributes} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: GetPostsQuery,
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

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = await client.query({
        query: GetPostBySlug,
        variables: { slug },
    });

    return {
        props: post.data.articles,
    };
};

export default PostPage;
