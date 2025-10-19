import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

export function HeroSection() {
    return (
        <section id="home" className="container mx-auto px-4 py-24 text-center">
            <Heading as="h1" className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                Hola, soy Elias Parra
            </Heading>
            <Heading as="h2" className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
                Estudiante de  Ingenieria en Informática
            </Heading>
            <Paragraph className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
                Siempre disponible y dispuesto a aprender, mejorar y adquirir nuevos conocimientos que me permitan crecer tanto personal como profesionalmente, aportando valor en cada proyecto que emprendo.
            </Paragraph>
            <div className="flex justify-center gap-4">
                <Button href="https://github.com/EliasP23" variant="github">
                    GitHub
                </Button>
                <Button href="https://www.linkedin.com/in/elias-parra-1a9ab42a1/" variant="linkedin">
                    LinkedIn
                </Button>
                <Button href="mailto:el.parrav@duocuc.cl" variant="contact">
                    Contacto
                </Button>
            </div>
        </section>
    );
}