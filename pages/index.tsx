import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import Banner from '@/components/Banner';

const Home: NextPage = () => {
    return (
        <Layout>
            <Banner />
        </Layout>
    );
};

export default Home;
