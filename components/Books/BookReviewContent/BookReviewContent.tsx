import dayjs from 'dayjs';

import { BookReviewEntity } from 'generated/graphql-types';
import CustomImage from '@/components/common/CustomImage';
import { useMarked } from 'hooks/useMarked';

const BookReviewContent: React.FC<BookReviewEntity> = ({ attributes }) => {
    const { marked } = useMarked();

    return (
        <>
            <h1 className="font-bold text-3xl mt-2 text-sky-500 dark:text-sky-400">
                {attributes?.title}
            </h1>
            <div className="flex justify-between items-center my-2">
                <p className="text-gray-500">
                    {dayjs(attributes?.publishedAt).format('MMMM D, YYYY')}
                </p>
            </div>
            {attributes?.cover?.data?.attributes && (
                <CustomImage imageProps={attributes?.cover?.data} />
            )}
            <div className="blog-text mt-2">
                {attributes?.description && (
                    <article
                        className="prose lg:prose-xl dark:prose-invert"
                        dangerouslySetInnerHTML={{
                            __html: marked(attributes?.description),
                        }}
                    ></article>
                )}
            </div>
        </>
    );
};

export default BookReviewContent;
