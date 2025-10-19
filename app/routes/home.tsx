import type { Route } from "./+types/home";
import { PortfolioTemplate } from "../../components/templates/PortfolioTemplate";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Elias Parra - Ingeniero en Informática" },
        { name: "description", content: "Portafolio de Elias Parra, Ingeniero en Informática y Full Stack Developer. Experto en React, Node.js y AWS." },
    ];
}

export default function Home() {
    return <PortfolioTemplate />;
}