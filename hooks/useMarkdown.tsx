import { Components } from 'react-markdown';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const useMarkdown = () => {
    const components: Components = {
        h1: ({ children }) => <h1 className="dark:text-gray-200">{children}</h1>,
        h2: ({ children }) => <h2 className="dark:text-gray-200">{children}</h2>,
        h3: ({ children }) => <h3 className="dark:text-gray-200">{children}</h3>,
        h4: ({ children }) => <h4 className="dark:text-gray-200">{children}</h4>,
        h5: ({ children }) => <h5 className="dark:text-gray-200">{children}</h5>,
        h6: ({ children }) => <h6 className="dark:text-gray-200">{children}</h6>,
        ol: ({ children }) => (
            <ol className="list-decimal" role="list">
                {children}
            </ol>
        ),
        ul: ({ children }) => (
            <ul className="list-disc" role="list">
                {children}
            </ul>
        ),
        pre: ({ children }) => (
            <div className="relative not-prose">
                <pre>{children}</pre>
            </div>
        ),
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter {...props} style={oneDark} language={match[1]} PreTag="div">
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code {...props} className={className}>
                    {children}
                </code>
            );
        },
    };

    return components;
};
