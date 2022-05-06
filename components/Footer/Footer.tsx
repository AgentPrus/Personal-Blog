import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const iconClasses = 'w-6 h-6 text-sky-500 dark:text-sky-400';

const Footer = () => {
    return (
        <footer className="flex flex-col w-full justify-center items-center py-4  mt-8 max-w-4xl mx-auto border-t dark:border-slate-200">
            <div className="mx-auto max-w-2xl align-center">
                <p className="font-bold text-slate-900 dark:text-slate-200">
                    Powered by Next.js {new Date().getFullYear()}
                </p>
                <p className="flex mt-2 items-center justify-center">
                    <a href="https://github.com/AgentPrus" target="_blank" rel="noreferrer">
                        <FaGithub className="w-6 h-6 fill-slate-900 dark:fill-slate-200" />
                    </a>
                    <a href="https://www.instagram.com/mykytaprus" target="_blank" rel="noreferrer">
                        <FaInstagram className="w-6 h-6 mx-3 fill-pink-400" />
                    </a>
                    <a href="https://twitter.com/AgentPrus" target="_blank" rel="noreferrer">
                        <FaTwitter className="w-6 h-6 fill-sky-500 dark:fill-sky-400" />
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
