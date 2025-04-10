import { Brain, BookOpen, Shield, Bell } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function Feature({ icon, title, description, color }: FeatureProps) {
  return (
    <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover-scale transition-all duration-300">
      <div className={`mb-4 ${color}`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Scam Detection",
      description: "Our AI continuously monitors blockchain activity, social media, and crypto platforms to alert you in real-time about potential scams.",
      color: "text-primary"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Crypto Learning Hub",
      description: "Access in-depth articles, tutorials, webinars, and expert insights on everything from basic crypto concepts to advanced trading.",
      color: "text-secondary"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust Index",
      description: "Rate crypto projects on transparency, developer activity, community feedback, and security audits with our unique Trust Index.",
      color: "text-accent"
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Real-Time Alerts",
      description: "Stay informed with instant notifications about market conditions, scams, and trends that could impact your portfolio.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}