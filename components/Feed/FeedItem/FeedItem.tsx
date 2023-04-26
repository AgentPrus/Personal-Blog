import dayjs from 'dayjs';
import { ComponentAboutFeedItem, Maybe } from 'generated/graphql-types';

import { TbCircleMinus } from 'react-icons/tb';

const FeedItem: React.FC<{
    feed: Maybe<ComponentAboutFeedItem>;
    length: number;
    index: number;
}> = ({ feed, length, index }) => {
    return (
        <li>
            <div className="relative pb-8">
                {index !== length - 1 ? (
                    <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                    />
                ) : null}
                <div className="relative flex space-x-3">
                    <div>
                        <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center ring-8 ring-white">
                            <TbCircleMinus className="w-8 h-8 text-gray-500" />
                        </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                            <p className="text-sm text-gray-500">{feed?.description}</p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                            <time>{dayjs(feed?.date).format('DD/MM/YYYY')}</time>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default FeedItem;
