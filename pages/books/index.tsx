import type { GetStaticProps, NextPage } from 'next';

import Layout from '@/components/Layout';
import { gql } from '@apollo/client';
import client from '@/lib/apollo-client';
import { BooksProps } from '@/models/books.props';
import TileGrid from '@/components/Books/TileGrid';
import BookCard from '@/components/Books/BookCard';
import LanguageSelect from '@/components/common/LanguageSelect';

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
            <div className="flex justify-between mb-2">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 dark:text-slate-200">
                    Books review
                </h2>
                <LanguageSelect />
            </div>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const { data } = await client.query({
        query: GetBooksReviewQuery,
        variables: { locale: locale },
    });

    return {
        props: {
            data,
        },
    };
};

export default BooksPage;
