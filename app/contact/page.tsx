import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
  Check,
  Building2,
  HeadphonesIcon,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Merchant Hydraulic',
  description: 'Get in touch with Merchant Hydraulic for hydraulic solutions, quotes, and support. Sales, service, and corporate contact information.',
  keywords: 'contact merchant hydraulic, hydraulic inquiry, hydraulic quote, hydraulic sales india, hydraulic manufacturer contact',
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Sales & Support',
    details: [
      { label: 'Phone', value: '+91 98765 43210' },
      { label: 'WhatsApp', value: '+91 98765 43210' },
      { label: 'Hours', value: 'Mon-Sat: 9AM - 6PM IST' },
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      { label: 'Sales', value: 'sales@merchanthydraulic.com' },
      { label: 'Support', value: 'support@merchanthydraulic.com' },
      { label: 'Custom', value: 'custom@merchanthydraulic.com' },
    ],
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      { label: 'Head Office', value: 'Plot No. B-32, Sector 85, Phase-II, Greater Noida, UP - 201305' },
    ],
  },
];

const salesOffices = [
  { city: 'Mumbai', phone: '+91 22 1234 5678', address: 'Andheri East, Mumbai - 400069' },
  { city: 'Delhi', phone: '+91 11 2345 6789', address: 'Naraina Industrial Area, New Delhi - 110028' },
  { city: 'Chennai', phone: '+91 44 3456 7890', address: 'Ambattur Industrial Estate, Chennai - 600058' },
  { city: 'Kolkata', phone: '+91 33 4567 8901', address: 'Sector V, Salt Lake, Kolkata - 700091' },
  { city: 'Hyderabad', phone: '+91 40 5678 9012', address: 'Jeedimetla, Hyderabad - 500055' },
  { city: 'Ahmedabad', phone: '+91 79 6789 0123', address: 'Vatva GIDC, Ahmedabad - 382445' },
];

const inquiryTypes = [
  { value: 'sales', label: 'Product Sales Inquiry' },
  { value: 'custom', label: 'Custom Solution Request' },
  { value: 'service', label: 'Service & Support' },
  { value: 'parts', label: 'Spare Parts Request' },
  { value: 'careers', label: 'Careers / HR' },
  { value: 'other', label: 'General Inquiry' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 py-16 lg:py-24">
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
              Get in Touch
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sky-100/90">
              Have questions about our products or need a custom solution? Our team is here to help.
              Reach out and we will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="-mt-8 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((info) => (
              <Card key={info.title} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <info.icon className="h-6 w-6 text-sky-700" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail) => (
                      <div key={detail.label}>
                        {detail.label === 'Hours' ? (
                          <p className="flex items-center gap-2 text-sm text-slate-600">
                            <Clock className="h-4 w-4 text-orange-500" />
                            {detail.value}
                          </p>
                        ) : detail.label === 'Phone' || detail.label === 'WhatsApp' ? (
                          <a
                            href={`tel:${detail.value.replace(/\s/g, '')}`}
                            className="block text-sm font-medium text-slate-900 hover:text-sky-700"
                          >
                            {detail.value}
                          </a>
                        ) : detail.label === 'Sales' || detail.label === 'Support' || detail.label === 'Custom' ? (
                          <a
                            href={`mailto:${detail.value}`}
                            className="block text-sm text-slate-600 hover:text-sky-700"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-600">{detail.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <form className="space-y-6">
                    {/* Inquiry Type */}
                    <div className="space-y-3">
                      <Label>What type of inquiry is this? *</Label>
                      <RadioGroup defaultValue="sales" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {inquiryTypes.map((type) => (
                          <div key={type.value}>
                            <RadioGroupItem
                              value={type.value}
                              id={type.value}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={type.value}
                              className="flex cursor-pointer items-center justify-center rounded-md border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:border-sky-200 hover:bg-slate-50 peer-data-[state=checked]:border-sky-600 peer-data-[state=checked]:bg-sky-50 peer-data-[state=checked]:text-sky-700"
                            >
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Contact Details */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your Company" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Your city" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="Your state" />
                      </div>
                    </div>

                    {/* Product Interest */}
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interest</Label>
                      <Input
                        id="product"
                        placeholder="e.g., Telescopic Hydraulic Cylinder, Custom Power Pack, etc."
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Requirements *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Please describe your requirements in detail..."
                      />
                    </div>

                    {/* Submit */}
                    <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>

                    <p className="text-center text-sm text-slate-500">
                      We typically respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick WhatsApp */}
              <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">WhatsApp Us</h3>
                      <p className="text-sm text-slate-600">Quick response guaranteed</p>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <a
                      href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20hydraulic%20products"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <Clock className="h-5 w-5 text-sky-700" />
                    Office Hours
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monday - Saturday</span>
                      <span className="font-medium text-slate-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-medium text-orange-600">Closed</span>
                    </div>
                    <p className="pt-2 text-xs text-slate-500">
                      Emergency support available 24/7 for existing customers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Call Direct */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <HeadphonesIcon className="h-5 w-5 text-sky-700" />
                    Priority Support
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    For urgent inquiries, call our priority support line for immediate assistance.
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 rounded-lg border-2 border-sky-600 py-3 text-center font-semibold text-sky-600 transition-colors hover:bg-sky-50"
                  >
                    <Phone className="h-5 w-5" />
                    +91 98765 43210
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Offices */}
      <section className="border-t bg-slate-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Regional Offices
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Sales & Service Network
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Our presence across India ensures quick response and local support for all our clients.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {salesOffices.map((office) => (
              <Card key={office.city} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">{office.city}</h3>
                    <Badge variant="outline" className="text-sky-700 border-sky-200">Sales Office</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2 text-slate-600">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                      {office.address}
                    </p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-slate-600 hover:text-sky-700"
                    >
                      <Phone className="h-4 w-4 text-slate-400" />
                      {office.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Visit Our Headquarters</h2>
            <p className="mt-2 text-slate-600">
              Plot No. B-32, Sector 85, Phase-II, Greater Noida, Uttar Pradesh - 201305
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl bg-slate-200">
            {/* Replace with actual Google Maps embed */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-12 w-12 text-slate-400" />
                <p className="text-slate-600">Google Maps Embed</p>
                <p className="text-sm text-slate-500">Plot No. B-32, Sector 85, Greater Noida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-sky-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-sky-100/90">
              Whether you need standard products or custom hydraulic solutions,
              we are here to help power your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
                asChild
              >
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-sky-700"
                asChild
              >
                <Link href="/custom-solutions">Custom Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
