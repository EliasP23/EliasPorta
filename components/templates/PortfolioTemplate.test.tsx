import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PortfolioTemplate } from './PortfolioTemplate';

vi.mock('../organisms/Navbar', () => ({
    Navbar: () => <nav data-testid="navbar">Navbar Mock</nav>,
}));
vi.mock('../organisms/HeroSection', () => ({
    HeroSection: () => <section data-testid="hero-section">Hero Section Mock</section>,
}));
vi.mock('../organisms/ExperienceSection', () => ({
    ExperienceSection: () => <section data-testid="experience-section">Experience Section Mock</section>,
}));
vi.mock('../organisms/ProjectsSection', () => ({
    ProjectsSection: () => <section data-testid="projects-section">Projects Section Mock</section>,
}));
vi.mock('../organisms/AboutSection', () => ({
    AboutSection: () => <section data-testid="about-section">About Section Mock</section>,
}));
vi.mock('../organisms/Footer', () => ({
    Footer: () => <footer data-testid="footer">Footer Mock</footer>,
}));

describe('PortfolioTemplate component', () => {

    it('renders all main sections (Navbar, Hero, Experience, Projects, About, Footer)', () => {
        render(<PortfolioTemplate />);

        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getByTestId('hero-section')).toBeInTheDocument();
        expect(screen.getByTestId('experience-section')).toBeInTheDocument();
        expect(screen.getByTestId('projects-section')).toBeInTheDocument();
        expect(screen.getByTestId('about-section')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('renders the main container with correct flex structure', () => {
        const { container } = render(<PortfolioTemplate />);
        expect(container.firstChild).toHaveClass('flex');
        expect(container.firstChild).toHaveClass('flex-col');
        expect(container.firstChild).toHaveClass('min-h-screen');

        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
        expect(mainElement).toHaveClass('flex-grow');
        expect(mainElement).toHaveClass('pt-16');

        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

});