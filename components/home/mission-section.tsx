'use client';

import { Sparkles, Target, Users } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Value({ icon, title, description }: ValueProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card/5 backdrop-blur-sm border border-border/10 hover:border-primary/20 transition-colors duration-300">
      <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function MissionSection() {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Pioneering AI-driven solutions to revolutionize crypto security"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Protection",
      description: "Safeguarding users from scams and fraudulent activities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Building a trusted network of informed crypto enthusiasts"
    }
  ];

  return (
    <section className="py-20 relative" id="mission">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1),hsl(var(--secondary)/0.1))]" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Crypto_Horizon, we are revolutionizing cryptocurrency security through artificial intelligence and community collaboration. Our mission is to create a safer, more transparent crypto ecosystem for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {values.map((value, index) => (
            <Value key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}