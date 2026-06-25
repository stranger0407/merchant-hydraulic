"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";

export function ProductsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6"
          >
            Our Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            Premium Hydraulic Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Explore our comprehensive range of hydraulic power packs and cylinders,
            engineered for performance and built to last.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {products.slice(0, 9).map((product, index) => (
             <motion.div
               key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                   {/* Product Image Placeholder */}
                   <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                     <div className="relative z-10 text-6xl">⚙️</div>
                     <div className="absolute top-4 right-4">
                       <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                         {product.category.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Specifications */}
                    <div className="flex flex-wrap gap-2 mb-4">
                       {product.keySpecs.slice(0, 3).map((spec) => (
                         <span
                           key={spec.label}
                           className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                         >
                           {spec.value}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center text-sky-600 font-medium group-hover:text-sky-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-sky-700 hover:bg-sky-800 text-white px-8"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
