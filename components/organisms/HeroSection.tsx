import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

export function HeroSection() {
    return (
        <section id="home" className="container mx-auto px-4 py-24 text-center">
            <div className="flex flex-col items-center mb-8 md:flex-row md:justify-center md:gap-8">
                <img
                    src="assets/20221203_001024.jpg"
                    alt="Foto de Elias Parra"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 md:mb-0 shadow-lg border-4 border-white dark:border-gray-700"
                />
                <div className="text-center md:text-left">
                    <Heading as="h1" className="text-4xl md:text-6xl font-bold mb-2 text-gray-900 dark:text-white">
                        Hola, soy Elias Parra
                    </Heading>
                    <Heading as="h2" className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                        Estudiante de Ingenieria en Informática
                    </Heading>
                </div>
            </div>
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