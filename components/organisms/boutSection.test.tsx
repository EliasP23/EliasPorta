import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AboutSection } from './AboutSection';

vi.mock('../atoms/Heading', () => ({
    Heading: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
}));
vi.mock('../atoms/Paragraph', () => ({
    Paragraph: ({ children, ...props }: any) => <p {...props}>{children}</p>,
}));

describe('AboutSection component', () => {

    it('renders the main heading correctly', () => {
        render(<AboutSection />);
        const headingElement = screen.getByRole('heading', { level: 3, name: /sobre mí/i });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveClass('text-3xl font-bold text-center mb-8');
    });

    it('renders the descriptive paragraph correctly', () => {
        render(<AboutSection />);

        const paragraphElement = screen.getByText(/Soy una persona responsable, organizada/i);
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement.tagName).toBe('P');
        expect(paragraphElement).toHaveClass('text-lg text-gray-600 dark:text-gray-400 text-center leading-relaxed');
    });

    it('renders the section with correct structure and background', () => {
        const { container } = render(<AboutSection />);
        const sectionElement = container.firstChild as HTMLElement;
        expect(sectionElement).toBeInTheDocument();
        expect(sectionElement.tagName).toBe('SECTION');
        expect(sectionElement).toHaveAttribute('id', 'about');
        expect(sectionElement).toHaveClass('bg-gray-50 dark:bg-gray-900 py-20');
        const innerDiv = sectionElement.firstChild as HTMLElement;
        expect(innerDiv).toHaveClass('container mx-auto px-4 max-w-3xl');
    });

});