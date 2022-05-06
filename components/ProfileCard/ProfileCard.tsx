import Image from 'next/image';

const ProfileCard = () => {
    return (
        <div className="w-full rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-4">
                <Image
                    className="object-center object-cover rounded-full"
                    src="/images/profile.jpg"
                    alt="photo"
                    width={144}
                    height={144}
                />
            </div>
            <div className="text-center">
                <p className="text-xl text-slate-900 dark:text-slate-200 font-bold mb-2">
                    Mike Prus
                </p>
                <p className="text-base text-slate-900 dark:text-slate-200 font-normal">
                    Christian ✝️
                </p>
                <p className="text-base text-slate-900 dark:text-slate-200 font-normal">
                    Web Developer at{' '}
                    <a
                        className="underline text-sky-500 dark:text-sky-400"
                        href="https://www.ekreative.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ekreative
                    </a>{' '}
                    🧑‍💻
                </p>
                <p className="text-base text-slate-900 dark:text-slate-200 font-normal">
                    Adventurer 🤠
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
