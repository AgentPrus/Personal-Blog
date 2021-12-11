import { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Layout from '@/components/Layout';
import { PostPageProps } from '@/models/post.props';
import PostContent from '@/components/PostContent';

const PostPage: NextPage<PostPageProps> = ({ frontmatter, content, slug }) => {
    return (
        <Layout title={frontmatter.title}>
            <PostContent frontmatter={frontmatter} content={content} />
        </Layout>
    );
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            content,
            slug,
        },
    };
}

export default PostPage;
