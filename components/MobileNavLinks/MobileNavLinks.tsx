import classNames from 'classnames';
import Link from 'next/link';

import styles from './mobileNavLinks.module.css';

const mobileNavLinkClasses = 'py-4 font-medium text-lg border-b';

const MobileNavLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const displayMobileNavLinks = classNames(styles['mobile-nav-wrapper'], {
        [styles.open]: isOpen,
        'px-8 bg-white dark:bg-gray-900': isOpen,
    });

    return (
        <div className={displayMobileNavLinks}>
            <Link href="/">
                <a className={mobileNavLinkClasses}>Home</a>
            </Link>
            <Link href="/blog">
                <a className={mobileNavLinkClasses}>Blog</a>
            </Link>
            <Link href="/about">
                <a className={mobileNavLinkClasses}>About</a>
            </Link>
        </div>
    );
};

export default MobileNavLinks;
