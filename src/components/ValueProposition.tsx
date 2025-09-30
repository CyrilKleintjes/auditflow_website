import { CheckCircle, Clock, Users, Shield } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "Every transaction is verified instantly, not just a sample at year-end",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Full Population Coverage",
      description: "100% transaction verification vs traditional 5-10% sampling",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Reduced Manhours",
      description: "Eliminate months of manual audit work with automated continuous assurance",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Built-in Audit Trail",
      description: "Complete documentation and evidence trail for every verification",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Continuous Auditing Beats
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Traditional Year-End Audits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Move from reactive, sample-based auditing to proactive, comprehensive real-time verification. 
            Catch issues immediately, not months after they occur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-opacity-10 flex items-center justify-center mb-6 ${benefit.color.replace('text-', 'bg-')}`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison chart */}
        <div className="mt-20 bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8">Traditional vs Continuous Auditing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">5-10%</div>
              <div className="text-sm text-muted-foreground mb-4">Traditional Sample Size</div>
              <div className="h-2 bg-destructive/20 rounded-full">
                <div className="h-2 bg-destructive rounded-full w-1/10"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">100%</div>
              <div className="text-sm text-muted-foreground mb-4">AuditFlow Coverage</div>
              <div className="h-2 bg-success/20 rounded-full">
                <div className="h-2 bg-success rounded-full w-full"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground mb-4">Continuous Monitoring</div>
              <div className="h-2 bg-primary/20 rounded-full">
                <div className="h-2 bg-primary rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;