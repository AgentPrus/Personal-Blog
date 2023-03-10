import Link from 'next/link';

const Banner = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-slate-900 dark:text-slate-200 mt-10 mb-8 sm:mt-14 sm:mb-10">
                Let`s make web a better place
            </h1>
            <h3 className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 dark:text-slate-200">
                By sharing knowledge, solving problems and building better software together.
            </h3>
            <Link
                href="/blog"
                className="w-full no-underline sm:w-auto flex-none text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl  focus:outline-none transition-colors duration-200 text-white bg-sky-500 hover:bg-sky-400 dark:bg-sky-400 dark:hover:bg-sky-600"
            >
                Read all posts
            </Link>
        </div>
    );
};

export default Banner;
