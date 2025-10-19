import type { ReactNode } from 'react';

interface Props {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    className?: string;
}

export function Heading({ as: Tag, children, className = '' }: Props) {
    return (
        <Tag className={className}>
            {children}
        </Tag>
    );
}