"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Shield, Award } from "lucide-react";

// Local data for infrastructure section
const factoryCapabilities = {
  buildArea: "65,000 sq ft",
  powerCapacity: "100+ kW",
  cnnAccuracy: "±0.01mm",
  productionCells: "12 Cells"
};

const qualityLabDetails = {
  description: "Our state-of-the-art quality testing laboratory is equipped with advanced testing equipment to ensure every product meets stringent quality standards.",
  annualCapacity: "60,000+ units tested annually",
  testingCapabilities: [
    { test: "Pressure Testing", equipment: "Digital Pressures Gauges" },
    { test: "Leak Testing", equipment: "Helium Leak Detectors" },
    { test: "Dimensional QC", equipment: "CMM Machines" },
    { test: "Hardness Testing", equipment: "Rockwell Hardness Testers" }
  ]
};

export function InfrastructureSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6"
          >
            Our Infrastructure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            World-Class Manufacturing Facility
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-slate-900" />
              <div className="relative z-10 text-center p-8">
                <Factory className="w-24 h-24 mx-auto text-sky-500 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  Modern Factory
                </h3>
                <p className="text-slate-400">Ahmedabad, Gujarat</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-sky-500/30 rounded-tl-3xl" />
              <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-orange-500/30 rounded-br-3xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900">Factory Capabilities</h3>
            <p className="text-slate-600">
              State-of-the-art manufacturing facility equipped with advanced machinery
              and operated by skilled technicians.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Factory, label: "Build Area", value: factoryCapabilities.buildArea },
                { icon: Shield, label: "Power", value: factoryCapabilities.powerCapacity },
                { icon: Award, label: "Accuracy", value: factoryCapabilities.cnnAccuracy },
                { icon: Award, label: "Cells", value: factoryCapabilities.productionCells },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{item.label}</div>
                      <div className="font-semibold text-slate-900">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="bg-sky-700 hover:bg-sky-800">
              <Link href="/infrastructure">
                View Full Facility
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Quality Lab */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">
                Quality Testing Laboratory
              </h3>
              <p className="text-slate-300 mb-6">
                {qualityLabDetails.description}
              </p>
              <p className="text-slate-300 text-sm">
                <span className="text-sky-400 font-semibold">Annual Capacity:</span>{" "}
                {qualityLabDetails.annualCapacity}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {qualityLabDetails.testingCapabilities.map((cap, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                >
                  <div className="text-orange-400 text-sm mb-1">{cap.test}</div>
                  <div className="text-white font-semibold">{cap.equipment}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
