import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';
import { Tag } from '../atoms/Tag';


interface Props {
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform flex flex-col h-full">
            <div className="p-6 flex-grow">
                <Heading as="h4" className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {title}
                </Heading>
                <Paragraph className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                </Paragraph>
                <div>
                    {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
            </div>
            {link && (
                <div className="p-6 pt-0 mt-auto">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg transition-colors text-sm ${
                            'bg-green-700 text-white hover:bg-green-600'
                        }`}
                    >
                        Visitar Sitio
                    </a>
                </div>
            )}
        </div>
    );
}