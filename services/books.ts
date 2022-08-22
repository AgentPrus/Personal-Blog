import { gql } from '@apollo/client';

export const GetBooksReviewQuery = gql`
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

export const GetBooksReviewAttributes = gql`
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

export const GetBookReviewBySlug = gql`
    query BookReviewsBySlug($slug: String!, $locale: I18NLocaleCode) {
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
