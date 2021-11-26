import Head from 'next/head';
import Header from '../Header';
import { LayoutProps } from './layout.props';

const Layout: React.FC<LayoutProps> = ({ children, keywords, title, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
            </Head>
            <Header />
            <main className="container mx-auto my-7">{children}</main>
        </div>
    );
};

Layout.defaultProps = {
    title: "Welcome to Mike's Blog",
    keywords: 'Web development, adventures, trail running, self development',
    description: 'In this blog I share my life experience',
};

export default Layout;
