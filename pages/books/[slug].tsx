import BookReviewContent from '@/components/Books/BookReviewContent';
import Layout from '@/components/Layout';
import client from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { BookReviewEntity, BookReviewEntityResponseCollection } from 'generated/graphql-types';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next';

const GetBooksReview = gql`
    query {
        bookReviews {
            data {
                attributes {
                    slug
                    locale
                }
            }
        }
    }
`;

const GetBookReviewBySlug = gql`
    query BookReviews($slug: String!, $locale: I18NLocaleCode) {
        bookReviews(filters: { slug: { eq: $slug } }, locale: $locale) {
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
    return (
        <Layout title={data?.[0]?.attributes?.title}>
            <BookReviewContent attributes={data?.[0]?.attributes} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: GetBooksReview,
    });

    const paths: GetStaticPathsResult['paths'] = [];

    data?.['bookReviews']?.data.map(({ attributes }: BookReviewEntity) => {
        paths.push({
            params: {
                slug: attributes?.slug ?? '',
            },
        });
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { data } = await client.query({
        query: GetBookReviewBySlug,
        variables: { slug: params?.slug, locale },
    });

    return {
        props: {
            data: data?.bookReviews.data,
        },
    };
};

export default BookReviewPage;
