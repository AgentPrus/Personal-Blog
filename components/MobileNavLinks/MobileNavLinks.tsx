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
            <Link href="/" className={mobileNavLinkClasses + isActiveLink('/')}>
                Home
            </Link>
            <Link href="/blog" className={mobileNavLinkClasses + isActiveLink('/blog')}>
                Blog
            </Link>
            <Link href="/books" className={mobileNavLinkClasses + +isActiveLink('/books')}>
                Books
            </Link>
            <Link href="/about" className={mobileNavLinkClasses + isActiveLink('/about')}>
                About
            </Link>
        </div>
    );
};

export default MobileNavLinks;
