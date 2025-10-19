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
                Ingeniero en Informática & Full Stack Developer
            </Heading>
            <Paragraph className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
                Más de 5 años de experiencia transformando ideas en soluciones de software robustas y escalables. Especialista en desarrollo backend con Node.js y frontend con React.
            </Paragraph>
            <div className="flex justify-center gap-4">
                <Button href="httpsa://github.com/eliasparra-fake" variant="github">
                    GitHub
                </Button>
                <Button href="httpsa://linkedin.com/in/eliasparra-fake" variant="linkedin">
                    LinkedIn
                </Button>
                <Button href="mailto:elias.parra.fake@devmail.com" variant="contact">
                    Contacto
                </Button>
            </div>
        </section>
    );
}