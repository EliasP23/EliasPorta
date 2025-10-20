import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProjectsSection } from './ProjectsSection'; // Ajusta la ruta si es necesario

// Mock de los componentes hijos (Heading y ProjectCard)
vi.mock('../atoms/Heading', () => ({
    Heading: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>, // Renderiza como h3
}));

// Mock para ProjectCard, capturando las props
const mockProjectCard = vi.fn();
vi.mock('../molecules/ProjectCard', () => ({
    ProjectCard: (props: any) => {
        mockProjectCard(props); // Llama a la función mock con las props
        // Renderiza algo simple con un testid único basado en el título
        return <div data-testid={`project-card-${props.title}`}>{props.title}</div>;
    },
}));

// Datos esperados definidos dentro del componente ProjectsSection
const expectedProjects = [
    {
        title: 'Level-Up Gamer',
        description: 'Level Up Gamer, es una pagina donde se pueden comprar articulos gamer tienes un amplio catalogo de articulos los cuales puedes adquirir con descuento de 20% si eres de DuocUC',
        tags: ['CSS', 'HTML', 'JavaScript'],
        link: undefined // Asegúrate de incluir 'undefined' si el link no está presente en los datos originales
    },
    {
        title: 'Shierly Store',
        description: 'Shierly Store, es una pagina donde se pueden realizar pedidos de alimentos para mascotas, Esta tienda online solo tiene ventas a granel',
        tags: ['HTML', 'CSS'],
        link: 'https://ventagranel.netlify.app/' // Incluye el link esperado
    },
];


describe('ProjectsSection component', () => {

    // Limpia mocks antes de cada test
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the main heading correctly', () => {
        render(<ProjectsSection />);
        const headingElement = screen.getByRole('heading', { level: 3, name: /proyectos destacados/i });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveClass('text-3xl font-bold text-center mb-12');
    });

    it('renders the correct number of ProjectCard components', () => {
        render(<ProjectsSection />);
        // Busca todos los elementos que coincidan con el testid
        const projectCards = screen.getAllByTestId(/project-card-/i);
        expect(projectCards).toHaveLength(expectedProjects.length); // Compara con la cantidad esperada
    });

    it('passes the correct props to each ProjectCard component', () => {
        render(<ProjectsSection />);

        // Verifica que el mock fue llamado la cantidad correcta de veces
        expect(mockProjectCard).toHaveBeenCalledTimes(expectedProjects.length);

        // Verifica que cada llamada al mock recibió las props correctas
        expectedProjects.forEach((project, index) => {
            expect(mockProjectCard).toHaveBeenNthCalledWith(
                index + 1, // Las llamadas se cuentan desde 1
                expect.objectContaining({ // Verifica que el objeto contenga estas propiedades y valores
                    title: project.title,
                    description: project.description,
                    tags: project.tags,
                    link: project.link, // Verifica también la prop link
                })
            );
        });
    });

    it('renders the section with correct structure and grid classes', () => {
        const { container } = render(<ProjectsSection />);

        // Verifica la <section> principal
        const sectionElement = container.firstChild as HTMLElement;
        expect(sectionElement).toBeInTheDocument();
        expect(sectionElement.tagName).toBe('SECTION');
        expect(sectionElement).toHaveAttribute('id', 'projects');
        expect(sectionElement).toHaveClass('py-20');

        // Verifica el div contenedor principal
        const mainContainerDiv = sectionElement.firstChild as HTMLElement;
        expect(mainContainerDiv).toHaveClass('container mx-auto px-4');

        // Verifica el div de la grilla
        const gridDiv = screen.getByRole('heading', { name: /proyectos destacados/i }).nextElementSibling; // El div después del heading
        expect(gridDiv).toHaveClass('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'); // Verifica las clases de grid
    });

});