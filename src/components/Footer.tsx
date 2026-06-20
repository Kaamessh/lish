import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-background font-black leading-none">A</span>
              </div>
              Aura
            </Link>
            <p className="text-foreground/60 text-sm mb-6">
              Elite custom software development and AI agency for modern enterprises. We build the future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors text-sm">AI & Data Science</Link></li>
              <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors text-sm">Custom Applications</Link></li>
              <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors text-sm">Enterprise Systems</Link></li>
              <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors text-sm">Cloud Architecture</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors text-sm">Our Ethos</Link></li>
              <li><Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">GitHub</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Aura Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Keeping it clean without legal/privacy pages as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
}
