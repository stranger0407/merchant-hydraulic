"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Cog, Wrench, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Cog,
    title: "Custom Power Pack Design",
    description:
      "Tailor-made hydraulic power packs designed to meet your specific application requirements.",
    features: [
      "Custom tank capacities",
      "Specific pressure ratings",
      "Motor specifications",
      "Special mounting options",
    ],
  },
  {
    icon: Wrench,
    title: "Cylinder Modification",
    description:
      "Custom hydraulic cylinders with modified stroke lengths, mounting styles, and specifications.",
    features: [
      "Extended stroke options",
      "Special mounting brackets",
      "Custom bore sizes",
      "Rod end modifications",
    ],
  },
  {
    icon: Settings,
    title: "System Integration",
    description:
      "Complete hydraulic system integration services for seamless implementation.",
    features: [
      "On-site installation",
      "System commissioning",
      "Performance testing",
      "Training support",
    ],
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6"
            >
              Custom Solutions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              Need a Custom Hydraulic{" "}
              <span className="text-orange-500">Solution?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 mb-8"
            >
              We specialize in designing and manufacturing custom hydraulic solutions
              tailored to your exact specifications. Our engineering team works
              closely with you to deliver the perfect solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {[
                "Free consultation and design review",
                "3D modeling and prototyping",
                "Quick turnaround on quotes",
                "Full technical documentation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Link href="/custom-solutions">
                  Request Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Engineering Team</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Solutions Cards */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                    <solution.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {solution.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs text-slate-500"
                        >
                          <div className="w-1 h-1 bg-sky-400 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
