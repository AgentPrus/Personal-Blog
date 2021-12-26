import hljs from 'highlight.js';
import { marked } from 'marked';

export const useMarked = () => {
    const renderer = new marked.Renderer();

    renderer.paragraph = (text: string) => {
        return `<p class="dark:text-gray-200">${text}</p>`;
    };

    renderer.link = (href: string, title: string, text: string) => {
        return `<a class="dark:text-gray-200 underline" href="${href}" target="_blank">${text}</a>`;
    };

    renderer.heading = (text: string, level: 1 | 2 | 3 | 4 | 5 | 6) => {
        let output;
        switch (level) {
            case 1:
                output = `<h1 class="dark:text-gray-200">${text}</h1>`;
                break;
            case 2:
                output = `<h2 class="dark:text-gray-200">${text}</h2>`;
                break;
            case 3:
                output = `<h3 class="dark:text-gray-200">${text}</h3>`;
                break;
            case 4:
                output = `<h4 class="dark:text-gray-200">${text}</h4>`;
                break;
            case 5:
                output = `<h5 class="dark:text-gray-200">${text}</h5>`;
                break;
            case 6:
                output = `<h6 class="dark:text-gray-200">${text}</h6>`;
                break;
        }
        return output;
    };

    marked.setOptions({
        renderer: renderer,
        highlight: (code, lang) => {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-',
    });

    return {
        renderer,
        marked,
    };
};
