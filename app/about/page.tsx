import { Metadata } from 'next';
import { companyProfile } from '@/lib/data/companyProfile';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Award,
  Target,
  Eye,
  Users,
  Factory,
  Globe,
  ClipboardCheck,
  Clock,
  HeartHandshake,
  TrendingUp,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `About Us - ${companyProfile.name}`,
  description: `Learn about ${companyProfile.name} - ${companyProfile.description}. ${companyProfile.yearsInBusiness}+ years of hydraulic excellence serving Indian industries.`,
  keywords: 'about merchant hydraulic, hydraulic company india, hydraulic manufacturer, company profile, our story',
};

const values = [
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description: 'We prioritize understanding and fulfilling our customers unique hydraulic needs with personalized solutions.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Unwavering commitment to delivering products that exceed industry standards and customer expectations.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'Constantly evolving our technology and processes to bring cutting-edge hydraulic solutions.',
  },
  {
    icon: Shield,
    title: 'Integrity & Trust',
    description: 'Building long-term relationships through honesty, transparency, and reliable partnerships.',
  },
];

const milestones = [
  { year: '1998', title: 'Company Founded', description: 'Started as a small hydraulic repair shop in Hyderabad' },
  { year: '2003', title: 'Manufacturing Unit', description: 'Established first manufacturing facility with 5,000 sq ft' },
  { year: '2008', title: 'ISO Certification', description: 'Achieved ISO 9001:2008 certification for quality management' },
  { year: '2012', title: 'Pan India Presence', description: 'Expanded distribution network across all major Indian cities' },
  { year: '2016', title: 'Export Division', description: 'Started exporting to Middle East and Southeast Asian markets' },
  { year: '2020', title: 'Technology Upgrade', description: 'Implemented Industry 4.0 practices and advanced CNC machinery' },
  { year: '2024', title: 'Market Leader', description: 'Recognized as one of Indias top hydraulic solution providers' },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', icon: ClipboardCheck },
  { name: 'CE Certified', description: 'European Conformity', icon: Shield },
  { name: 'RDSO Approved', description: 'Railway Standards', icon: Target },
  { name: 'MSME Registered', description: 'Government Recognition', icon: Award },
];

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Building Trust Since {companyProfile.establishedYear}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sky-100/90">
              From a small workshop to a leading hydraulic solutions provider, our journey has been defined by
              innovation, quality, and unwavering commitment to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b bg-slate-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: `${companyProfile.yearsInBusiness}+`, label: 'Years Experience' },
              { value: '500+', label: 'Happy Clients' },
              { value: '50,000+', label: 'Products Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-bold text-sky-800 md:text-3xl">{stat.value}</span>
                <span className="text-sm text-slate-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
                Who We Are
              </span>
              <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Indias Trusted Hydraulic Solutions Partner
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                {companyProfile.name} has established itself as a premier manufacturer and supplier of hydraulic
                solutions in India. With state-of-the-art manufacturing facilities and a team of skilled engineers,
                we deliver products that power critical operations across diverse industries.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice
                for businesses seeking reliable hydraulic components and systems. We dont just sell products;
                we build lasting partnerships.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild className="border-sky-700 text-sky-700 hover:bg-sky-50">
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 overflow-hidden rounded-lg bg-slate-200 lg:h-64">
                  <Image
                    src="/images/infra/lathe.jpg"
                    alt="CNC Manufacturing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg bg-slate-200 lg:h-64 lg:mt-8">
                  <Image
                    src="/images/infra/quality3.jpg"
                    alt="Quality Testing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg bg-slate-200 lg:h-64">
                  <Image
                    src="/images/about-team.jpg"
                    alt="Our Engineering Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg bg-slate-200 lg:h-64 lg:mt-8">
                  <Image
                    src="/images/infra/paint.jpg"
                    alt="Surface Treatment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Tabs */}
      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="vision" className="w-full">
              <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="mission">Mission</TabsTrigger>
                <TabsTrigger value="values">Values</TabsTrigger>
              </TabsList>

              <TabsContent value="vision" className="mt-0">
                <Card className="border-0 bg-gradient-to-br from-sky-900 to-sky-800 text-white">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 rounded-full bg-white/10 p-4">
                        <Eye className="h-10 w-10 text-orange-400" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                      <p className="text-lg leading-relaxed text-sky-100/90">
                        To be the most trusted and innovative hydraulic solutions provider in India and emerging
                        markets, recognized for our engineering excellence, sustainable practices, and the ability
                        to empower industries with cutting-edge hydraulic technology.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mission" className="mt-0">
                <Card className="border-0 bg-gradient-to-br from-sky-900 to-sky-800 text-white">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 rounded-full bg-white/10 p-4">
                        <Target className="h-10 w-10 text-orange-400" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                      <p className="text-lg leading-relaxed text-sky-100/90">
                        To deliver superior hydraulic solutions that enhance our clients productivity, safety, and
                        competitiveness through continuous innovation, uncompromising quality, and exceptional
                        customer service while fostering sustainable growth for all stakeholders.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="values" className="mt-0">
                <Card className="border-0 bg-gradient-to-br from-sky-900 to-sky-800 text-white">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 rounded-full bg-white/10 p-4">
                        <Users className="h-10 w-10 text-orange-400" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold">Our Core Values</h3>
                      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {values.slice(0, 4).map((v) => (
                          <div key={v.title} className="flex items-start gap-3 text-left">
                            <v.icon className="mt-1 flex-shrink-0 h-5 w-5 text-orange-400" />
                            <div>
                              <p className="font-semibold">{v.title}</p>
                              <p className="text-sm text-sky-100/80">{v.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Milestones That Define Us</h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-sky-200 lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                >
                  {/* Desktop year badge - centered */}
                  <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">
                    <div className="rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:text-right ${index % 2 === 0 ? '' : 'lg:order-2 lg:text-left'}`}>
                    <div className="relative rounded-lg bg-white p-6 shadow-md">
                      {/* Mobile year */}
                      <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-600 lg:hidden">
                        {milestone.year}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-slate-900">{milestone.title}</h3>
                      <p className="text-slate-600">{milestone.description}</p>
                      {/* Arrow pointer (desktop) */}
                      <div className={`absolute top-6 hidden h-4 w-4 rotate-45 bg-white lg:block ${
                        index % 2 === 0 ? '-right-2' : '-left-2'
                      }`} />
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className={index % 2 === 0 ? 'lg:order-2' : ''} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-100 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Leadership That Inspires</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Meet the visionaries who guide our company towards excellence and innovation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Mr. Rajesh Merchant',
                role: 'Founder & Managing Director',
                image: '/images/team/placeholder.svg',
                description: 'With over 30 years of experience in hydraulics, Mr. Merchant founded the company with a vision to provide world-class solutions to Indian industries.',
              },
              {
                name: 'Mr. Amit Merchant',
                role: 'Director - Operations',
                image: '/images/team/placeholder.svg',
                description: 'Amit oversees manufacturing operations, ensuring quality standards are maintained while driving operational efficiency.',
              },
              {
                name: 'Dr. Priya Sharma',
                role: 'Head of Engineering',
                image: '/images/team/placeholder.svg',
                description: 'With a Ph.D. in Mechanical Engineering, Dr. Sharma leads our R&D initiatives and product development.',
              },
            ].map((leader) => (
              <Card key={leader.name} className="overflow-hidden">
                <div className="relative h-64 bg-slate-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{leader.name}</h3>
                    <p className="text-sm text-orange-400">{leader.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-400">
              Certifications
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Standards We Uphold</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-slate-700 bg-slate-800/50 text-white">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-orange-500/20 p-4">
                    <cert.icon className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{cert.name}</h3>
                  <p className="text-slate-400">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-center sm:p-12 lg:p-16">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Want to Know More About Us?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-100">
              Download our company brochure or get in touch with our team to discuss how we can help
              with your hydraulic needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                Download Brochure
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
