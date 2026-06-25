"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp, Users, Globe, Award, Calendar, Factory, Check } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 25,
    suffix: "+",
    label: "Years of Excellence",
    description: "Since 1998",
  },
  {
    icon: Factory,
    value: 10000,
    suffix: "+",
    label: "Units Manufactured",
    description: "And counting",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Across India",
  },
  {
    icon: Globe,
    value: 15,
    suffix: "+",
    label: "Countries Served",
    description: "Global presence",
  },
  {
    icon: Check,
    value: 200,
    suffix: "+",
    label: "Quality Checks",
    description: "Rigorous testing",
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: "%",
    label: "Satisfaction",
    description: "Customer满意",
  },
];

function AnimatedNumber({ value, suffix }: { value: number | string; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = typeof value === 'string' ? 0 : value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  // Handle string values like percentages
  if (typeof value === 'string') {
    return <span>{value}</span>;
  }

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-sky-50 rounded-xl flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                <stat.icon className="h-7 w-7 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-slate-700">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}