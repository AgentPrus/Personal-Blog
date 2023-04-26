import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
    title?: string;
    keywords?: string;
    description?: string;
}
