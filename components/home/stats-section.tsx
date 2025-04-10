'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  number: string;
  label: string;
  delay: number;
}

function Stat({ number, label, delay }: StatProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded-lg bg-card/5 backdrop-blur-sm"
    >
      <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { number: "100K+", label: "Active Users", delay: 0 },
    { number: "500+", label: "Verified Projects", delay: 0.2 },
    { number: "50K+", label: "Scam Alerts", delay: 0.4 },
    { number: "$10M+", label: "Saved From Scams", delay: 0.6 }
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