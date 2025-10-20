import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Heading } from './Heading';

describe('Heading component', () => {

    it('renders correctly with children', () => {
        render(<Heading as="h1">Título Principal</Heading>);
        const headingElement = screen.getByRole('heading', { name: /título principal/i });
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the correct HTML tag based on the "as" prop (h1)', () => {
        render(<Heading as="h1">Título H1</Heading>);
        const headingElement = screen.getByRole('heading', { level: 1 }); //Busca el H1
        expect(headingElement.tagName).toBe('H1');
        expect(headingElement).toHaveTextContent('Título H1');
    });

    it('renders the correct HTML tag based on the "as" prop (h3)', () => {
        render(<Heading as="h3">Subtítulo H3</Heading>);
        const headingElement = screen.getByRole('heading', { level: 3 }); //busca el H3
        expect(headingElement.tagName).toBe('H3');
        expect(headingElement).toHaveTextContent('Subtítulo H3');
    });

    it('renders the correct HTML tag based on the "as" prop (h6)', () => {
        render(<Heading as="h6">Título Menor H6</Heading>);
        const headingElement = screen.getByRole('heading', { level: 6 }); //Busca el H6
        expect(headingElement.tagName).toBe('H6');
        expect(headingElement).toHaveTextContent('Título Menor H6');
    });

    it('applies additional className when provided', () => {
        const customClass = 'text-red-500 font-bold';
        render(<Heading as="h2" className={customClass}>Título con Clase</Heading>);
        const headingElement = screen.getByRole('heading', { name: /título con clase/i });
        expect(headingElement).toHaveClass(customClass);
        expect(headingElement).toHaveClass('text-red-500');
        expect(headingElement).toHaveClass('font-bold');
    });

    it('renders without className prop without errors', () => {
        render(<Heading as="h4">Sin Clase Extra</Heading>);
        const headingElement = screen.getByRole('heading', { name: /sin clase extra/i });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement.className).toBe('');
    });

});