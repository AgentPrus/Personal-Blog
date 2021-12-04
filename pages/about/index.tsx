import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import ProfileCard from '@/components/ProfileCard';

const AboutPage: NextPage = () => {
    return (
        <Layout>
            <ProfileCard />
            {/* TODO: add vertical slider with my career path */}
        </Layout>
    );
};

export default AboutPage;
