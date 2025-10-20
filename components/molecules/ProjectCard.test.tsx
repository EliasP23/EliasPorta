import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';
vi.mock('../atoms/Tag', () => ({
    Tag: ({ children }: { children: React.ReactNode }) => <span data-testid="tag">{children}</span>,
}));
const projectData = {
    title: 'Proyecto de Prueba',
    description: 'Esta es una descripción de prueba para la tarjeta.',
    tags: ['React', 'TypeScript', 'Vitest'],
    link: 'https://example.com/proyecto',
};

const projectDataWithoutLink = {
    title: 'Otro Proyecto',
    description: 'Descripción sin enlace externo.',
    tags: ['HTML', 'CSS']
};

describe('ProjectCard component', () => {

    it('renders title, description, and tags correctly', () => {
        render(
            <ProjectCard
                title={projectData.title}
                description={projectData.description}
                tags={projectData.tags}
            />
        );
        expect(screen.getByRole('heading', { level: 4, name: projectData.title })).toBeInTheDocument();

        expect(screen.getByText(projectData.description)).toBeInTheDocument();

        const tagElements = screen.getAllByTestId('tag');
        expect(tagElements).toHaveLength(projectData.tags.length);

        projectData.tags.forEach(tagText => {
            expect(screen.getByText(tagText)).toBeInTheDocument();
        });
    });

    it('renders the "Visitar Sitio" link/button when link prop is provided', () => {
        render(
            <ProjectCard
                title={projectData.title}
                description={projectData.description}
                tags={projectData.tags}
                link={projectData.link}
            />
        );


        const linkElement = screen.getByRole('link', { name: /visitar sitio/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', projectData.link);
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
        expect(linkElement).toHaveClass('bg-green-700');
        expect(linkElement).toHaveClass('text-sm');
        expect(linkElement).toHaveClass('px-3');
        expect(linkElement).toHaveClass('py-1');
    });

    it('does NOT render the "Visitar Sitio" link/button when link prop is NOT provided', () => {
        render(
            <ProjectCard
                title={projectDataWithoutLink.title}
                description={projectDataWithoutLink.description}
                tags={projectDataWithoutLink.tags}
            />
        );
        const linkElement = screen.queryByRole('link', { name: /visitar sitio/i });
        expect(linkElement).not.toBeInTheDocument();
    });

    it('applies hover effect class to the main container', () => {
        const { container } = render(
            <ProjectCard
                title={projectData.title}
                description={projectData.description}
                tags={projectData.tags}
            />
        );
        expect(container.firstChild).toHaveClass('hover:scale-105');
    });

});