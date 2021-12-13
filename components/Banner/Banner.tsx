import Link from 'next/link';

const Banner = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 dark:text-gray-200 mt-10 mb-8 sm:mt-14 sm:mb-10">
                Let`s make web a better place
            </h1>
            <h3 className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 dark:text-gray-200">
                By sharing knowledge, solving problems and building better software together.
            </h3>
            <Link href="/blog">
                <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 dark:bg-purple-400 dark:text-black dark:hover:bg-purple-700 dark:focus:ring-offset-purple-400 dark:focus:ring-purple-900">
                    Read all posts
                </a>
            </Link>
        </div>
    );
};

export default Banner;
