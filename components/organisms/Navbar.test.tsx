import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from './Navbar';

const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#about', label: 'Sobre Mí' },
];

describe('Navbar component', () => {

    it('renders the brand/logo text correctly', () => {
        render(<Navbar />);
        const logoLink = screen.getByRole('link', { name: /elias parra/i });
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute('href', '#home');
    });

    it('renders all desktop navigation links correctly', () => {
        render(<Navbar />);
        navLinks.forEach(link => {
            const linkElements = screen.getAllByRole('link', { name: link.label });
            expect(linkElements.length).toBeGreaterThan(0);
            expect(linkElements.some(el => el.getAttribute('href') === link.href)).toBe(true);
        });
    });

    it('renders the mobile menu button', () => {
        render(<Navbar />);
        const mobileMenuButton = screen.getByRole('button', { name: /abrir menú/i });
        expect(mobileMenuButton).toBeInTheDocument();
    });

    it('toggles the mobile menu visibility on button click', () => {
        render(<Navbar />);
        const mobileMenuButton = screen.getByRole('button', { name: /abrir menú/i });
        const mobileMenuContainer = mobileMenuButton.closest('nav')?.querySelector('div.absolute');

        expect(mobileMenuContainer).toBeInTheDocument();
        expect(mobileMenuContainer).toHaveClass('hidden');
        const initialMobileInicioLink = screen.getAllByRole('link', { name: 'Inicio' })
            .find(link => mobileMenuContainer?.contains(link));
        expect(initialMobileInicioLink).toBeInTheDocument();

        fireEvent.click(mobileMenuButton);

        expect(mobileMenuContainer).toHaveClass('block');
        expect(mobileMenuContainer).not.toHaveClass('hidden');
        const mobileInicioLinkAfterOpen = screen.getAllByRole('link', { name: 'Inicio' })
            .find(link => mobileMenuContainer?.contains(link));
        expect(mobileInicioLinkAfterOpen).toBeVisible();



    });

    it('closes the mobile menu when a link inside it is clicked', () => {
        render(<Navbar />);
        const mobileMenuButton = screen.getByRole('button', { name: /abrir menú/i });
        const mobileMenuContainer = mobileMenuButton.closest('nav')?.querySelector('div.absolute');

        fireEvent.click(mobileMenuButton);
        expect(mobileMenuContainer).toHaveClass('block');

        const proyectosLinkMobile = screen.getAllByRole('link', { name: 'Proyectos' })
            .find(link => mobileMenuContainer?.contains(link));

        expect(proyectosLinkMobile).toBeInTheDocument();
        if (proyectosLinkMobile) {
            fireEvent.click(proyectosLinkMobile);
        }

        expect(mobileMenuContainer).toHaveClass('hidden');
        expect(mobileMenuContainer).not.toHaveClass('block');
    });
});