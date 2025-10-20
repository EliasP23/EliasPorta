import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HeroSection } from './HeroSection';

const mockHeading = vi.fn();
vi.mock('../atoms/Heading', () => ({
    Heading: (props: any) => {
        mockHeading(props);
        const Tag = props.as || 'h1';
        return <Tag {...props}>{props.children}</Tag>;
    },
}));

const mockParagraph = vi.fn();
vi.mock('../atoms/Paragraph', () => ({
    Paragraph: (props: any) => {
        mockParagraph(props);
        return <p {...props}>{props.children}</p>;
    },
}));

const mockButton = vi.fn();
vi.mock('../atoms/Button', () => ({
    Button: (props: any) => {
        mockButton(props);
        return <a data-testid={`button-${props.variant}`} href={props.href}>{props.children}</a>;
    },
}));

describe('HeroSection component', () => {

    // Limpia mocks antes de cada test
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the profile image correctly', () => {
        render(<HeroSection />);
        const imageElement = screen.getByRole('img', { name: /foto de elias parra/i });
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'assets/20221203_001024.jpg');
        expect(imageElement).toHaveClass('w-32 h-32 md:w-40 md:h-40 rounded-full');
    });

    it('renders the main heading (h1) correctly', () => {
        render(<HeroSection />);
        const headingElement = screen.getByRole('heading', { level: 1, name: /hola, soy elias parra/i });
        expect(headingElement).toBeInTheDocument();
        expect(mockHeading).toHaveBeenCalledWith(expect.objectContaining({
            as: 'h1',
            children: 'Hola, soy Elias Parra'
        }));
        expect(headingElement).toHaveClass('text-4xl md:text-6xl');
    });

    it('renders the subtitle heading (h2) correctly', () => {
        render(<HeroSection />);
        const subtitleElement = screen.getByRole('heading', { level: 2, name: /estudiante de ingenieria en informática/i });
        expect(subtitleElement).toBeInTheDocument();
        expect(mockHeading).toHaveBeenCalledWith(expect.objectContaining({
            as: 'h2',
            children: 'Estudiante de Ingenieria en Informática'
        }));
        expect(subtitleElement).toHaveClass('text-2xl md:text-3xl');
    });

    it('renders the descriptive paragraph correctly', () => {
        render(<HeroSection />);
        const paragraphElement = screen.getByText(/siempre disponible y dispuesto a aprender/i);
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement.tagName).toBe('P');
        expect(mockParagraph).toHaveBeenCalledWith(expect.objectContaining({
            className: expect.stringContaining('max-w-2xl mx-auto')
        }));
        expect(paragraphElement).toHaveClass('text-lg text-gray-600 dark:text-gray-400 mb-8');
    });

    it('renders all three buttons (GitHub, LinkedIn, Contact)', () => {
        render(<HeroSection />);
        const githubButton = screen.getByTestId('button-github');
        const linkedinButton = screen.getByTestId('button-linkedin');
        const contactButton = screen.getByTestId('button-contact');

        expect(githubButton).toBeInTheDocument();
        expect(linkedinButton).toBeInTheDocument();
        expect(contactButton).toBeInTheDocument();

        expect(mockButton).toHaveBeenCalledTimes(3);
    });

    it('passes the correct props to each Button component', () => {
        render(<HeroSection />);
        expect(mockButton).toHaveBeenCalledWith(expect.objectContaining({
            href: 'https://github.com/EliasP23',
            variant: 'github',
            children: 'GitHub',
        }));
        expect(mockButton).toHaveBeenCalledWith(expect.objectContaining({
            href: 'https://www.linkedin.com/in/elias-parra-1a9ab42a1/',
            variant: 'linkedin',
            children: 'LinkedIn',
        }));
        expect(mockButton).toHaveBeenCalledWith(expect.objectContaining({
            href: 'mailto:el.parrav@duocuc.cl',
            variant: 'contact',
            children: 'Contacto',
        }));
    });

    it('renders the section with correct structure and classes', () => {
        const { container } = render(<HeroSection />);

        const sectionElement = container.firstChild as HTMLElement;
        expect(sectionElement).toBeInTheDocument();
        expect(sectionElement.tagName).toBe('SECTION');
        expect(sectionElement).toHaveAttribute('id', 'home');
        expect(sectionElement).toHaveClass('container mx-auto px-4 py-24 text-center');

        const flexWrapper = screen.getByRole('img').parentElement;
        expect(flexWrapper).toHaveClass('flex flex-col items-center mb-8 md:flex-row');
    });

});