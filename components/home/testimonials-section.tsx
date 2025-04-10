interface TestimonialProps {
    content: string;
    author: string;
    title: string;
  }
  
  function Testimonial({ content, author, title }: TestimonialProps) {
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
  
  export function TestimonialsSection() {
    const testimonials = [
      {
        content: "Crypto_Horizon saved me from a potential loss of $50,000. The AI scam detection tool alerted me about a fraudulent ICO just in time.",
        author: "John Doe",
        title: "Crypto Enthusiast"
      },
      {
        content: "I've been using Crypto_Horizon for months, and it's transformed my crypto trading. The Trust Index helped me make more informed decisions.",
        author: "Jane Smith",
        title: "Experienced Trader"
      },
      {
        content: "The community support on Crypto_Horizon is unparalleled. I feel safe knowing I can rely on both AI tools and a supportive community.",
        author: "Mark Lee",
        title: "Crypto Newbie"
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