import Link from 'next/link';
import { ArticleEntity } from 'generated/graphql-types';
import dayjs from 'dayjs';
import Categories from '../Categories';

import { MdOutlineNavigateNext } from 'react-icons/md';
import { useRouter } from 'next/router';

const Post: React.FC<ArticleEntity> = ({ attributes }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blog/${attributes?.slug}`);
    };

    return (
        <article className="relative group cursor-pointer z-10" onClick={handleClick}>
            <div className="hidden absolute right-full mr-8 top-2 rounded-full border-2 bg-white w-3 h-3 border-slate-200 dark:border-slate-600 md:mr-12 overflow-visible sm:block" />

            <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/50 dark:group-hover:bg-slate-800/25" />
            <div className="relative w-10/12">
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

                <Link href={`/blog/${attributes?.slug}`}>
                    <a className="flex items-center text-sky-500 dark:text-sky-400">
                        Read more
                        <MdOutlineNavigateNext className="text-sky-500 dark:text-sky-400" />
                    </a>
                </Link>
            </div>
        </article>
    );
};

export default Post;
