import { PostsProps } from '@/models/post.props';

export const filtered = (articles: PostsProps, query: string) => {
    return articles.articles.data?.filter(({ attributes }) =>
        attributes?.title.toLocaleLowerCase().includes(query.toLowerCase())
    );
};
