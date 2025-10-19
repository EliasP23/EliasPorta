import { Paragraph } from '../atoms/Paragraph';

export function Footer() {
    return (
        <footer className="py-8 bg-gray-800 text-gray-300 text-center">
            <Paragraph>
                &copy; {new Date().getFullYear()} Elias Parra. Todos los derechos reservados.
            </Paragraph>
        </footer>
    );
}