import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import { gql } from '@apollo/client';
import client from '@/lib/apollo-client';
import { BooksProps } from '@/models/books.props';
import TileGrid from '@/components/Books/TileGrid';
import BookCard from '@/components/Books/BookCard';

const GetBooksReviewQuery = gql`
    query BookReviews($locale: I18NLocaleCode!) {
        bookReviews(locale: $locale) {
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

const BooksPage: NextPage<{ data: BooksProps }> = ({ data }) => {
    return (
        <Layout>
            <h2 className="text-4xl font-bold mb-4 dark:text-gray-200">Books review</h2>
            <TileGrid>
                {data.bookReviews.data.map(({ attributes }) => {
                    return (
                        <BookCard
                            key={attributes?.slug}
                            title={attributes?.title ?? ''}
                            cover={attributes?.cover}
                            slug={attributes?.slug}
                        />
                    );
                })}
            </TileGrid>
        </Layout>
    );
};

export async function getStaticProps() {
    const { data } = await client.query({
        query: GetBooksReviewQuery,
        variables: { locale: 'en' }, // TODO: Get user chosen locale
    });

    return {
        props: {
            data,
        },
    };
}

export default BooksPage;
