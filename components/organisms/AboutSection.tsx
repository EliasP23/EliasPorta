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
                    Soy una persona responsable, organizada y con facilidad para aprender nuevas tareas. Me caracterizo por mi compromiso, actitud proactiva y disposición para asumir desafíos. Actualmente estudio en Duoc UC, donde curso el segundo año de Ingeniería en Informática, lo que me ha permitido fortalecer mis conocimientos en tecnología, programación y resolución de problemas.

                    Busco una oportunidad que me permita desarrollar mis habilidades, aportar valor al equipo y seguir creciendo tanto personal como profesionalmente. Me adapto con facilidad a distintos entornos de trabajo, disfruto colaborar con otros y mantengo siempre una actitud positiva orientada al aprendizaje y la mejora continua.
                </Paragraph>
            </div>
        </section>
    );
}