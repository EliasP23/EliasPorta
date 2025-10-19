import type { ReactNode } from 'react';

type ButtonVariant = 'github' | 'linkedin' | 'contact';

interface Props {
    href: string;
    variant: ButtonVariant;
    children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    github: 'bg-gray-800 text-white hover:bg-gray-700',
    linkedin: 'bg-blue-700 text-white hover:bg-blue-600',
    contact: 'bg-green-700 text-white hover:bg-green-600',
};

export function Button({ href, variant, children }: Props) {
    const classes = `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${variantClasses[variant]}`;

    // Si es un mailto, es un <a>. Si es un link externo, también.
    const isExternal = href.startsWith('http') || href.startsWith('mailto');

    return (
        <a
            href={href}
            className={classes}
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {children}
        </a>
    );
}