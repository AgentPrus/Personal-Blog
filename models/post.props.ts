import { PostProps } from '@/components/Post/post.props';

export interface PostsProps {
    posts: PostProps[];
}

export interface PostPageProps {
    slug: PostProps['slug'];
    frontmatter: PostProps['frontmatter'];
    content: string;
}
