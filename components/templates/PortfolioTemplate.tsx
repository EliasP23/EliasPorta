import { AboutSection } from '../organisms/AboutSection';
import { ExperienceSection } from '../organisms/ExperienceSection';
import { Footer } from '../organisms/Footer';
import { HeroSection } from '../organisms/HeroSection';
import { ProjectsSection } from '../organisms/ProjectsSection';

export function PortfolioTemplate() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <HeroSection />
                <ExperienceSection />
                <ProjectsSection />
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
}