import { useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './header.module.css';
import MobileNavLinks from '../MobileNavLinks';
import { useThemeChanger } from './useThemeChanger';

const navClasses =
    'flex items-center max-w-3xl justify-between w-full relative border-gray-200 max-w-2xl mx-auto pt-8 pb-4 px-5 dark:border-gray-700 text-gray-900';
const linkClasses =
    'font-medium hidden md:inline-block sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all text-xl light:text-black dark:text-gray-200';

const barClasses = ' bg-slate-900 dark:bg-slate-200';

const Header = () => {
    const [isMobileNavIsOpen, setIsMobileNavIsOpen] = useState(false);
    const [renderThemeChanger, changeTheme] = useThemeChanger();

    const active = classNames(styles['mobile-menu'], {
        [styles.open]: isMobileNavIsOpen,
    });

    const handleClick = () => setIsMobileNavIsOpen((isMobileNavIsOpen) => !isMobileNavIsOpen);

    return (
        <>
            <header className="border-b dark:border-slate-200 mb-8 max-w-4xl mx-auto">
                <nav className={navClasses}>
                    <span className="md:hidden nav-links">
                        <button className={active} onClick={handleClick}>
                            <div className={styles['bar-one'] + barClasses} />
                            <div className={styles['bar-two'] + barClasses} />
                            <div className={styles['bar-three'] + barClasses} />
                        </button>
                    </span>
                    <div>
                        <Link href="/" className={linkClasses}>
                            Home
                        </Link>
                        <Link href="/blog" className={linkClasses}>
                            Blog
                        </Link>
                        <Link href="/books" className={linkClasses}>
                            Books
                        </Link>
                        <Link href="/about" className={linkClasses}>
                            About
                        </Link>
                    </div>
                    <div
                        className="p-1 sm:px-3 sm:py-2 rounded-lg transition-al text-sky-500 hover:bg-sky-200 cursor-pointer"
                        onClick={changeTheme}
                    >
                        {renderThemeChanger()}
                    </div>
                </nav>
            </header>
            <MobileNavLinks isOpen={isMobileNavIsOpen} />
        </>
    );
};

export default Header;
