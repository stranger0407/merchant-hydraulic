"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/data/productCategories";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
  },
  { name: "Custom Solutions", href: "/custom-solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="tel:+919825840840"
              className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 98258 40840</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919825840840"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-sky-700 to-slate-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-lg lg:text-xl">M</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                  Merchant Hydraulic
                </h1>
                <p className="text-[10px] lg:text-xs text-slate-500">Since 1998</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors flex items-center gap-1 rounded-md hover:bg-slate-50"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Products Dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
                      >
                        <div className="p-2">
                          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">
                            Product Categories
                          </div>
                           {productCategories.slice(0, 8).map((category) => (
                             <Link
                               key={category.slug}
                               href={`/products/${category.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors"
                            >
                              <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-lg">
                                {category.name.charAt(0)}
                              </span>
                              <span className="font-medium">{category.name}</span>
                            </Link>
                          ))}
                          <Link
                            href="/products"
                            className="block text-center text-sm text-orange-600 hover:text-orange-700 font-medium py-2 mt-1 border-t border-slate-100"
                          >
                            View All Categories →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="border-sky-700 text-sky-700 hover:bg-sky-50"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <a href="tel:+919825840840">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-200 bg-white"
            >
              <nav className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(
                              activeDropdown === link.name ? null : link.name
                            );
                          }}
                        />
                      )}
                    </Link>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1"
                      >
                         {productCategories.map((category) => (
                           <Link
                             key={category.slug}
                             href={`/products/${category.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-sky-700 hover:bg-slate-50 rounded-lg transition-colors"
                          >
                            <span className="w-6 h-6 bg-slate-100 rounded-lg flex items-center justify-center text-sm">
                              {category.name.charAt(0)}
                            </span>
                            <span>{category.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2 border-t border-slate-200 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-sky-700 text-sky-700"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Request Quote
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <a href="tel:+919825840840">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
