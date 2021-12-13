import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import { getPosts } from '@/lib/posts';
import { PostsProps } from '@/models/post.props';
import Post from '@/components/Post';

const BlogPage: NextPage<PostsProps> = ({ posts }) => {
    return (
        <Layout>
            <h2 className="text-4xl font-bold mb-4 dark:text-gray-200">All posts</h2>
            {posts.map((post, index) => (
                <Post key={index} slug={post.slug} frontmatter={post.frontmatter} />
            ))}
        </Layout>
    );
};

export function getStaticProps() {
    const posts = getPosts();

    return {
        props: {
            posts,
        },
    };
}

export default BlogPage;
