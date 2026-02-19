import { Leaf } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const blogs = [
    {
        title: "The Future of GIS in Bangladesh",
        date: "Oct 12, 2023",
        excerpt: "How spatial technologies are revolutionizing disaster management and urban planning in developing nations."
    },
    {
        title: "Understanding Microplastics",
        date: "Sep 28, 2023",
        excerpt: "A deep dive into the microscopic threat affecting our river ecosystems and food chains."
    },
    {
        title: "Sustainable Urban Living",
        date: "Aug 15, 2023",
        excerpt: "Simple lifestyle changes that can significantly reduce your individual carbon footprint."
    }
]

function BlogSection() {
    return (<section id="blog" className="py-24 bg-secondary/30">
        <div className=" px-6">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Latest Insights</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {blogs.map((post, i) => (
                    <Card key={i} className="hover:shadow-lg transition-shadow bg-card border-none">
                        <div className="h-48 bg-muted w-full relative">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                <Leaf className="h-12 w-12" />
                            </div>
                        </div>
                        <CardContent className="pt-6">
                            <div className="text-sm text-accent font-medium mb-2">{post.date}</div>
                            <h3 className="text-xl font-serif font-bold mb-3 hover:text-primary cursor-pointer">{post.title}</h3>
                            <p className="text-muted-foreground text-sm line-clamp-3">
                                {post.excerpt}
                            </p>
                            <Button variant="link" className="px-0 mt-4 h-auto text-primary">Read More &rarr;</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>);
}

export default BlogSection;