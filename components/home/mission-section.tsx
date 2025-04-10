export function MissionSection() {
    return (
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
    );
  }