import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './mobileNavLinks.module.css';

const mobileNavLinkClasses = 'py-4 font-medium text-lg border-b dark:text-gray-200';

const MobileNavLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const router = useRouter();

    const displayMobileNavLinks = classNames(styles['mobile-nav-wrapper'], {
        [styles.open]: isOpen,
        'px-8 bg-white dark:bg-gray-900': isOpen,
    });

    const isActiveLink = (href: string) => router.pathname === href && ' underline';

    return (
        <div className={displayMobileNavLinks}>
            <Link href="/">
                <a className={mobileNavLinkClasses + isActiveLink('/')}>Home</a>
            </Link>
            <Link href="/blog">
                <a className={mobileNavLinkClasses + isActiveLink('/blog')}>Blog</a>
            </Link>
            <Link href="/books">
                <a className={mobileNavLinkClasses + +isActiveLink('/books')}>About</a>
            </Link>
            <Link href="/about">
                <a className={mobileNavLinkClasses + isActiveLink('/about')}>About</a>
            </Link>
        </div>
    );
};

export default MobileNavLinks;
