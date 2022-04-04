export interface ImageFormatProps {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
}
