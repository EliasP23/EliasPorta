import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {

    it('renders correctly with children', () => {
        render(<Button href="/internal" variant="contact">Click Me</Button>);
        const buttonElement = screen.getByRole('link', { name: /click me/i });
        expect(buttonElement).toBeInTheDocument();
    });

    it('applies correct classes based on variant (github)', () => {
        render(<Button href="#github" variant="github">GitHub Link</Button>);
        const buttonElement = screen.getByRole('link');
        expect(buttonElement).toHaveClass('bg-gray-800');
        expect(buttonElement).toHaveClass('hover:bg-gray-700');
        expect(buttonElement).toHaveClass('text-white');
        expect(buttonElement).toHaveClass('flex items-center gap-2 px-4 py-2 rounded-lg transition-colors'); // Clases base
    });

    it('applies correct classes based on variant (linkedin)', () => {
        render(<Button href="#linkedin" variant="linkedin">LinkedIn Link</Button>);
        const buttonElement = screen.getByRole('link');
        expect(buttonElement).toHaveClass('bg-blue-700');
        expect(buttonElement).toHaveClass('hover:bg-blue-600');
        expect(buttonElement).toHaveClass('text-white');
    });

    it('applies correct classes based on variant (contact)', () => {
        render(<Button href="#contact" variant="contact">Contact Link</Button>);
        const buttonElement = screen.getByRole('link');
        expect(buttonElement).toHaveClass('bg-green-700');
        expect(buttonElement).toHaveClass('hover:bg-green-600');
        expect(buttonElement).toHaveClass('text-white');
    });

    it('sets the href attribute correctly', () => {
        const testHref = "https://example.com";
        render(<Button href={testHref} variant="contact">Example</Button>);
        const buttonElement = screen.getByRole('link');
        expect(buttonElement).toHaveAttribute('href', testHref);
    });

    it('adds target="_blank" and rel="noopener noreferrer" for external links (http)', () => {
        render(<Button href="https://externalsite.com" variant="contact">External</Button>);
        const buttonElement = screen.getByRole('link');
        expect(buttonElement).toHaveAttribute('target', '_blank');
        expect(buttonElement).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('adds target="_blank" and rel="noopener noreferrer" for mailto links', () => {
        render(<Button href="mailto:test@example.com" variant="contact">Email</Button>);
        const buttonElement = screen.getByRole('link');
        expect(buttonElement).toHaveAttribute('target', '_blank');
        expect(buttonElement).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('does NOT add target="_blank" for internal links', () => {
        render(<Button href="/internal-page" variant="contact">Internal</Button>);
        const buttonElement = screen.getByRole('link');
        expect(buttonElement).not.toHaveAttribute('target', '_blank');
        expect(buttonElement).not.toHaveAttribute('rel');
    });

});