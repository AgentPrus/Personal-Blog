import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Feed from '@/components/Feed';
import ProfileCard from '@/components/ProfileCard';

import client from '@/lib/apollo-client';
import { GetAboutMeDataQuery } from 'services/about';
import { ComponentAboutFeed, ComponentAboutProfileCard } from 'generated/graphql-types';

const AboutPage: NextPage<{
    data: {
        feed: ComponentAboutFeed;
        card: ComponentAboutProfileCard;
    };
}> = ({ data: { feed, card } }) => {
    return (
        <Layout>
            <ProfileCard title={card.title} description={card.description} picture={card.picture} />
            <Feed feed={feed} />
        </Layout>
    );
};

export async function getStaticProps() {
    const { data } = await client.query({
        query: GetAboutMeDataQuery,
    });

    const feed: ComponentAboutFeed = data.aboutMe.data.attributes.feed;
    const card: ComponentAboutProfileCard = data.aboutMe.data.attributes['about_me_card'][0];

    return {
        props: {
            data: {
                feed: feed,
                card: card,
            },
        },
    };
}

export default AboutPage;
