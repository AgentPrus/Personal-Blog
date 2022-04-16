import { BookReview } from 'generated/graphql-types';
import Link from 'next/link';

import CustomImage from '@/components/CustomImage';

const BookCard: React.FC<BookReview> = ({ cover, title, slug }) => {
    return (
        <Link href={`/books/${slug}`}>
            <a className="group">
                <div className="w-fit h-fit">
                    <CustomImage
                        imageProps={cover?.data}
                        className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
                        imgHeight={320}
                        imgWidth={280}
                    />
                </div>
                <h3 className="mt-4 text-sm font-bold text-gray-900 dark:text-gray-200 ">
                    {title}
                </h3>
            </a>
        </Link>
    );
};

export default BookCard;
