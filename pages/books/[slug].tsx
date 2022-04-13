import BookReviewContent from '@/components/Books/BookReviewContent';
import Layout from '@/components/Layout';
import client from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { BookReviewEntity, BookReviewEntityResponseCollection } from 'generated/graphql-types';
import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';

const GetBooksReview = gql`
    query {
        bookReviews {
            data {
                attributes {
                    slug
                }
            }
        }
    }
`;

const GetBookReviewBySlug = gql`
    query BookReviews($slug: String!) {
        bookReviews(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    slug
                    title
                    description
                    cover {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                    createdAt
                }
            }
        }
    }
`;

const BookReviewPage: NextPage<BookReviewEntityResponseCollection> = ({
    data,
}: BookReviewEntityResponseCollection) => {
    const router = useRouter();

    return router.isFallback ? (
        <div>Loading...</div>
    ) : (
        <Layout title={data?.[0]?.attributes?.title}>
            <BookReviewContent attributes={data?.[0]?.attributes} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: GetBooksReview,
    });

    const paths = data?.['bookReviews']?.data.map(({ attributes }: BookReviewEntity) => ({
        params: {
            slug: attributes?.slug,
        },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
    const { data } = await client.query({
        query: GetBookReviewBySlug,
        variables: { slug },
    });

    return {
        props: {
            data: data?.bookReviews.data,
        },
    };
};

export default BookReviewPage;
