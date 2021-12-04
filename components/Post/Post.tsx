import { PostProps } from './post.props';
import Link from 'next/link';

const Post: React.FC<PostProps> = ({ slug, frontmatter: { title, date, excerpt, category } }) => {
    return (
        <div className="w-full mb-8">
            <Link href={`/blog/${slug}`}>
                <a>
                    <h3 className="mb-2 font-bold text-xl light:text-black dark:text-gray-200">
                        {title}
                    </h3>
                    <div className="flex justify-between items-center mb-2">
                        <p className="italic light:text-black dark:text-gray-200">{date}</p>
                        <p className="light:text-black dark:text-gray-200">{category}</p>
                    </div>
                    <div>
                        <p className="text-lg light:text-black dark:text-gray-200">{excerpt}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Post;
