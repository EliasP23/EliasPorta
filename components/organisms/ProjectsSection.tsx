import { Heading } from '../atoms/Heading';
import { ProjectCard } from '../molecules/ProjectCard';

const projects = [
    {
        title: 'FinTrack',
        description: 'App de seguimiento financiero personal para control de gastos e ingresos.',
        tags: ['React Native', 'Firebase']
    },
    {
        title: 'EcoRuta',
        description: 'Plataforma web para optimizar rutas de recolección de reciclaje en la ciudad.',
        tags: ['Next.js', 'PostgreSQL', 'Leaflet']
    },
    {
        title: 'API Gestor de Tareas',
        description: 'API RESTful para gestión de proyectos y tareas, con autenticación JWT.',
        tags: ['NestJS', 'Docker', 'JWT']
    }
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <Heading as="h3" className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Proyectos Destacados
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}