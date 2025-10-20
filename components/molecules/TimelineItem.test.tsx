import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TimelineItem } from './TimelineItem'; // Ajusta la ruta si es necesario

// Mock de los átomos hijos
vi.mock('../atoms/Heading', () => ({
    // Asegúrate de que el mock acepte y renderice 'children'
    Heading: ({ children, ...props }: any) => <h4 {...props}>{children}</h4>,
}));
vi.mock('../atoms/Paragraph', () => ({
    Paragraph: ({ children, ...props }: any) => <p {...props}>{children}</p>,
}));


// Datos de prueba
const itemData = {
    date: '2023 - Presente',
    title: 'Título del Trabajo',
    description: 'Descripción detallada de las responsabilidades.',
};

describe('TimelineItem component', () => {

    it('renders date, title, and description correctly', () => {
        render(
            <TimelineItem
                date={itemData.date}
                title={itemData.title}
                description={itemData.description}
                align="left"
            />
        );
        expect(screen.getByText(itemData.date)).toBeInTheDocument();
        expect(screen.getByText(itemData.date)).toHaveClass('font-bold'); // Verificar clase de la fecha
        expect(screen.getByRole('heading', { level: 4, name: itemData.title })).toBeInTheDocument();
        expect(screen.getByText(itemData.description)).toBeInTheDocument();
        expect(screen.getByText(itemData.description).tagName).toBe('P');
    });

    it('applies correct classes for left alignment', () => {
        const { container } = render(
            <TimelineItem
                date={itemData.date}
                title={itemData.title}
                description={itemData.description}
                align="left"
            />
        );
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toBeInTheDocument();
        expect(mainDiv).toHaveClass('mb-8', 'flex', 'justify-between', 'items-center', 'w-full');
        expect(mainDiv).not.toHaveClass('flex-row-reverse');
        const contentWrapper = mainDiv.childNodes[1] as HTMLElement;
        expect(contentWrapper).toHaveClass('w-1/2');
        expect(contentWrapper).toHaveClass('pl-8');
        expect(contentWrapper).not.toHaveClass('pr-8');
    });

    it('applies correct classes for right alignment', () => {
        const { container } = render(
            <TimelineItem
                date={itemData.date}
                title={itemData.title}
                description={itemData.description}
                align="right"
            />
        );
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toBeInTheDocument();
        expect(mainDiv).toHaveClass('flex-row-reverse');
        const contentWrapper = mainDiv.childNodes[1] as HTMLElement;
        expect(contentWrapper).toHaveClass('w-1/2');
        expect(contentWrapper).toHaveClass('pr-8');
        expect(contentWrapper).not.toHaveClass('pl-8');
    });
    it('renders the spacing div', () => {
        const { container } = render(
            <TimelineItem
                date={itemData.date}
                title={itemData.title}
                description={itemData.description}
                align="left"
            />
        );
        const spacingDiv = container.firstChild?.firstChild as HTMLElement;
        expect(spacingDiv).toBeInTheDocument();
        expect(spacingDiv).toHaveClass('w-1/2');
        expect(spacingDiv.textContent).toBe('');
    });

});