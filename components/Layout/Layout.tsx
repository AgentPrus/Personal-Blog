import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import { LayoutProps } from './layout.props';

const Layout: React.FC<LayoutProps> = ({ children, keywords, title, description }) => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
            </Head>
            <Header />
            <main className="flex flex-col justify-center px-8 md:max-w-2xl mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: "Welcome to Mike's Blog",
    keywords: 'Web development, adventures, trail running, self development',
    description: 'In this blog I share my life experience',
};

export default Layout;
