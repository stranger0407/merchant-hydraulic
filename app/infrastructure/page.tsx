import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  Cog,
  Check,
  Ruler,
  Flame,
  Droplets,
  Wrench,
  Award,
  ArrowRight,
  Factory,
  Microscope,
  Users,
  Clock,
  Shield,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Infrastructure - Merchant Hydraulic',
  description: 'State-of-the-art manufacturing facility with CNC machinery, testing labs, quality control, and assembly units. ISO 9001:2015 certified.',
  keywords: 'hydraulic manufacturing facility, hydraulic factory, CNC machinery, quality control, hydraulic testing, ISO certified',
};

const facilities = [
  {
    icon: Factory,
    title: 'Manufacturing Unit 1',
    size: '25,000 sq ft',
    focus: 'Hydraulic Cylinders',
    features: ['CNC Turning', 'CNC Milling', 'Deep Hole Drilling', 'Grinding'],
  },
  {
    icon: Factory,
    title: 'Manufacturing Unit 2',
    size: '20,000 sq ft',
    focus: 'Power Packs & Valves',
    features: ['CNC Lathes', 'Machining Centers', 'Assembly Lines'],
  },
  {
    icon: Microscope,
    title: 'Quality Lab',
    size: '5,000 sq ft',
    focus: 'Testing & Calibration',
    features: ['Pressure Testing', 'Leak Testing', 'Dimensional QC', 'Hardness Testing'],
  },
  {
    icon: Droplets,
    title: 'Surface Treatment',
    size: '15,000 sq ft',
    focus: 'Finishing & Coating',
    features: ['Chrome Plating', 'Dacromet', 'Phosphating', 'Painting'],
  },
];

const machinery = [
  { name: 'CNC Turning Centers', count: '12', brand: 'Mazak, Hyundai, ACE' },
  { name: 'CNC Milling Machines', count: '8', brand: 'DMG Mori, Haas' },
  { name: 'Deep Hole Drilling', count: '4', brand: 'TBT, Botek' },
  { name: 'Cylindrical Grinders', count: '6', brand: 'Kellenberger, Studer' },
  { name: 'Surface Grinders', count: '4', brand: 'HMT, ELB' },
  { name: 'Honning Machines', count: '3', brand: 'Sunnen, Nagel' },
  { name: 'Assembly Stations', count: '20+', brand: 'Custom Built' },
  { name: 'Test Rigs', count: '8', brand: 'In-house Design' },
];

const certifications = [
  { name: 'ISO 9001:2015', org: 'TÜV SÜD', valid: '2025', desc: 'Quality Management System' },
  { name: 'CE Certified', org: 'Notified Body', valid: '2025', desc: 'European Conformity Mark' },
  { name: 'RDSO Approved', org: 'Indian Railways', valid: '2025', desc: 'Railway Component Approval' },
  { name: 'MSME Udyam', org: 'GoI', valid: 'Valid', desc: 'MSME Registration' },
];

const productionCapacity = [
  { product: 'Hydraulic Cylinders', capacity: '5,000+', per: 'month' },
  { product: 'Power Packs', capacity: '300+', per: 'month' },
  { product: 'Hydraulic Valves', capacity: '2,000+', per: 'month' },
  { product: 'Hydraulic Presses', capacity: '50+', per: 'month' },
];

export default function InfrastructurePage() {
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
              Facility Tour
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              World-Class Manufacturing Infrastructure
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sky-100/90">
              Our Greater Noida facility spans over 65,000 sq ft with cutting-edge machinery,
              precision tooling, and ISO 9001:2015 certified quality systems.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '65,000', unit: 'sq ft', label: 'Total Facility Area' },
              { value: '50+', unit: '', label: 'CNC & VMC Machines' },
              { value: '200+', unit: '', label: 'Skilled Workforce' },
              { value: '25+', unit: 'years', label: 'Manufacturing Excellence' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-1">
                  <span className="text-4xl font-bold text-sky-700">{stat.value}</span>
                  <span className="text-xl text-slate-500">{stat.unit}</span>
                </div>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Facilities
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              State-of-the-Art Manufacturing Units
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {facilities.map((facility) => (
              <Card key={facility.title} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-sky-600 to-sky-800 p-6 text-white md:w-1/3">
                      <facility.icon className="mb-4 h-10 w-10" />
                      <h3 className="mb-2 text-xl font-bold">{facility.title}</h3>
                      <p className="text-sky-200 text-sm">{facility.size}</p>
                      <p className="text-orange-300 text-sm font-medium">{facility.focus}</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Equipment & Capabilities
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {facility.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-4 w-4 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery List */}
      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Equipment
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Precision Machinery Park
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {machinery.map((item) => (
              <Card key={item.name} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-sky-700">{item.count}</span>
                    <span className="text-sm text-slate-500">units</span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.brand}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Quality Process
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              End-to-End Quality Control
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Raw Material', desc: 'Grade-verified steel from certified suppliers' },
              { step: '02', title: 'Machining', desc: 'CNC precision with ±0.01mm tolerance' },
              { step: '03', title: 'Assembly', desc: 'Skilled technicians assemble with OEM seals' },
              { step: '04', title: 'Testing', desc: '1.5x pressure testing before dispatch' },
            ].map((step) => (
              <Card key={step.step} className="relative border-t-4 border-t-orange-500">
                <CardContent className="p-6">
                  <span className="absolute -top-4 left-6 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="mt-4 mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quality Images */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: '/images/infra/quality1.jpg', alt: 'Quality Control 1' },
              { src: '/images/infra/quality2.jpg', alt: 'Quality Control 2' },
              { src: '/images/infra/quality3.jpg', alt: 'Quality Control 3' },
              { src: '/images/infra/lathe.jpg', alt: 'CNC Machining' },
            ].map((img) => (
              <div key={img.alt} className="relative h-48 overflow-hidden rounded-lg bg-slate-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-400">
              Capacity
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Monthly Production Capacity
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productionCapacity.map((item) => (
              <Card key={item.product} className="border-slate-700 bg-slate-800/50 text-center">
                <CardContent className="p-6">
                  <p className="mb-2 text-sm text-slate-400">{item.product}</p>
                  <p className="mb-1 text-4xl font-bold text-orange-400">{item.capacity}</p>
                  <p className="text-sm text-slate-500">per {item.per}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Certifications & Standards
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Industry Certifications
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                    <Award className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{cert.name}</h3>
                  <p className="mb-2 text-sm text-slate-600">{cert.desc}</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <span>{cert.org}</span>
                    <span>·</span>
                    <span>Valid till {cert.valid}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Gallery
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Facility Gallery
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/images/infra/shopfloor1.jpg', alt: 'Production Floor' },
              { src: '/images/infra/shopfloor2.jpg', alt: 'Assembly Area' },
              { src: '/images/infra/lathe.jpg', alt: 'CNC Lathe' },
              { src: '/images/infra/mill.jpg', alt: 'CNC Mill' },
              { src: '/images/infra/paint.jpg', alt: 'Painting Section' },
              { src: '/images/infra/testing1.jpg', alt: 'Testing Station' },
            ].map((img) => (
              <div
                key={img.alt}
                className="group relative aspect-video overflow-hidden rounded-lg bg-slate-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-white font-semibold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Visit Our Facility
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              We welcome clients and partners to visit our manufacturing facility.
              Schedule a tour to see our capabilities firsthand.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-sky-700 hover:bg-sky-800" asChild>
                <Link href="/contact">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Schedule a Visit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300" asChild>
                <Link href="/contact">Virtual Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-t py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Facility Location</h3>
              <div className="space-y-3">
                <p className="text-slate-600">
                  Plot No. B-32 Sector 85, Phase - II,<br />
                  Greater Noida Industrial Area,<br />
                  Gautam Buddha Nagar,<br />
                  Uttar Pradesh - 201305, India
                </p>
                <p className="text-slate-600">
                  <span className="font-semibold">Phone:</span> +91 98765 43210
                </p>
                <p className="text-slate-600">
                  <span className="font-semibold">Email:</span> factory@merchanthydraulic.com
                </p>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl bg-slate-100 lg:h-auto">
              {/* Map placeholder - integrate Google Maps or similar */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                <div className="text-center">
                  <Factory className="mx-auto mb-2 h-12 w-12 text-slate-400" />
                  <p className="text-slate-500">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
