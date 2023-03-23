import { gql } from '@apollo/client';

export const GetAboutMeDataQuery = gql`
    query {
        aboutMe {
            data {
                attributes {
                    about_me_card {
                        title
                        picture {
                            data {
                                attributes {
                                    formats
                                }
                            }
                        }
                        description
                    }
                    feed {
                        feed_item {
                            description
                            date
                            id
                        }
                    }
                }
            }
        }
    }
`;
