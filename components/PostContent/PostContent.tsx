import 'highlight.js/styles/monokai-sublime.css';
import { useMarked } from 'hooks/useMarked';
import { ArticleEntity } from 'generated/graphql-types';

import Categories from '../Categories';
import dayjs from 'dayjs';
import CustomImage from '../CustomImage';

const PostContent: React.FC<ArticleEntity> = ({ attributes }) => {
    const { marked } = useMarked();

    return (
        <>
            <div>
                <h1 className="font-bold text-3xl mt-2 text-sky-500 dark:text-sky-400">
                    {attributes?.title}
                </h1>
                <div className="flex justify-between items-center my-2">
                    <p className="text-slate-900 dark:text-slate-200">
                        {dayjs(attributes?.publicationDate).format('MMMM D, YYYY')}
                    </p>
                    {attributes?.categories?.data && (
                        <Categories data={attributes?.categories?.data} />
                    )}
                </div>
                {attributes?.cover?.data?.attributes && (
                    <CustomImage imageProps={attributes?.cover?.data} />
                )}
            </div>
            <div className="blog-text mt-2">
                {attributes?.content && (
                    <article
                        className="prose lg:prose-xl dark:prose-invert"
                        dangerouslySetInnerHTML={{
                            __html: marked(attributes?.content),
                        }}
                    ></article>
                )}
            </div>
        </>
    );
};

export default PostContent;
