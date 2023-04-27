import { ClipboardListIcon } from '@heroicons/react/outline';
import { ReactNode, useState } from 'react';
import { useCopyToClipboard } from 'react-use';

const CopyButton: React.FC<{ children: ReactNode[] }> = ({ children }) => {
    const [, copyToClipboard] = useCopyToClipboard();
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = (children: ReactNode[]) => {
        let text;
        if (children[0]) {
            // NOTE: don't found type for markdown children
            // @ts-ignore
            text = children[0].props.children[0];

            if (typeof text === 'string') {
                copyToClipboard(text);
                setIsCopied(true);

                setTimeout(() => {
                    setIsCopied(false);
                }, 1000);
            }
        }
    };

    return (
        <button
            className="absolute z-2 flex items-center text-sm top-2"
            style={{ right: '1rem' }}
            onClick={() => handleClick(children)}
        >
            {isCopied ? (
                <span style={{ color: 'rgb(14 165 233)' }}>Copied</span>
            ) : (
                <ClipboardListIcon
                    style={{ width: '2rem', height: '2rem', color: 'rgb(14 165 233)' }}
                />
            )}
        </button>
    );
};

export default CopyButton;
