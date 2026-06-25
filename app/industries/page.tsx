import { Metadata } from 'next';
import { industries } from '@/lib/data/industries';
import { products } from '@/lib/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Building2,
  Factory,
  Ship,
  Train,
  Tractor,
  Truck,
  Construction,
  Cog,
  Zap,
  Check,
  Droplets,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries Served - Merchant Hydraulic',
  description: 'Hydraulic solutions for construction, mining, agriculture, railways, marine, manufacturing and more. Industry-specific products for every application.',
  keywords: 'hydraulic industries, construction hydraulics, mining hydraulics, agricultural hydraulics, railway hydraulics',
};

const industryIcons: { [key: string]: typeof Building2 } = {
  construction: Construction,
  mining: Cog,
  agriculture: Tractor,
  railways: Train,
  marine: Ship,
  manufacturing: Factory,
  automotive: Truck,
  energy: Zap,
};

export default function IndustriesPage() {
  // Get featured products for show case
  const featuredProducts = products
    .filter((p) => p.featured === true) 
    .slice(0, 4);

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
              Diverse Applications
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Industries We Serve
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sky-100/90">
              From heavy construction to precision manufacturing, our hydraulic solutions power
              critical operations across India most demanding industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Count */}
      <section className="border-b bg-slate-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: '15+', label: 'Industries Served' },
              { value: '500+', label: 'Active Clients' },
              { value: '10,000+', label: 'Installations' },
              { value: '25+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-bold text-sky-800 md:text-3xl">{stat.value}</span>
                <span className="text-sm text-slate-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Expertise
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Industry-Specific Solutions
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {industries.map((industry) => {
               const Icon = industryIcons[industry.slug] || Building2;
              return (
                  <Card
                  key={industry.slug}
                  className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Background Icon */}
                  <Icon className="absolute -right-4 -top-4 h-32 w-32 text-slate-100 transition-colors group-hover:text-sky-50" />
                  
                  <CardContent className="relative p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-sky-50 transition-colors group-hover:from-sky-200 group-hover:to-sky-100">
                      <Icon className="h-7 w-7 text-sky-700" />
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-sky-700">
                      {industry.name}
                    </h3>
                    <p className="mb-4 text-slate-600">
                      {industry.shortDescription}
                    </p>

                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Key Products Used:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {industry.relevantProducts.map((product) => (
                          <Badge key={product} variant="secondary" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 text-sm">
                      <p className="text-slate-500">
                        <span className="font-semibold text-slate-700">Applications:</span>{" "}
                        {industry.applications.slice(0, 3).join(', ')}
                        {industry.applications.length > 3 && '...'}
                      </p>
                    </div>

                    <Link
                      href={`/industries/${industry.slug}`}
                      className="flex items-center text-sm font-semibold text-sky-700 hover:text-orange-600"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Spotlight */}
      <section className="bg-gradient-to-br from-sky-900 to-slate-900 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 overflow-hidden rounded-lg bg-slate-700 sm:h-48">
                  <Image
                    src="/images/infra/lathe.jpg"
                    alt="Manufacturing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg bg-slate-700 sm:h-48 lg:mt-8">
                  <Image
                    src="/images/infra/assembly.jpg"
                    alt="Assembly"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg bg-slate-700 sm:h-48">
                  <Image
                    src="/images/infra/quality2.jpg"
                    alt="Quality Control"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg bg-slate-700 sm:h-48 lg:mt-8">
                  <Image
                    src="/images/infra/testing1.jpg"
                    alt="Testing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 text-white lg:order-2">
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-400">
                Manufacturing Excellence
              </span>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                Built for Indian Industrial Conditions
              </h2>
              <p className="mb-6 text-lg text-sky-100/90">
                Indian industries face unique challenges - extreme temperatures, dust, heavy loads,
                and continuous operation. Our hydraulic solutions are specifically engineered to
                thrive in these demanding conditions.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" />
                  <span>High-temperature seals rated up to 120°C ambient</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" />
                  <span>Dust-resistant rod and piston seal designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" />
                  <span>High-impact resistance for construction equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" />
                  <span>Corrosion protection for marine and chemical environments</span>
                </li>
              </ul>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">Discuss Your Industry Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Examples */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Real World Applications
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Application Examples
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Hydraulic Excavator',
                industry: 'Construction',
                image: '/images/applications/excavator.jpg',
                specs: 'Boom, Arm, Bucket Cylinders',
                pressure: '350 bar',
              },
              {
                title: 'Hydraulic Press Machine',
                industry: 'Manufacturing',
                image: '/images/applications/press.jpg',
                specs: 'High-load pressing cylinder',
                pressure: '500 bar',
              },
              {
                title: 'Railway Maintenance',
                industry: 'Railways',
                image: '/images/applications/railway.jpg',
                specs: 'Track leveling cylinders',
                pressure: '250 bar',
              },
            ].map((app) => (
              <Card key={app.title} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3">
                    <Badge className="bg-sky-600 text-white">{app.industry}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{app.title}</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-slate-600">
                      <span className="font-medium text-slate-800">Application:</span> {app.specs}
                    </p>
                    <p className="text-slate-600">
                      <span className="font-medium text-slate-800">Pressure:</span> {app.pressure}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Need Industry-Specific Advice?
            </span>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Not Sure Which Solution Fits Your Industry?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              Our industry specialists understand the unique hydraulic challenges of your sector.
              Get expert guidance on the right products and configurations for your application.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-sky-700 hover:bg-sky-800" asChild>
                <Link href="/contact">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sky-700 text-sky-700 hover:bg-sky-50" asChild>
                <Link href="/products">Browse All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
