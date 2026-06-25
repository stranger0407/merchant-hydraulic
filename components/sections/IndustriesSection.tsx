"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/data/industries";

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6"
          >
            Industries We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            Trusted Across Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Our hydraulic solutions power critical operations across diverse
            industries, ensuring reliability and performance.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {industries.slice(0, 9).map((industry, index) => (
             <motion.div
               key={industry.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/industries#${industry.slug}`}>
                <div className="group h-full bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                   <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                     {industry.name.charAt(0)}
                   </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                        {industry.name}
                      </h3>
                       <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                         {industry.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                     <div className="text-sm text-slate-500">
                       <span className="text-orange-600 font-semibold">
                         {industry.applications.length}+
                      </span>{" "}
                      applications
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
            variant="outline"
            className="border-sky-700 text-sky-700 hover:bg-sky-50"
          >
            <Link href="/industries">
              View All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
