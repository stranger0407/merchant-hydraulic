import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  Check,
  ArrowRight,
  Cog,
  Ruler,
  Wrench,
  Lightbulb,
  Shield,
  Clock,
  Users,
  Award,
  FileText,
  Phone,
  Upload,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Hydraulic Solutions - Merchant Hydraulic',
  description: 'Custom hydraulic design and manufacturing services. Engineering expertise to create tailor-made hydraulic solutions for your specific requirements.',
  keywords: 'custom hydraulic solutions, bespoke hydraulics, hydraulic design services, custom hydraulic cylinders, hydraulic system design',
};

const capabilities = [
  {
    icon: Ruler,
    title: 'Custom Design',
    description: 'CAD-based engineering with 3D modeling and simulation for optimal performance.',
  },
  {
    icon: Cog,
    title: 'Precision Manufacturing',
    description: 'CNC machining with tight tolerances and high repeatability.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing protocols including pressure and endurance testing.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'R&D capabilities for novel hydraulic system development.',
  },
];

const industriesServed = [
  { name: 'Construction', description: 'Heavy equipment customization' },
  { name: 'Mining', description: 'Harsh environment solutions' },
  { name: 'Agriculture', description: 'Farm machinery hydraulics' },
  { name: 'Marine', description: 'Corrosion-resistant systems' },
  { name: 'Railways', description: 'RDSO approved components' },
  { name: 'Defense', description: 'Military-grade specifications' },
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your requirements, application, and specifications in detail.',
  },
  {
    step: '02',
    title: 'Engineering',
    description: 'Our engineers create detailed designs and 3D models for your approval.',
  },
  {
    step: '03',
    title: 'Prototyping',
    description: 'Sample units are manufactured for testing and validation.',
  },
  {
    step: '04',
    title: 'Production',
    description: 'Full-scale manufacturing with rigorous quality control.',
  },
  {
    step: '05',
    title: 'Delivery',
    description: 'On-time delivery with installation support available.',
  },
];

const caseStudies = [
  {
    title: 'Custom 50-Ton Press Cylinder',
    client: 'Heavy Manufacturing Unit',
    challenge: 'Needed specialized cylinder for hydraulic press with unique mounting.',
    solution: 'Designed and manufactured custom 50-ton press cylinder with integrated safety features.',
    result: '100% success rate, zero maintenance issues in 3 years.',
  },
  {
    title: 'Mining Equipment Hydraulics',
    client: 'Coal Mining Corporation',
    challenge: 'Required corrosion-resistant cylinders for underground operations.',
    solution: 'Developed special coating and seal systems for harsh mining conditions.',
    result: 'Extended service life by 40% compared to standard cylinders.',
  },
  {
    title: 'Agricultural Machinery System',
    client: 'Farm Equipment Manufacturer',
    challenge: 'Compact hydraulic system needed for limited space.',
    solution: 'Engineered space-optimized manifold system with integrated valves.',
    result: 'Reduced footprint by 35% while maintaining full functionality.',
  },
];

export default function CustomSolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
              Engineering Excellence
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Custom Hydraulic Solutions
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sky-100/90">
              When standard products dont meet your needs, our engineering team delivers bespoke
              hydraulic solutions designed and manufactured specifically for your application.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="#quote">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sky-400 text-white hover:bg-sky-800/50" asChild>
                <Link href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Our Engineers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Services
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Customization Capabilities
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="group text-center transition-shadow hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-sky-50 transition-colors group-hover:from-sky-200 group-hover:to-sky-100">
                    <cap.icon className="h-8 w-8 text-sky-700" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{cap.title}</h3>
                  <p className="text-slate-600">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              How We Work
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Custom Design Process
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((p, idx) => (
              <Card
                key={p.step}
                className="relative border-t-4 border-t-orange-500"
              >
                <CardContent className="p-6">
                  <span className="mb-3 block text-3xl font-bold text-orange-500">{p.step}</span>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
                Industries Served
              </span>
              <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Specialized Solutions for Every Industry
              </h2>
              <p className="mb-6 text-lg text-slate-600">
                We have engineered custom hydraulic solutions for diverse industries, each with unique
                challenges and requirements. Our expertise spans from standard customizations to
                complex system design.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Design consultation with certified engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Prototype development and testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Integration support and documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Post-delivery maintenance programs</span>
                </li>
              </ul>
              <Button className="bg-sky-700 hover:bg-sky-800" asChild>
                <Link href="#quote">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industriesServed.map((ind) => (
                <Card
                  key={ind.name}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-5">
                    <h3 className="mb-1 text-lg font-semibold text-slate-900">{ind.name}</h3>
                    <p className="text-sm text-slate-600">{ind.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-400">
              Success Stories
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Custom Project Highlights
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.title} className="border-slate-700 bg-slate-800/50">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-500/20 text-orange-300">{study.client}</Badge>
                  <h3 className="mb-3 text-lg font-semibold text-white">{study.title}</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-slate-400">
                      <span className="text-sky-400">Challenge:</span> {study.challenge}
                    </p>
                    <p className="text-slate-400">
                      <span className="text-sky-400">Solution:</span> {study.solution}
                    </p>
                    <p className="text-green-400">
                      <span className="font-semibold">Result:</span> {study.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
                Get Started
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Request a Custom Solution
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Tell us about your requirements and our engineering team will get back to you
                within 24 hours with a detailed proposal.
              </p>
            </div>

            <Card className="border-2 border-sky-100">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="you@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="application">Application / Industry</Label>
                    <Input id="application" placeholder="e.g., Mining equipment, Press machine, etc." />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity Required</Label>
                      <Input id="quantity" type="number" placeholder="e.g., 10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pressure">Working Pressure (bar)</Label>
                      <Input id="pressure" placeholder="e.g., 250" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Input id="timeline" placeholder="e.g., 3 months" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specs">Technical Requirements</Label>
                    <Textarea
                      id="specs"
                      rows={4}
                      placeholder="Describe your requirements: bore size, stroke length, mounting style, speed, fluid type, operating environment, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Documents (Drawings, Specs, etc.)</Label>
                    <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 p-8 hover:border-sky-500 hover:bg-sky-50/50">
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-slate-400" />
                        <p className="mt-2 text-sm text-slate-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-slate-400">PDF, DWG, STEP up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              Prefer to Talk Directly?
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Our engineering team is available to discuss your custom requirements and provide
              immediate guidance on your project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md">
                <Phone className="h-6 w-6 text-sky-600" />
                <div>
                  <p className="text-xs text-slate-500">Call Us</p>
                  <p className="font-semibold text-slate-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md">
                <FileText className="h-6 w-6 text-sky-600" />
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">custom@merchanthydraulic.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
