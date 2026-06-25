"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  ChevronRight,
  Building2,
  User as UserIcon,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { productCategories } from "@/lib/data/productCategories";

// Generate a unique ID that's stable during a session
let idCounter = 0;
const generateId = () => `msg_${Date.now()}_${idCounter++}`;

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
  options?: { label: string; value: string }[];
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}

const steps = [
  { key: "greeting", question: "Hello! Welcome to Merchant Hydraulic. I'm here to help you with your hydraulic needs. What brings you here today?" },
  { key: "name", question: "Great! I'd be happy to help with that. May I have your name?" },
  { key: "company", question: "Thank you! Which company do you represent?" },
  { key: "contact", question: "How can we reach you? Please share your phone number or email." },
  { key: "product", question: "Which product are you interested in?" },
  { key: "details", question: "Could you tell us more about your requirements? For example, specifications, quantity, or application?" },
  { key: "end", question: "Thank you for sharing! Our team will review your inquiry and get back to you within 24 hours. Is there anything else you'd like to ask?" },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hello! Welcome to Merchant Hydraulic. I'm here to help you with your hydraulic needs. What brings you here today?",
      options: [
        { label: "Get a Quote", value: "quote" },
        { label: "Product Inquiry", value: "product" },
        { label: "Technical Support", value: "support" },
        { label: "General Question", value: "general" },
      ],
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });
  const [inputValue, setInputValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (value: string, label: string) => {
    const userMessage: Message = {
      id: generateId(),
      type: "user",
      text: label,
    };

    let botResponse: Message;

    switch (currentStep) {
      case 0: // Initial greeting
        setFormData((prev) => ({ ...prev, productInterest: value }));
        botResponse = {
          id: generateId(),
          type: "bot",
          text: "May I have your name, please?",
        };
        setCurrentStep(1);
        break;
      case 2: // Product selection
        setFormData((prev) => ({ ...prev, productInterest: value }));
        setShowForm(true);
        botResponse = {
          id: generateId(),
          type: "bot",
          text: "Perfect! Please fill in your details below and our team will get back to you within 24 hours.",
        };
        setCurrentStep(3);
        break;
      default:
        botResponse = {
          id: generateId(),
          type: "bot",
          text: "Thank you! Our team will get back to you soon.",
        };
    }

    setMessages((prev) => [...prev, userMessage, botResponse]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: generateId(),
      type: "user",
      text: inputValue,
    };

    setFormData((prev) => {
      const updates: Partial<FormData> = {};
      if (currentStep === 1) updates.name = inputValue;
      else if (currentStep === 2) updates.company = inputValue;
      else if (currentStep === 3) updates.email = inputValue;
      else if (currentStep === 4) updates.phone = inputValue;
      else if (currentStep === 5) updates.message = inputValue;
      return { ...prev, ...updates };
    });

    let botText = "";
    let newStep = currentStep + 1;

    switch (currentStep) {
      case 1:
        botText = `Nice to meet you, ${inputValue}! Which company do you represent?`;
        break;
      case 2:
        botText = "What is your email address?";
        break;
      case 3:
        botText = "What is your phone number?";
        break;
      case 4:
        botText = "Which product category are you interested in?";
        break;
      case 5:
        botText = "Could you tell us more about your requirements or specifications needed?";
        break;
      case 6:
        botText = "Thank you! Your inquiry has been recorded. We will contact you shortly.";
        newStep = 6;
        break;
      default:
        botText = "Thank you for your message. Our team will assist you shortly.";
    }

    const botMessage: Message = {
      id: generateId(),
      type: "bot",
      text: botText,
    };

    if (currentStep === 4) {
      botMessage.options = productCategories.slice(0, 6).map((cat) => ({
        label: cat.name,
        value: cat.slug,
      }));
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setCurrentStep(newStep);
    setInputValue("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitMessage: Message = {
      id: generateId(),
      type: "bot",
      text: "Thank you for your inquiry! Our team will contact you within 24 hours. You can also reach us directly at +91 98258 40840.",
      options: [
        { label: "Send Another Inquiry", value: "restart" },
        { label: "Close Chat", value: "close" },
      ],
    };
    setMessages((prev) => [...prev, submitMessage]);
    setShowForm(false);
    setCurrentStep(6);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all ${
          isOpen
            ? "bg-slate-700 hover:bg-slate-600"
            : "bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600"
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)]"
          >
            <Card className="overflow-hidden shadow-2xl border-slate-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-sky-700 to-slate-800 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">Hydraulic Assistant</h3>
                  <p className="text-xs text-sky-200">Online - Response in 24h</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="h-[320px] overflow-y-auto p-4 space-y-4 bg-slate-50"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                        message.type === "user"
                          ? "bg-sky-600"
                          : "bg-gradient-to-br from-sky-600 to-slate-700"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        message.type === "user"
                          ? "bg-sky-600 text-white"
                          : "bg-white text-slate-700 shadow-sm border border-slate-200"
                      }`}
                    >
                      {message.text}
                      {message.options && !showForm && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handleOptionClick(option.value, option.label)}
                              className="w-full text-left px-3 py-2 text-xs font-medium bg-slate-100 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors flex items-center justify-between group"
                            >
                              {option.label}
                              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Form */}
                {showForm && (
                  <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleFormSubmit}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mt-4"
                  >
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">
                      Quick Inquiry Form
                    </h4>
                    <div className="space-y-3">
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          placeholder="Your Name *"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="pl-10 h-10 text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, company: e.target.value }))
                          }
                          className="pl-10 h-10 text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            type="email"
                            placeholder="Email *"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, email: e.target.value }))
                            }
                            className="pl-10 h-10 text-sm"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            type="tel"
                            placeholder="Phone *"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            className="pl-10 h-10 text-sm"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, message: e.target.value }))
                          }
                          className="pl-10 min-h-[80px] text-sm"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700"
                      >
                        Submit Inquiry
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </div>

              {/* Input */}
              {!showForm && (
                <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 h-10 text-sm"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    className="h-10 w-10 bg-sky-600 hover:bg-sky-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Footer */}
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-center">
                <p className="text-[10px] text-slate-400">
                  Powered by Merchant Hydraulic | Need urgent help?{" "}
                  <a href="tel:+919825840840" className="text-sky-600 hover:underline">
                    Call us
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
