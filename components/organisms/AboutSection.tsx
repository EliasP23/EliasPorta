import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

export function AboutSection() {
    return (
        <section id="about" className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <Heading as="h3" className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                    Sobre Mí
                </Heading>
                <Paragraph className="text-lg text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    Apasionado por la tecnología y el código limpio. Soy Ingeniero en Informática de la [Universidad Ficticia de Santiago]. En mi tiempo libre, contribuyo a proyectos open-source y exploro nuevas tecnologías como Rust y WebAssembly. Siempre buscando el próximo desafío.
                </Paragraph>
            </div>
        </section>
    );
}