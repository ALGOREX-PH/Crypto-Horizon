'use client';

import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,hsl(var(--primary))_0deg,transparent_60deg,hsl(var(--secondary))_120deg,transparent_180deg,hsl(var(--accent))_240deg,transparent_300deg)] opacity-20 animate-spin-slow" />
        <div className="absolute inset-0 grid-pattern" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient leading-tight">
              Empowering Your Crypto Journey: Stay Safe, Stay Smart
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              At Crypto_Horizon, we provide cutting-edge tools to help you navigate the complexities of cryptocurrency with confidence, security, and knowledge.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow">
                  Join the Revolution
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2">
                  Explore Features
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}