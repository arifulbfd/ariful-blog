import { Facebook, Instagram, Linkedin, Mail, Map, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function NewsletterSection() {
    return (<section id="contact" className="py-24 px-6">
        <div className="grid md:grid-cols-2 gap-12 bg-primary/5 rounded-3xl p-8 md:p-12">
            <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Let's Work Together</h2>
                <p className="text-muted-foreground mb-8">
                    Interested in collaboration or have a question about my research?
                    I'm always open to new opportunities and discussions.
                </p>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-foreground/80">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>ariful.islam@example.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80">
                        <Map className="h-5 w-5 text-primary" />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
                <h3 className="font-bold mb-4">Send me a message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium uppercase text-muted-foreground">Name</label>
                            <Input placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium uppercase text-muted-foreground">Email</label>
                            <Input placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase text-muted-foreground">Subject</label>
                        <Input placeholder="Project Inquiry" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase text-muted-foreground">Message</label>
                        <Textarea placeholder="How can I help you?" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </div>
        </div>

        {/* Newsletter Sub-section */}
        <div className="mt-16 text-center max-w-xl mx-auto">
            <h3 className="text-xl font-serif font-bold mb-2">Subscribe to my Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-6">
                Get the latest updates on my research and environmental news.
            </p>
            <div className="flex gap-2">
                <Input placeholder="Enter your email address" className="bg-secondary/30" />
                <Button>Subscribe</Button>
            </div>
        </div>
    </section>);
}

export default NewsletterSection;