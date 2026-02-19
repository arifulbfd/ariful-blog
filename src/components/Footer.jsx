import { Leaf } from "lucide-react";

function Footer() {
    return ( <footer className="bg-foreground text-background py-12">
        <div className="container px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-serif font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <Leaf className="h-5 w-5 text-primary-foreground" />
              Ariful Islam
            </div>
            <p className="text-sm text-background/60">
              Environmental Scientist & GIS Specialist
            </p>
          </div>
          
          <div className="text-sm text-background/40">
            © {new Date().getFullYear()} Ariful Islam. All rights reserved.
          </div>
        </div>
      </footer> );
}

export default Footer;