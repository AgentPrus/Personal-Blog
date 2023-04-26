import { Maybe, UploadFileEntityResponse } from 'generated/graphql-types';
import Image from 'next/image';
import Markdown from '../common/Markdown/Markdown';

interface ProfileCardProps {
    description?: Maybe<string>;
    title?: Maybe<string>;
    picture?: Maybe<UploadFileEntityResponse>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ description = '', title = '', picture }) => {
    return (
        <div className="flex justify-between mb-8">
            <div>
                <h2 className="font-bold text-3xl md:text-5xl tracking-tight dark:text-white mb-2">
                    {title}
                </h2>
                <Markdown markdown={description as string} />
            </div>
            <div>
                {picture?.data?.attributes && (
                    <Image
                        className="object-[center_30%] object-cover w-[140px] h-[140px] rounded-full"
                        src={picture?.data?.attributes?.formats['small'].url}
                        alt="profile_picture"
                        width={140}
                        height={140}
                    />
                )}
            </div>
        </div>
    );
};

export default ProfileCard;
