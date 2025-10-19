import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';
import { Tag } from '../atoms/Tag';

interface Props {
    title: string;
    description: string;
    tags: string[];
}

export function ProjectCard({ title, description, tags }: Props) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
            <div className="p-6">
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
        </div>
    );
}