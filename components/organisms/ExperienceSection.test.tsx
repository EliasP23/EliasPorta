import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ExperienceSection } from './ExperienceSection';

vi.mock('../atoms/Heading', () => ({
    Heading: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
}));

const mockTimelineItem = vi.fn();
vi.mock('../molecules/TimelineItem', () => ({
    TimelineItem: (props: any) => {
        mockTimelineItem(props);
        return <div data-testid={`timeline-item-${props.title}`}>{props.date} - {props.title}</div>;
    },
}));

const expectedJobs = [
    {
        date: '2025',
        title: 'Ayudantia DuocUC',
        description: 'Servicio de Ayudantia de SERVICIOS DIGITALES en DuocUC Se realiza un servicio tecnico a cualquier dispositivo que lo requiera solucionando cualquier incoveniente ',
        align: 'right' as const
    },
];


describe('ExperienceSection component', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the main heading correctly', () => {
        render(<ExperienceSection />);
        const headingElement = screen.getByRole('heading', { level: 3, name: /experiencia laboral/i });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveClass('text-3xl font-bold text-center mb-12');
    });

    it('renders the correct number of TimelineItem components', () => {
        render(<ExperienceSection />);
        const timelineItems = screen.getAllByTestId(/timeline-item-/i);
        expect(timelineItems).toHaveLength(expectedJobs.length);
    });

    it('passes the correct props to each TimelineItem component', () => {
        render(<ExperienceSection />);

        expect(mockTimelineItem).toHaveBeenCalledTimes(expectedJobs.length);
        expectedJobs.forEach((job, index) => {
            expect(mockTimelineItem).toHaveBeenNthCalledWith(
                index + 1,
                expect.objectContaining({
                    date: job.date,
                    title: job.title,
                    description: job.description,
                    align: job.align,
                })
            );
        });
    });

    it('renders the section with correct structure and timeline bar', () => {
        const { container } = render(<ExperienceSection />);

        const sectionElement = container.firstChild as HTMLElement;
        expect(sectionElement).toBeInTheDocument();
        expect(sectionElement.tagName).toBe('SECTION');
        expect(sectionElement).toHaveAttribute('id', 'experience');
        expect(sectionElement).toHaveClass('bg-gray-50 dark:bg-gray-900 py-20');

        const mainContainerDiv = sectionElement.firstChild as HTMLElement;
        expect(mainContainerDiv).toHaveClass('container mx-auto px-4');

        const timelineWrapper = screen.getByRole('heading', { name: /experiencia laboral/i }).nextElementSibling;
        expect(timelineWrapper).toHaveClass('relative max-w-3xl mx-auto');

        const timelineBar = timelineWrapper?.firstChild as HTMLElement;
        expect(timelineBar).toHaveClass('absolute left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2');
    });

});