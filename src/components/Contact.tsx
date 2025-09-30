import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, CALENDLY_CONFIG } from '@/config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJS configuration
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    
    try {
      // Send email using EmailJS with basic template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        to_email: 'cyril.kleintjes@gmail.com'
      };
      
      console.log('Sending email with params:', templateParams);
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        serviceId,
        templateId,
        publicKey,
        formData
      });
      
      // Log more detailed error information
      if (error.text) {
        console.error('EmailJS error text:', error.text);
      }
      if (error.status) {
        console.error('EmailJS error status:', error.status);
      }
      
      toast({
        title: "Error sending message",
        description: `Error: ${error.text || error.message || 'Unknown error'}. Please try again or contact us directly at cyril.kleintjes@gmail.com`,
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "cyril.kleintjes@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+31 6 15947460",
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Amsterdam",
      color: "success"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Audit Process?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team to see how AuditFlow can provide continuous assurance 
            for your financial statements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Contact</CardTitle>
              <CardDescription>
                Tell us about your current audit challenges and we'll show you how AuditFlow can help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Company name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your audit challenges and requirements..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                Our team of audit technology experts is ready to help you implement 
                continuous auditing and transform your financial reporting process.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-${info.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-6 h-6 text-${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Schedule a Demo</h4>
              <p className="mb-6 opacity-90">
                See AuditFlow in action with a personalized demo tailored to your industry and use case.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full"
                onClick={() => window.open(CALENDLY_CONFIG.demoLink, '_blank')}
              >
                Book Demo Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;