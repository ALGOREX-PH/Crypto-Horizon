import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/10 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--primary)/0.05))]" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-semibold">Crypto_Horizon</span>
          </div>
          <div className="flex gap-8">
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AI Scam Detection</li>
                <li>Learning Hub</li>
                <li>Trust Index</li>
                <li>Real-Time Alerts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Twitter</li>
                <li>Discord</li>
                <li>Telegram</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/10 text-center text-sm text-muted-foreground">
          © 2025 Crypto_Horizon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}