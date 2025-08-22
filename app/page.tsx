import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Monitor, Shield, BarChart3, Star, ArrowRight, CheckCircle, Server, HardDrive } from "lucide-react"
import Footer from "@/components/footer/footer"
import Link from "next/link"

export default function AssetManagementLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-black text-primary">Oloip Asset Management Solution</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-foreground hover:text-accent transition-colors">
                  Services
                </a>
                <a href="#about" className="text-foreground hover:text-accent transition-colors">
                  About
                </a>
                <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <Button variant="default" className="bg-accent hover:bg-accent/90" asChild>
            <Link href="/dashboard"> Admin Dashboard</Link>
            
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder-oa5ds.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Trusted by 5,000+ IT Teams
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
              Streamline Your
              <span className="text-accent block">IT Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT asset management solutions to track, optimize, and secure your hardware, software, and
              digital infrastructure across your entire organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Complete IT Asset Management Suite</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to manage your entire IT infrastructure from a single platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Monitor className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Hardware Tracking</CardTitle>
                <CardDescription>
                  Complete visibility of all hardware assets including computers, servers, and mobile devices
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">License Management</CardTitle>
                <CardDescription>
                  Track software licenses, ensure compliance, and optimize license utilization across your organization
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Asset Analytics</CardTitle>
                <CardDescription>
                  Real-time dashboards and reports on asset utilization, costs, and lifecycle management
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Server className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Network Discovery</CardTitle>
                <CardDescription>
                  Automated discovery and mapping of network devices and infrastructure components
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Compliance Monitoring</CardTitle>
                <CardDescription>
                  Ensure regulatory compliance and maintain security standards across all IT assets
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <HardDrive className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Lifecycle Management</CardTitle>
                <CardDescription>
                  Track asset lifecycle from procurement to disposal with automated workflows
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Why Choose Oloip Asset Management Solution?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in IT asset management, we provide enterprise-grade solutions that help
                organizations optimize their technology investments and maintain security compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">IT Expertise</h3>
                    <p className="text-muted-foreground">
                      Specialized team with deep knowledge of IT infrastructure and asset management
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Scalable Platform</h3>
                    <p className="text-muted-foreground">
                      Grows with your organization from small teams to enterprise-level deployments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Security First</h3>
                    <p className="text-muted-foreground">
                      Enterprise-grade security with role-based access and audit trails
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
             <picture>
              <img
                src="/placeholder-uwwia.png"
                alt="IT professionals managing technology assets"
                className="rounded-lg shadow-xl"
              />
             </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by IT teams at leading organizations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;ITAssetPro transformed our IT operations. We now have complete visibility of our infrastructure and
                  reduced our software licensing costs by 30%.&quot;
                </p>
                <div>
                  <p className="font-semibold text-foreground">David Martinez</p>
                  <p className="text-sm text-muted-foreground">IT Director, TechCorp</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;The automated discovery feature saved us weeks of manual inventory work. Compliance reporting is now
                  effortless and accurate.&quot;
                </p>
                <div>
                  <p className="font-semibold text-foreground">Lisa Chen</p>
                  <p className="text-sm text-muted-foreground">Systems Administrator</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &quot;Excellent platform with outstanding support. The lifecycle management features help us plan hardware
                  refreshes and budget more effectively.&quot;
                </p>
                <div>
                  <p className="font-semibold text-foreground">James Wilson</p>
                  <p className="text-sm text-muted-foreground">CTO, InnovateLabs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Contact us today for a free demo and see how we can optimize your IT asset management
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Request Your Demo</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we&apos;ll schedule a personalized demonstration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your IT infrastructure and asset management challenges"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg"
                >
                  Request Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
 <Footer />
    </div>
  )
}
