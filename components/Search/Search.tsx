import { SearchIcon } from '@heroicons/react/outline';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const Search: React.FC<{ query: string; setQuery: Dispatch<SetStateAction<string>> }> = ({
    query,
    setQuery,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    return (
        <div className="relative mt-1 flex items-center">
            <input
                value={query}
                onChange={handleChange}
                type="text"
                name="search"
                id="search"
                placeholder="Search posts by title"
                className="block w-full rounded-md border-gray-300 placeholder:text-gray-400 pr-12 shadow-sm focus:border-sky-200 dark:focus:ring-sky-200 sm:text-sm dark:bg-gray-800 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-sky-500"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <SearchIcon className="text-gray-200" />
            </div>
        </div>
    );
};

export default Search;
