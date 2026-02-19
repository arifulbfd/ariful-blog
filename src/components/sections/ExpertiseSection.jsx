import { Globe, Trees, Map } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const experties = [
    {
        icon: <Trees className="h-8 w-8" />,
        title: "Environmental Science",
        desc: "Analyzing ecosystems, biodiversity, and human impact to develop conservation strategies."
    },
    {
        icon: <Map className="h-8 w-8" />,
        title: "GIS & Remote Sensing",
        desc: "Spatial data analysis and mapping using ArcGIS and QGIS for environmental monitoring."
    },
    {
        icon: <Globe className="h-8 w-8" />,
        title: "Climate Change",
        desc: "Researching climate patterns, mitigation strategies, and adaptation planning."
    }
]

function ExpertiseSection() {
    return (<section id="about" className="py-24 bg-secondary/30">
        <div className=" px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Areas of Expertise</h2>
                <Separator className="w-24 h-1 bg-primary mx-auto mb-6" />
                <p className="text-muted-foreground">
                    Combining scientific research with advanced spatial technology to address critical environmental challenges.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {experties.map((item, i) => (
                    <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                                {item.icon}
                            </div>
                            <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.desc}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>);
}

export default ExpertiseSection;