import { useState } from "react";
import { Button } from "./ui/button";
import {Download, Leaf, Menu, X} from "lucide-react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="text-xl font-serif font-bold text-primary flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <span>Ariful Islam</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                {["About", "Skills", "Experience", "Education", "Portfolio", "Blog", "Contact"].map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollTo(item.toLowerCase())}
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        {item}
                    </button>
                ))}
                <Button variant="default" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> CV
                </Button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg">
                {["About", "Skills", "Experience", "Education", "Portfolio", "Blog", "Contact"].map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollTo(item.toLowerCase())}
                        className="text-left text-lg font-medium hover:text-primary transition-colors"
                    >
                        {item}
                    </button>
                ))}
                <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download CV
                </Button>
            </div>
        )}
    </nav>);
}

export default Header;