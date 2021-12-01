import { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import hljs from 'highlight.js';

import Image from 'next/image';

import Layout from '@/components/Layout';
import { PostPageProps } from '@/models/post.props';

import { useEffect } from 'react';

import 'highlight.js/styles/monokai-sublime.css';

const PostPage: NextPage<PostPageProps> = ({ frontmatter, content, slug }) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <Layout title={frontmatter.title}>
            <div>
                <h1 className="font-bold text-3xl mt-2">{frontmatter.title}</h1>
                <div className="flex justify-between items-center my-2">
                    <p className="text-gray-500">{frontmatter.date}</p>
                    <p className="text-gray-500">{frontmatter.category}</p>
                </div>
                <Image src={frontmatter.cover_image} width={800} height={600} />
            </div>
            <div className="blog-text mt-2">
                <div
                    dangerouslySetInnerHTML={{
                        __html: marked(content),
                    }}
                ></div>
            </div>
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
