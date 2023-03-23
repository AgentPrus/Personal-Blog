import { ComponentAboutFeed } from 'generated/graphql-types';
import FeedItem from './FeedItem/FeedItem';

const Feed: React.FC<{ feed: ComponentAboutFeed }> = ({ feed }) => {
    const feedItems = feed['feed_item'];

    return (
        <>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 dark:text-gray-200">Experience</h2>
            <div className="flow-root">
                <ul role="list" className="-mb-8">
                    {feedItems?.length
                        ? feedItems?.map((item, index) => {
                              console.log(item);

                              return (
                                  <FeedItem
                                      key={item?.id}
                                      feed={item}
                                      length={feedItems.length}
                                      index={index}
                                  />
                              );
                          })
                        : null}
                </ul>
            </div>
        </>
    );
};

export default Feed;
