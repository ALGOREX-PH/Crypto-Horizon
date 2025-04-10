interface StatProps {
    number: string;
    label: string;
  }
  
  function Stat({ number, label }: StatProps) {
    return (
      <div>
        <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {number}
        </div>
        <div className="text-muted-foreground">{label}</div>
      </div>
    );
  }
  
  export function StatsSection() {
    const stats = [
      { number: "100K+", label: "Active Users" },
      { number: "500+", label: "Verified Projects" },
      { number: "50K+", label: "Scam Alerts" },
      { number: "$10M+", label: "Saved From Scams" }
    ];
  
    return (
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
    );
  }