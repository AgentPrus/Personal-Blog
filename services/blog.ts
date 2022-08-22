import { gql } from '@apollo/client';

export const GetPostsQueryAttributes = gql`
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

export const GetPostBySlug = gql`
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

export const GetPostsQuery = gql`
    query {
        articles(sort: "publicationDate:desc") {
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
