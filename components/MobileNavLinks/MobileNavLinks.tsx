import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import styles from './mobileNavLinks.module.css';

const mobileNavLinkClasses = 'py-4 font-medium text-lg';

const MobileNavLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const router = useRouter();

    const displayMobileNavLinks = classNames(
        styles['mobile-nav-wrapper'],
        'divide-y dark:divide-sky-500 dark:text-sky-500',
        {
            [styles.open]: isOpen,
            'px-8 bg-white dark:bg-gray-900': isOpen,
        }
    );

    const isActiveLink = (href: string) => router.pathname === href && ' underline';

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div className={displayMobileNavLinks}>
            <Link href="/">
                <a className={mobileNavLinkClasses + isActiveLink('/')}>Home</a>
            </Link>
            <Link href="/blog">
                <a className={mobileNavLinkClasses + isActiveLink('/blog')}>Blog</a>
            </Link>
            <Link href="/books">
                <a className={mobileNavLinkClasses + +isActiveLink('/books')}>Books</a>
            </Link>
            <Link href="/about">
                <a className={mobileNavLinkClasses + isActiveLink('/about')}>About</a>
            </Link>
        </div>
    );
};

export default MobileNavLinks;
