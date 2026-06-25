"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { productCategories } from "@/lib/data/productCategories";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Custom Solutions", href: "/custom-solutions" },
  { name: "Industries Served", href: "/industries" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Contact Us", href: "/contact" },
];

const supportLinks = [
  { name: "Request Quote", href: "/contact" },
  { name: "Technical Support", href: "/contact" },
  { name: "Service Centers", href: "/contact" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const socialLinks = [
  { name: "Website", icon: Globe, href: "#" },
  { name: "Website 2", icon: Globe, href: "#" },
  { name: "Website 3", icon: Globe, href: "#" },
  { name: "Website 4", icon: Globe, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-slate-400">
                Get the latest updates on hydraulic technologies and product innovations
              </p>
            </div>
            <form className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-80 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Merchant Hydraulic</h2>
                <p className="text-sm text-slate-500">Hydraulic Power Solutions</p>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading manufacturer of hydraulic power packs, cylinders, and custom
              hydraulic solutions. Serving industries across India and 15+ countries
              since 1998.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919825840840"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-500 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 98258 40840</span>
              </a>
              <a
                href="mailto:info@merchanthydraulic.com"
                className="flex items-center gap-3 text-slate-400 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@merchanthydraulic.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  Plot No. 8-B, Classic Industrial Estate,
                  <br />
                  Vatva GIDC, Ahmedabad - 382 445, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="h-5 w-5" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
               {productCategories.slice(0, 8).map((category) => (
                 <li key={category.slug}>
                   <Link
                     href={`/products/${category.slug}`}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-orange-500 hover:text-orange-400 text-sm font-medium"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">ISO 9001:2015</div>
              <div className="text-sm text-slate-500">Quality Certified</div>
            </div>
            <div className="h-12 w-px bg-slate-700 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">MSME</div>
              <div className="text-sm text-slate-500">Registered</div>
            </div>
            <div className="h-12 w-px bg-slate-700 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Make in India</div>
              <div className="text-sm text-slate-500">Proudly Indian</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2024 Merchant Hydraulic. All rights reserved.</p>
            <p className="text-center">
              Designed and manufactured in India with pride
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-slate-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-400 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
