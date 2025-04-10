import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="border-b border-border/5 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 hover-scale">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-semibold">Crypto_Horizon</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#community" className="text-sm hover:text-primary transition-colors">Community</a>
          <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Testimonials</a>
          <Button variant="default" size="sm" className="glow">Login</Button>
        </div>
      </div>
    </nav>
  );
}