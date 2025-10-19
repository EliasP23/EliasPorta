import { Heading } from '../atoms/Heading';
import { TimelineItem } from '../molecules/TimelineItem';

const jobs = [
    {
        date: '2022 - Presente',
        title: 'Sr. Software Engineer @ Innovatech Solutions',
        description: 'Lidero el desarrollo de la plataforma SaaS principal, usando Microservicios en AWS, Node.js y React.',
        align: 'right' as const
    },
    {
        date: '2019 - 2022',
        title: 'Full Stack Developer @ Digital Nomads Co.',
        description: 'Desarrollo de aplicaciones web E-commerce para clientes internacionales usando MERN stack.',
        align: 'left' as const
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <Heading as="h3" className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Experiencia Laboral
                </Heading>
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline bar */}
                    <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>

                    {jobs.map((job) => (
                        <TimelineItem
                            key={job.title}
                            date={job.date}
                            title={job.title}
                            description={job.description}
                            align={job.align}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}