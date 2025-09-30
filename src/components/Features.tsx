import { BarChart3, AlertTriangle, Search, Eye, FileText, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const featureLayers = [
    {
      title: "C-Suite Dashboard",
      subtitle: "Executive Summary View",
      icon: BarChart3,
      color: "primary",
      features: [
        "Real-time financial health metrics",
        "Audit confidence scoring",
        "Exception trend analysis",
        "Compliance status overview"
      ],
      badge: "Executive Level"
    },
    {
      title: "Auditor Dashboard", 
      subtitle: "Exception Monitoring & Reconciliation",
      icon: AlertTriangle,
      color: "accent",
      features: [
        "Exception queue management",
        "Automated reconciliation tools",
        "Risk-based prioritization",
        "Audit evidence collection"
      ],
      badge: "Auditor Focus"
    },
    {
      title: "Transaction Explorer",
      subtitle: "Detailed Drill-Down & Audit Logs",
      icon: Search,
      color: "success",
      features: [
        "Transaction-level verification",
        "Complete audit trail",
        "Source document linking",
        "Timeline reconstruction"
      ],
      badge: "Detail View"
    }
  ];

  const additionalFeatures = [
    { icon: Eye, title: "Real-time Monitoring", description: "Continuous transaction verification" },
    { icon: FileText, title: "Automated Reports", description: "Generate compliance reports instantly" },
    { icon: Activity, title: "Live Reconciliation", description: "Balance sheets update in real-time" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Three Layers of
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Financial Transparency
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From executive summaries to transaction-level details, AuditFlow provides the right view for every stakeholder.
          </p>
        </div>

        {/* Main feature layers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featureLayers.map((layer, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-${layer.color}/10 flex items-center justify-center mb-4`}>
                  <layer.icon className={`w-8 h-8 text-${layer.color}`} />
                </div>
                <Badge variant="secondary" className="mb-3 w-fit mx-auto">
                  {layer.badge}
                </Badge>
                <CardTitle className="text-2xl font-bold">{layer.title}</CardTitle>
                <CardDescription className="text-lg">{layer.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {layer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${layer.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional features grid */}
        <div className="bg-gradient-subtle rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Core Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-card/50 rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;