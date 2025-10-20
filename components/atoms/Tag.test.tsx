import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tag } from './Tag';

describe('Tag component', () => {

    it('renders correctly with children text', () => {
        const testText = 'React';
        render(<Tag>{testText}</Tag>);
        const tagElement = screen.getByText(testText);
        expect(tagElement).toBeInTheDocument();
        expect(tagElement.tagName).toBe('SPAN');
    });

    it('applies the correct base CSS classes', () => {
        render(<Tag>CSS</Tag>);
        const tagElement = screen.getByText('CSS');
        // Verifica todas las clases base que debe tener el tag
        expect(tagElement).toHaveClass('inline-block');
        expect(tagElement).toHaveClass('bg-gray-200');
        expect(tagElement).toHaveClass('dark:bg-gray-700');
        expect(tagElement).toHaveClass('rounded-full');
        expect(tagElement).toHaveClass('px-3');
        expect(tagElement).toHaveClass('py-1');
        expect(tagElement).toHaveClass('text-sm');
        expect(tagElement).toHaveClass('font-semibold');
        expect(tagElement).toHaveClass('text-gray-700');
        expect(tagElement).toHaveClass('dark:text-gray-300');
        expect(tagElement).toHaveClass('mr-2');
        expect(tagElement).toHaveClass('mb-2');
    });

    it('renders correctly with different children text', () => {
        const testText = 'TypeScript';
        render(<Tag>{testText}</Tag>);
        const tagElement = screen.getByText(testText);
        expect(tagElement).toBeInTheDocument();
    });

});