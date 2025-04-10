import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  title: string;
  delay: number;
}

function Testimonial({ content, author, title, delay }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-8 rounded-xl border-2 border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm relative"
    >
      <Quote className="absolute top-4 right-4 text-primary/20 w-8 h-8" />
      <p className="mb-6 text-muted-foreground leading-relaxed">{content}</p>
      <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-semibold text-primary">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "Crypto_Horizon saved me from a potential loss of $50,000. The AI scam detection tool alerted me about a fraudulent ICO just in time.",
      author: "John Doe",
      title: "Crypto Enthusiast",
      delay: 0
    },
    {
      content: "I've been using Crypto_Horizon for months, and it's transformed my crypto trading. The Trust Index helped me make more informed decisions.",
      author: "Jane Smith",
      title: "Experienced Trader",
      delay: 0.2
    },
    {
      content: "The community support on Crypto_Horizon is unparalleled. I feel safe knowing I can rely on both AI tools and a supportive community.",
      author: "Mark Lee",
      title: "Crypto Newbie",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}