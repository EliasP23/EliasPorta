import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Footer } from './Footer';

vi.mock('../atoms/Paragraph', () => ({
    Paragraph: ({ children, ...props }: any) => <p {...props}>{children}</p>,
}));

describe('Footer component', () => {

    it('renders correctly', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    it('renders the copyright text including the current year', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        const expectedText = `© ${currentYear} Elias Parra. Todos los derechos reservados.`;
        const paragraphElement = screen.getByText((content, element) => {
            const normalizedContent = content.replace(/\s+/g, ' ');
            const normalizedExpected = expectedText.replace(/\s+/g, ' ');
            return normalizedContent === normalizedExpected;
        });

        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement.tagName).toBe('P');
    });

    it('applies the correct CSS classes to the footer element', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toHaveClass('py-8');
        expect(footerElement).toHaveClass('bg-gray-800');
        expect(footerElement).toHaveClass('text-gray-300');
        expect(footerElement).toHaveClass('text-center');
    });

    it('renders as a <footer> HTML tag', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement.tagName).toBe('FOOTER');
    });

});