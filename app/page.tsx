import { Button } from '@/components/ui/button';
import { Shield, BookOpen, Brain, Bell, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
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

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,hsl(var(--primary))_0deg,transparent_60deg,hsl(var(--secondary))_120deg,transparent_180deg,hsl(var(--accent))_240deg,transparent_300deg)] opacity-10" />
          <div className="absolute inset-0 grid-pattern" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient leading-tight">
              Empowering Your Crypto Journey: Stay Safe, Stay Smart
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              At Crypto_Horizon, we provide cutting-edge tools to help you navigate the complexities of cryptocurrency with confidence, security, and knowledge.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow hover-scale">
                Join the Revolution
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative" id="mission">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1),hsl(var(--secondary)/0.1))]" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At Crypto_Horizon, we are on a mission to redefine the way people interact with cryptocurrency. In an environment full of volatility and scams, we leverage the power of artificial intelligence to offer a suite of innovative tools that help you make informed decisions and protect your assets.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Feature
              icon={<Brain className="w-12 h-12" />}
              title="AI-Powered Scam Detection"
              description="Our AI continuously monitors blockchain activity, social media, and crypto platforms to alert you in real-time about potential scams."
              color="text-primary"
            />
            <Feature
              icon={<BookOpen className="w-12 h-12" />}
              title="Crypto Learning Hub"
              description="Access in-depth articles, tutorials, webinars, and expert insights on everything from basic crypto concepts to advanced trading."
              color="text-secondary"
            />
            <Feature
              icon={<Shield className="w-12 h-12" />}
              title="Trust Index"
              description="Rate crypto projects on transparency, developer activity, community feedback, and security audits with our unique Trust Index."
              color="text-accent"
            />
            <Feature
              icon={<Bell className="w-12 h-12" />}
              title="Real-Time Alerts"
              description="Stay informed with instant notifications about market conditions, scams, and trends that could impact your portfolio."
              color="text-primary"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="100K+" label="Active Users" />
            <Stat number="500+" label="Verified Projects" />
            <Stat number="50K+" label="Scam Alerts" />
            <Stat number="$10M+" label="Saved From Scams" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              content="Crypto_Horizon saved me from a potential loss of $50,000. The AI scam detection tool alerted me about a fraudulent ICO just in time."
              author="John Doe"
              title="Crypto Enthusiast"
            />
            <Testimonial
              content="I've been using Crypto_Horizon for months, and it's transformed my crypto trading. The Trust Index helped me make more informed decisions."
              author="Jane Smith"
              title="Experienced Trader"
            />
            <Testimonial
              content="The community support on Crypto_Horizon is unparalleled. I feel safe knowing I can rely on both AI tools and a supportive community."
              author="Mark Lee"
              title="Crypto Newbie"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--secondary)/0.1)_0deg,transparent_60deg,hsl(var(--primary)/0.1)_120deg,transparent_180deg,hsl(var(--accent)/0.1)_240deg,transparent_300deg)]" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become Part of the Crypto_Horizon Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us today to get instant access to AI-powered tools, expert content, and a supportive community that's always ready to help.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline">
              Already a member? Log In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

function Feature({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover-scale transition-all duration-300">
      <div className={`mb-4 ${color}`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

function Testimonial({ content, author, title }: { content: string; author: string; title: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover-scale transition-all duration-300">
      <p className="mb-4 text-muted-foreground">{content}</p>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </div>
    </div>
  );
}