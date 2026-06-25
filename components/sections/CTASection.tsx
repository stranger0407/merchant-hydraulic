'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight, Clock, Shield, Award } from 'lucide-react';
import Link from 'next/link';

const trustIndicators = [
  { icon: Shield, label: 'ISO 9001:2015 Certified' },
  { icon: Award, label: '25+ Years Excellence' },
  { icon: Clock, label: '24/7 Technical Support' },
];

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="mb-6 inline-block rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
              Start Your Project Today
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Ready to Power Your Business
            <span className="block text-orange-400">With Premium Hydraulics?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-sky-100/90"
          >
            Join over 500+ satisfied industrial partners who trust Merchant Hydraulic for their critical hydraulic needs. 
            Get a personalized quote within 24 hours with our expert engineering consultation included.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-auto bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/40"
              asChild
            >
              <Link href="/contact">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group h-auto border-2 border-sky-400/50 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:border-orange-400 hover:bg-orange-500/10"
              asChild
            >
              <Link href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 border-t border-sky-400/20 pt-8 sm:gap-10"
          >
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sky-200">
                <item.icon className="flex-shrink-0 h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col items-center justify-center gap-2 text-sky-200"
          >
            <p className="text-sm">Or reach us directly at:</p>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-orange-400 transition-colors hover:text-orange-300"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <a
                href="mailto:sales@merchanthydraulic.com"
                className="flex items-center justify-center gap-2 text-orange-400 transition-colors hover:text-orange-300"
              >
                <Mail className="h-4 w-4" />
                <span className="font-medium">sales@merchanthydraulic.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
