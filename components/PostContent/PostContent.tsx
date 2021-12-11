import { useEffect } from 'react';
import Image from 'next/image';
import hljs from 'highlight.js';
import { marked } from 'marked';

import { PostContentProps } from './postContent.props';

import 'highlight.js/styles/monokai-sublime.css';

const PostContent: React.FC<PostContentProps> = ({ frontmatter, content }) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div>
                <h1 className="font-bold text-3xl mt-2">{frontmatter.title}</h1>
                <div className="flex justify-between items-center my-2">
                    <p className="text-gray-500">{frontmatter.date}</p>
                    <p className="text-gray-500">{frontmatter.category}</p>
                </div>
                <Image
                    src={frontmatter.cover_image}
                    width={800}
                    height={600}
                    alt="post"
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div className="blog-text mt-2">
                <div
                    dangerouslySetInnerHTML={{
                        __html: marked(content),
                    }}
                ></div>
            </div>
        </>
    );
};

export default PostContent;
