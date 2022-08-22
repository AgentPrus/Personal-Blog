import { ImageFormatProps } from '@/models/image.props';
import { UploadFile } from 'generated/graphql-types';

export const parseImageFormats = (
    windowWidth: number,
    formats: UploadFile['formats']
): ImageFormatProps => {
    if (windowWidth >= 768 && formats?.['medium']) {
        return formats['medium'];
    } else if (windowWidth >= 1280 && formats?.['large']) {
        return formats['large'];
    } else {
        return formats?.['small'] ? formats?.['small'] : formats?.['thumbnail'];
    }
};
