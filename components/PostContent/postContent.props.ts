import { PostProps } from '../Post/post.props';

export interface PostContentProps {
    frontmatter: PostProps['frontmatter'];
    content: string;
}
