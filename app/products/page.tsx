import { Metadata } from 'next';
import { productCategories } from '@/lib/data/productCategories';
import { products } from '@/lib/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Search,
  ArrowRight,
  Droplets,
  Filter,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products - Merchant Hydraulic',
  description: 'Explore our comprehensive range of hydraulic cylinders, power packs, valves, and custom solutions. Premium quality hydraulic products for all industrial applications.',
  keywords: 'hydraulic products, hydraulic cylinders, power packs, hydraulic valves, hydraulic pumps, industrial hydraulics',
};

export default function ProductsPage() {
  const featuredProducts = products.slice(0, 6);

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
              Our Catalog
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Premium Hydraulic Solutions
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sky-100/90">
              Discover our comprehensive range of industrial-grade hydraulic products engineered for
              reliability, performance, and longevity in the most demanding environments.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="border-slate-600 bg-slate-800/50 pl-10 text-white placeholder:text-slate-400 focus-visible:ring-orange-500"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Browse by Category
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Product Categories
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {productCategories.map((category) => (
               <Card
                 key={category.slug}
                className="group cursor-pointer overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                 <div className="absolute bottom-0 left-0 right-0 p-4">
                     <h3 className="text-lg font-bold text-white">{category.name}</h3>
                     <p className="text-sm text-sky-200">{category.shortDescription}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                   <p className="mb-4 line-clamp-2 text-sm text-slate-600">
                     {category.shortDescription}
                  </p>
                  <Link
                    href={`/products/category/${category.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-orange-600"
                  >
                    View All Products
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
                Popular Items
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Featured Products
              </h2>
            </div>
            <Button variant="outline" className="border-sky-700 text-sky-700 hover:bg-sky-50" asChild>
              <Link href="/products/all">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {featuredProducts.map((product) => (
               <Card
                 key={product.slug}
                className="group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                   <Image
                     src={product.gallery[0]}
                     alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.featured && (
                    <Badge className="absolute left-3 top-3 bg-orange-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="flex flex-1 flex-col p-5">
                  <div className="mb-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-orange-600">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-sky-700">
                    {product.name}
                  </h3>
                  <p className="mb-4 line-clamp-2 flex-1 text-sm text-slate-600">
                    {product.shortDescription}
                  </p>
                   <div className="mb-4 flex flex-wrap gap-2">
                     {product.keySpecs.slice(0, 3).map((spec) => (
                       <Badge key={spec.label} variant="secondary" className="text-xs">
                        {spec.value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-slate-50/50 p-4">
                  <Button className="w-full bg-sky-700 hover:bg-sky-800" asChild>
                    <Link href={`/products/${product.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Advantage
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Choose Merchant Hydraulic
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Check,
                title: 'Industry Certified',
                description: 'ISO 9001:2015 certified manufacturing with CE and RDSO approvals.',
              },
              {
                icon: Droplets,
                title: 'Leak-Free Guarantee',
                description: 'All products tested to 1.5x working pressure before dispatch.',
              },
              {
                icon: Filter,
                title: 'Custom Solutions',
                description: 'Tailor-made hydraulic systems to meet your exact specifications.',
              },
              {
                icon: Check,
                title: 'Pan India Support',
                description: 'Service centers and authorized dealers across major cities.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                  <item.icon className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="bg-gradient-to-br from-sky-900 to-slate-900 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Need a Custom Hydraulic Solution?
            </h2>
            <p className="mb-8 text-lg text-sky-100/90">
              Our engineering team specializes in designing and manufacturing custom hydraulic systems
              tailored to your unique requirements. Share your specifications and well create the perfect solution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
                asChild
              >
                <Link href="/custom-solutions">
                  Explore Custom Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-400 text-white hover:bg-sky-800"
                asChild
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
