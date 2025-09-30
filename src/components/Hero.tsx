import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Abstract wave pattern background */}
      <div className="absolute inset-0 opacity-30">
        <svg 
          className="absolute top-0 left-0 w-full h-full" 
          viewBox="0 0 1200 800" 
          fill="none"
        >
          <path 
            d="M0,400 C300,200 600,600 1200,400 L1200,800 L0,800 Z" 
            fill="url(#wave-gradient)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Continuous</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">External Auditing</span>
                <br />
                <span className="text-foreground">in Real-Time</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                AuditFlow automatically verifies every transaction and updates your financial statements with continuous audit assurance. Say goodbye to yearly sample-based audits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-card hover:shadow-glow transition-all">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                Schedule Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-success">99.3%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Transaction Coverage</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-2xl shadow-card overflow-hidden">
              <img 
                src={heroDashboard} 
                alt="AuditFlow Dashboard Interface"
                className="w-full h-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-soft">
              ✓ Real-time Verified
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border shadow-soft px-4 py-2 rounded-full text-sm font-medium">
              🔒 Audit Trail Complete
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;