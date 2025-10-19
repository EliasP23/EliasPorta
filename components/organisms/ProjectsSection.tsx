import { Heading } from '../atoms/Heading';
import { ProjectCard } from '../molecules/ProjectCard';

const projects = [
    {
        title: 'Level-Up Gamer',
        description: 'Level Up Gamer, es una pagina donde se pueden comprar articulos gamer tienes un amplio catalogo de articulos los cuales puedes adquirir con descuento de 20% si eres de DuocUC',
        tags: ['CSS', 'HTML', 'JavaScript']
    },
    {
        title: 'Shierly Store',
        description: 'Shierly Store, es una pagina donde se pueden realizar pedidos de alimentos para mascotas, Esta tienda online solo tiene ventas a granel',
        tags: ['HTML', 'CSS',]
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 ">
                <Heading as="h3" className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Proyectos Destacados
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
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