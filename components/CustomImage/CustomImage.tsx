import Image from 'next/image';
import { useWindowSize } from 'react-use';

import { parseImageFormats } from '@/utils/image';
import { Maybe, UploadFileEntity } from 'generated/graphql-types';

const CustomImage: React.FC<{
    imageProps?: Maybe<UploadFileEntity>;
    className?: string;
    imgWidth?: number;
    imgHeight?: number;
}> = ({ imageProps, className = '', imgWidth, imgHeight }) => {
    const { width } = useWindowSize();
    const imageData = parseImageFormats(width, imageProps?.attributes?.formats);

    return (
        <Image
            className={className}
            src={imageData?.url ?? '/images/default-fallback-image.png'}
            width={imgWidth ?? imageData.width}
            height={imgHeight ?? imageData.height}
            alt={imageData?.name}
        />
    );
};

export default CustomImage;
