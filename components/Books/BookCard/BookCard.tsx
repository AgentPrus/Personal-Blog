import { BookReview } from 'generated/graphql-types';
import Link from 'next/link';

import CustomImage from '@/components/common/CustomImage';

const BookCard: React.FC<BookReview> = ({ cover, title, slug }) => {
    return (
        <Link href={`/books/${slug}`} className="group" passHref>
            <div className="w-fit h-fit">
                <CustomImage
                    imageProps={cover?.data}
                    className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
                    imgHeight={320}
                    imgWidth={280}
                />
            </div>
            <h3 className="mt-4 text-sm font-bold text-slate-900 dark:text-slate-200 ">{title}</h3>
        </Link>
    );
};

export default BookCard;
