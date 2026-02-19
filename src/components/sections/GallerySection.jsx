function GallerySection() {
    return (<section id="gallery" className="py-24 px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Field Work Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 rounded-2xl bg-muted overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-serif text-4xl group-hover:scale-110 transition-transform">Field Trip</div>
            </div>
            <div className="rounded-2xl bg-muted/60 overflow-hidden relative"></div>
            <div className="rounded-2xl bg-muted/40 overflow-hidden relative"></div>
            <div className="col-span-2 rounded-2xl bg-muted/70 overflow-hidden relative"></div>
            <div className="rounded-2xl bg-muted/50 overflow-hidden relative"></div>
            <div className="rounded-2xl bg-muted/30 overflow-hidden relative"></div>
        </div>
    </section>);
}

export default GallerySection;