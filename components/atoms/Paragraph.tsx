import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export function Paragraph({ children, className = '' }: Props) {
    return (
        <p className={className}>
            {children}
        </p>
    );
}