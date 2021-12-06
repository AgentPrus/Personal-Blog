import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';

const navClasses =
    'flex items-center justify-between w-full relative border-gray-200 max-w-2xl mx-auto pt-8 pb-4 dark:border-gray-700 text-gray-900';
const linkClasses =
    'font-medium hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all text-xl light:text-black dark:text-gray-200';

const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return <HiSun className="w-7 h-7" />;
        } else {
            return <HiMoon className="w-7 h-7" />;
        }
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="border-b dark:border-purple-400 mb-8 max-w-4xl mx-auto">
            <nav className={navClasses}>
                <div>
                    <Link href="/">
                        <a className={linkClasses}>Home</a>
                    </Link>
                    <Link href="/blog">
                        <a className={linkClasses}>Blog</a>
                    </Link>
                    <Link href="/about">
                        <a className={linkClasses}>About</a>
                    </Link>
                </div>
                <div
                    className="p-1 sm:px-3 sm:py-2 rounded-lg transition-all hover:bg-gray-200 dark:text-purple-400 dark:hover:bg-purple-700 cursor-pointer"
                    onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
                >
                    {renderThemeChanger()}
                </div>
            </nav>
        </header>
    );
};

export default Header;
