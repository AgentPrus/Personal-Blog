import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import { useMarkdown } from 'hooks/useMarkdown';

interface MarkdownProps {
    markdown: string & { content?: string };
}

const Markdown: React.FC<MarkdownProps> = ({ markdown }) => {
    const components = useMarkdown();

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose md:prose-lg lg:prose-xl dark:prose-invert"
            components={components}
        >
            {markdown?.content ?? markdown}
        </ReactMarkdown>
    );
};

export default Markdown;
