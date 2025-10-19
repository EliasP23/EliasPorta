import { useState } from 'react';

const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#about', label: 'Sobre Mí' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo/Brand */}
                <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
                    Elias Parra
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 dark:text-gray-300 focus:outline-none"
                        aria-label="Abrir menú"
                    >
                        {/* Icono Hamburguesa (simple) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 absolute w-full shadow-md`}>
                <div className="flex flex-col px-4 py-2 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                            onClick={() => setIsOpen(false)} // Close menu on click
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}