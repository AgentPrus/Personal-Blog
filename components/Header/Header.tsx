import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';

const navClasses =
    'flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:text-gray-100';
const linkClasses =
    'font-normal text-black dark:text-white hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all text-xl';

const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return <HiSun className="w-7 h-7" onClick={() => setTheme('light')} />;
        } else {
            return <HiMoon className="w-7 h-7" onClick={() => setTheme('dark')} />;
        }
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header>
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
                {renderThemeChanger()}
            </nav>
        </header>
    );
};

export default Header;
