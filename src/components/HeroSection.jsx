import { Badge, Map } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Assets
import heroBg from "../assets/hero-bg.png";
import profileImg from "../assets/profile.jpeg";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


function HeroSection() {
    return ( 
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-background z-10" />
          <img 
            src={heroBg.src} 
            alt="Nature Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container relative z-10 px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 mb-4">
                Environmental Scientist
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight">
              Preserving <br/>
              <span className="text-accent italic">Our Planet</span> <br/>
              Through Data.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Hi, I'm <span className="text-foreground font-medium">Ariful Islam</span>. 
              I specialize in Environmental Science, GIS mapping, and Climate Change analysis 
              to create sustainable solutions for a better future.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-base">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-background/80">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border-8 border-background/50">
              <img 
                src={profileImg.src} 
                alt="Ariful Islam" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-card p-4 rounded-xl shadow-lg border border-border/50 max-w-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Map className="h-5 w-5" />
                </div>
                <div className="font-medium text-sm">GIS Specialist</div>
              </div>
              <p className="text-xs text-muted-foreground">Mapping sustainable futures through spatial analysis.</p>
            </div>
          </motion.div>
        </div>
      </section> );
}

export default HeroSection;