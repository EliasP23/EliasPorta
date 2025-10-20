import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Paragraph } from './Paragraph'; // Asegúrate que la ruta sea correcta

describe('Paragraph component', () => {

    it('renders correctly with children text', () => {
        const testText = 'Este es un párrafo de prueba.';
        render(<Paragraph>{testText}</Paragraph>);
        const paragraphElement = screen.getByText(testText);
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement.tagName).toBe('P');
    });
    it('renders correctly with children nodes', () => {
        render(
            <Paragraph>
                Texto con <strong>negrita</strong> y <em>cursiva</em>.
            </Paragraph>
        );
        const paragraphElement = screen.getByText(/Texto con/i);
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement.tagName).toBe('P');
        expect(screen.getByText('negrita')).toBeInTheDocument();
        expect(screen.getByText('cursiva')).toBeInTheDocument();
        expect(screen.getByText('negrita').tagName).toBe('STRONG');
        expect(screen.getByText('cursiva').tagName).toBe('EM');
    });

    it('applies additional className when provided', () => {
        const customClass = 'text-blue-500 text-lg';
        const testText = 'Párrafo con clase.';
        render(<Paragraph className={customClass}>{testText}</Paragraph>);
        const paragraphElement = screen.getByText(testText);
        expect(paragraphElement).toHaveClass(customClass);
        expect(paragraphElement).toHaveClass('text-blue-500');
        expect(paragraphElement).toHaveClass('text-lg');
    });

    it('renders without className prop without errors', () => {
        const testText = 'Párrafo sin clase extra.';
        render(<Paragraph>{testText}</Paragraph>);
        const paragraphElement = screen.getByText(testText);
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement.className).toBe('');
    });

});