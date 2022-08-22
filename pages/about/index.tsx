import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import ProfileCard from '@/components/ProfileCard';

import client from '@/lib/apollo-client';
import { GetAboutMeDataQuery } from 'services/about';
import { ComponentAboutProfileCard } from 'generated/graphql-types';

const AboutPage: NextPage<{
    data: ComponentAboutProfileCard;
}> = ({ data }: { data: ComponentAboutProfileCard }) => {
    return (
        <Layout>
            <ProfileCard title={data.title} description={data.description} picture={data.picture} />
            {/* TODO: add vertical slider with my career path */}
        </Layout>
    );
};

export async function getStaticProps() {
    const { data } = await client.query({
        query: GetAboutMeDataQuery,
    });

    return {
        props: {
            data: data.aboutMe.data.attributes.about_me_card[0],
        },
    };
}

export default AboutPage;
