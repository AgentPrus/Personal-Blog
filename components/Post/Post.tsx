import { PostProps } from './post.props';
import Link from 'next/link';

const Post: React.FC<PostProps> = ({ slug, frontmatter: { title, date, excerpt, category } }) => {
    return (
        <div className="w-full mb-8">
            <Link href={`/blog/${slug}`}>
                <a className="font-serif">
                    <h3 className="mb-2 font-bold text-xl">{title}</h3>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-400 italic dark:text-gray-200">{date}</p>
                        <p>{category}</p>
                    </div>
                    <div>
                        <p className="text-lg">{excerpt}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Post;
