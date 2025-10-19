import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

interface Props {
    date: string;
    title: string;
    description: string;
    align: 'left' | 'right';
}

export function TimelineItem({ date, title, description, align }: Props) {
    const isRight = align === 'right';

    return (
        <div className={`mb-8 flex justify-between ${isRight ? 'flex-row-reverse' : ''} items-center w-full`}>
            <div className="w-1/2"></div> {/* Empty side for spacing */}
            <div className={`w-1/2 ${isRight ? 'pr-8' : 'pl-8'}`}>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="font-bold text-blue-600 dark:text-blue-400">{date}</span>
                    <Heading as="h4" className="text-xl font-semibold my-1 text-gray-900 dark:text-white">
                        {title}
                    </Heading>
                    <Paragraph className="text-gray-600 dark:text-gray-400">
                        {description}
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}