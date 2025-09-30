import { Shield, CheckCircle, Lock } from "lucide-react";

const Trust = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Regulatory Ready",
      description: "Pre-built compliance frameworks for SEC, PCAOB, and international standards",
      color: "primary"
    },
    {
      icon: CheckCircle,
      title: "Audit-Grade Evidence",
      description: "Every verification includes supporting documentation and evidence trails",
      color: "success"
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "End-to-end encryption with SOC 2 Type II certification",
      color: "primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Compliance & Trust
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AuditFlow meets the highest standards of financial reporting and regulatory compliance,
            giving you confidence in every verification.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg bg-${point.color}/10 flex items-center justify-center mb-4`}>
                <point.icon className={`w-7 h-7 text-${point.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Transparency message */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold mb-4 text-primary">Complete Transparency</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every audit decision, exception flagged, and verification completed is fully documented 
            and accessible to regulators, auditors, and stakeholders. No black boxes, no hidden processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;