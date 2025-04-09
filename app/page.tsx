import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, BookOpen, Brain, Users, ChartBar, Vote } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Crypto Horizon
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Navigate the crypto world safely with AI-powered scam detection, verified learning paths, and community-driven trust ratings.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-10 h-10 text-primary" />}
              title="Crypto Learning Hub"
              description="Structured, step-by-step learning experience with guided paths, gamified learning, and expert tutorials."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-secondary" />}
              title="Trust Index"
              description="Community-driven verification system with trust scores, red flag alerts, and transparency dashboards."
            />
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-accent" />}
              title="AI Scam Detection"
              description="Advanced AI analytics to identify fraudulent projects and protect your investments."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-primary" />}
              title="Community Hub"
              description="Engage with a thriving community, share insights, and get expert advice."
            />
            <FeatureCard
              icon={<ChartBar className="w-10 h-10 text-secondary" />}
              title="Portfolio Tools"
              description="Track learning progress, manage portfolios, and assess investment risks."
            />
            <FeatureCard
              icon={<Vote className="w-10 h-10 text-accent" />}
              title="Governance System"
              description="Decentralized voting and reputation system for community-driven platform evolution."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}