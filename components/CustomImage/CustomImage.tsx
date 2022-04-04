import Image from 'next/image';
import { useWindowSize } from 'react-use';

import { parseImageFormats } from '@/utils/image';
import { UploadFileEntity } from 'generated/graphql-types';

const CustomImage: React.FC<UploadFileEntity> = ({ attributes }) => {
    const { width } = useWindowSize();
    const imageData = parseImageFormats(width, attributes?.formats);

    return (
        <Image
            src={imageData?.url ?? '/images/default-fallback-image.png'}
            width={imageData?.width}
            height={imageData?.height}
            alt={imageData?.name}
        />
    );
};

export default CustomImage;
