'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/data/products';
import { productCategories } from '@/lib/data/productCategories';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  ArrowLeft,
  Check,
  Download,
  Mail,
  Phone,
  Share2,
  Star,
  Package,
  Wrench,
  Shield,
  Award,
  Ruler,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Since we're using 'use client', we'll generate metadata differently
// For server components, you'd use generateMetadata

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

   // Find product by slug
   const product = products.find((p) => p.slug === slug);
   const category = productCategories.find((c) => c.slug === product?.categorySlug);

   // Fallback if product not found
   if (!product) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-slate-900">Product Not Found</h1>
            <p className="mb-8 text-slate-600">The product you are looking for does not exist.</p>
            <Link href="/products">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Get related products
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-slate-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-sky-700">Products</Link>
            <span>/</span>
            {category && (
              <>
                <Link href={`/products/category/${category.slug}`} className="hover:text-sky-700">
                  {category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-slate-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center text-sm text-slate-600 hover:text-sky-700"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={product.gallery[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === idx
                          ? 'border-orange-500'
                          : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Badge className="bg-sky-100 text-sky-800">{product.category}</Badge>
                  {product.featured && <Badge className="bg-orange-100 text-orange-800">Featured</Badge>}
                </div>
                <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">{product.name}</h1>
                <p className="text-lg leading-relaxed text-slate-600">{product.shortDescription}</p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 sm:grid-cols-3">
                {product.keySpecs.slice(0, 6).map((spec) => (
                  <div key={spec.label} className="text-center">
                    <p className="text-xs text-slate-500">{spec.label}</p>
                    <p className="font-semibold text-slate-900">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <Badge key={app} variant="outline" className="text-slate-600">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Request Quote
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-sky-600 text-sky-700 hover:bg-sky-50"
                  asChild
                >
                  <Link href="tel:+919876543210">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tabs */}
      <section className="border-t bg-slate-50 py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 sm:w-fit sm:grid-cols-4">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>

            {/* Specifications Tab */}
            <TabsContent value="specs">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-bold text-slate-900">Technical Specifications</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {product.keySpecs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between border-b border-slate-200 pb-3"
                      >
                        <span className="text-slate-600">{spec.label}</span>
                        <span className="font-semibold text-slate-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-bold text-slate-900">Features & Benefits</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-100">
                          <Check className="h-4 w-4 text-sky-700" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-bold text-slate-900">Recommended Applications</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {product.applications.map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-3 rounded-lg border border-slate-200 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                          <Wrench className="h-5 w-5 text-orange-600" />
                        </div>
                        <span className="font-medium text-slate-900">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="downloads">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-bold text-slate-900">Documentation</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Technical Datasheet', size: 'PDF, 2.4 MB' },
                      { name: 'Installation Manual', size: 'PDF, 1.8 MB' },
                      { name: 'CAD Drawings', size: 'ZIP, 5.2 MB' },
                      { name: 'Maintenance Guide', size: 'PDF, 1.2 MB' },
                    ].map((doc) => (
                      <div
                        key={doc.name}
                        className="flex items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                            <Download className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{doc.name}</p>
                            <p className="text-sm text-slate-500">{doc.size}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-sky-100">
              <CardContent className="p-6 sm:p-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">Request a Quote</h3>
                <p className="mb-6 text-slate-600">
                  Get a personalized quote for {product.name}. We will respond within 24 hours.
                </p>
                <form className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="you@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="quantity">Quantity Required</Label>
                    <Input
                      id="quantity"
                      type="number"
                      defaultValue={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Describe any custom requirements, specifications, or questions..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button size="lg" className="w-full bg-sky-700 hover:bg-sky-800">
                      Submit Quote Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t bg-slate-50 py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Related Products</h2>
              <Link
                href="/products"
                className="text-sky-700 hover:text-sky-800"
              >
                View All
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <Card key={p.slug} className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={p.gallery[0]}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-5">
                    <span className="text-xs font-medium uppercase tracking-wide text-orange-600">
                      {p.category}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-sky-700">
                      {p.name}
                    </h3>
                    <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
                      <Link href={`/products/${p.slug}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
