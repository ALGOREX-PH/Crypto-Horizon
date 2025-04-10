import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
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
  );
}