import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

const portfolio = [
    {
        title: "Dhaka Urban Heat Map",
        cat: "GIS Analysis",
        img: "bg-orange-900", // Placeholder color
    },
    {
        title: "River Water Quality",
        cat: "Field Research",
        img: "bg-blue-900",
    },
    {
        title: "Coastal Erosion Study",
        cat: "Climate Impact",
        img: "bg-teal-900",
    },
    {
        title: "Forest Cover Change",
        cat: "Remote Sensing",
        img: "bg-green-900",
    },
    {
        title: "Waste Management Plan",
        cat: "Urban Planning",
        img: "bg-gray-800",
    },
    {
        title: "Carbon Footprint Calc",
        cat: "Web Tool",
        img: "bg-emerald-900",
    }
]

function PortfolioSection() {
    return (<section id="portfolio" className="py-24 bg-primary text-primary-foreground">
        <div className="px-6">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Projects</h2>
                    <p className="text-primary-foreground/80 max-w-xl">
                        A selection of my work in environmental analysis, mapping, and research.
                    </p>
                </div>
                <Button variant="secondary" className="hidden md:flex">View All Projects</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((proj, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-xl aspect-video bg-background/10 border border-white/10 hover:border-white/30 transition-all cursor-pointer">
                        {/* Fallback visual since we don't have project images yet */}
                        <div className={`absolute inset-0 ${proj.img} opacity-50 group-hover:scale-105 transition-transform duration-500`} />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-0 left-0 p-6">
                            <div className="text-accent-foreground text-xs uppercase tracking-wider font-semibold mb-1">{proj.cat}</div>
                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{proj.title}</h3>
                        </div>

                        <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="h-4 w-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>);
}

export default PortfolioSection;