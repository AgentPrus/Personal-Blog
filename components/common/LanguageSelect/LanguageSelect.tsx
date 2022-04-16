import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useState, Fragment } from 'react';
import { LanguageProps } from './languageSelect.types';

const languages: LanguageProps[] = [
    { id: 1, language: 'English', code: 'en', flag: '🇺🇸' },
    { id: 2, language: 'Ukrainian', code: 'uk', flag: '🇺🇦' },
];

const LanguageSelect = () => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState(() =>
        languages.find((lang) => lang.code === router.locale)
    );

    const handleChange = (language: LanguageProps) => {
        router.push(router.pathname, router.asPath, { locale: language.code });
        setSelectedLanguage(language);
    };

    return (
        <div className="w-28">
            <Listbox value={selectedLanguage} onChange={handleChange}>
                <div className="relative z-10">
                    <Listbox.Button className="relative w-fit md:w-full py-2 pl-3 pr-10 text-center bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="hidden md:block text-gray-900">
                            {selectedLanguage?.language}
                        </span>
                        <span className="block md:hidden">{selectedLanguage?.flag}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon className="w-3 h-3 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-fit py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-center">
                            {languages.map(({ language, id, code, flag }) => (
                                <Listbox.Option
                                    key={id}
                                    className={({ active }) =>
                                        `text-center md:text-left cursor-default select-none relative py-2 px-6 ${
                                            active ? 'text-black bg-blue-100' : 'text-gray-900'
                                        }`
                                    }
                                    value={{ code, language, flag }}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                } hidden md:block`}
                                            >
                                                {language}
                                            </span>
                                            <span className={`block truncate md:hidden`}>
                                                {flag}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default LanguageSelect;
