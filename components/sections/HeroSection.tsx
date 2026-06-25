"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Play, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper function to calculate position with consistent rounding
function getPosition(angle: number) {
  const radians = (angle * Math.PI) / 180;
  const sin = Math.sin(radians);
  const cos = Math.cos(radians);
  // Round to 3 decimal places for consistent SSR/Client matching
  return {
    top: `calc(50% + ${Math.round(sin * 200 * 1000) / 1000}px - 40px)`,
    left: `calc(50% + ${Math.round(cos * 200 * 1000) / 1000}px - 40px)`,
  };
}

export function HeroSection() {
  const products = [
    { icon: "⚙️", label: "Power Packs", angle: 0 },
    { icon: "🔧", label: "Cylinders", angle: 72 },
    { icon: "🔩", label: "Valves", angle: 144 },
    { icon: "⚡", label: "Pumps", angle: 216 },
    { icon: "🔨", label: "Presses", angle: 288 },
  ];

  // Pre-calculate positions with consistent rounding to avoid hydration mismatch
  const productsWithPositions = products.map((item) => ({
    ...item,
    position: getPosition(item.angle),
  }));

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent z-10" />
        {/* Placeholder for hero image - will be replaced with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sky-400 text-sm font-medium">
                ISO 9001:2015 Certified Manufacturer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hydraulic Power Solutions{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Built to Last
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl">
                Manufacturing world-class hydraulic power packs, cylinders, and custom
                solutions for industrial excellence since 1998.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-white/10 px-8"
              >
                <a href="tel:+919825840840">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Shield, text: "25+ Years Experience" },
                { icon: Award, text: "Quality Assured" },
                { icon: Users, text: "500+ Happy Clients" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-slate-400">
                  <item.icon className="h-5 w-5 text-sky-400" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="relative w-[500px] h-[500px] mx-auto">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-slate-700/50 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-4 border border-sky-500/20 rounded-full" />
                <div className="absolute inset-8 border border-dashed border-slate-600/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

                {/* Center Product Image Placeholder */}
                <div className="absolute inset-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-full flex items-center justify-center shadow-2xl shadow-sky-900/20 border border-slate-700">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">⚙️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Hydraulic</h3>
                    <p className="text-orange-400 font-semibold">Power Pack</p>
                  </div>
                </div>

                {/* Floating Elements */}
                {productsWithPositions.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="absolute"
                    style={{
                      top: item.position.top,
                      left: item.position.left,
                    }}
                  >
                    <div className="w-20 h-20 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-700 shadow-lg hover:border-sky-500/50 transition-colors cursor-pointer group">
                      <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-[10px] text-slate-400 group-hover:text-sky-400">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
