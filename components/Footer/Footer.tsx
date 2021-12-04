import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const iconClasses = 'w-6 h-6 light:text-black dark:text-gray-200';

const Footer = () => {
    return (
        <footer className="flex flex-col w-full justify-center items-center py-4 light:bg-gray-50 mt-8 max-w-4xl mx-auto border-t dark:border-purple-400">
            <div className="mx-auto max-w-2xl align-center">
                <p className="font-bold light:text-black dark:text-gray-200">
                    Powered by Next.js {new Date().getFullYear()}
                </p>
                <p className="flex mt-2 items-center justify-center">
                    <a href="https://github.com/AgentPrus" target="_blank" rel="noreferrer">
                        <FaGithub className={iconClasses} />
                    </a>
                    <a href="https://www.instagram.com/mykytaprus" target="_blank" rel="noreferrer">
                        <FaInstagram className={`${iconClasses} mx-3`} />
                    </a>
                    <a href="https://twitter.com/AgentPrus" target="_blank" rel="noreferrer">
                        <FaTwitter className={iconClasses} />
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
