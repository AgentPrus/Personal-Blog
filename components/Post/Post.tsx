import Link from 'next/link';
import { ArticleEntity } from 'generated/graphql-types';
import dayjs from 'dayjs';
import Categories from '../Categories';

const Post: React.FC<ArticleEntity> = ({ attributes }) => {
    return (
        <div className="w-full mb-8">
            <Link href={`/blog/${attributes?.slug}`}>
                <a>
                    <h3 className="mb-2 font-bold text-xl text-slate-900 dark:text-slate-200">
                        {attributes?.title}
                    </h3>
                    <div className="flex justify-between items-center mb-2">
                        <p className="italic text-black-slate-900 dark:text-slate-200">
                            {dayjs(attributes?.publicationDate).format('MMMM D, YYYY')}
                        </p>
                        {attributes?.categories?.data && (
                            <Categories data={attributes?.categories?.data} />
                        )}
                    </div>
                    <div>
                        <p className="text-lg text-slate-900 dark:text-slate-200">
                            {attributes?.excerpt}
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Post;
