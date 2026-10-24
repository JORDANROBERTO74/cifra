"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Zap, Shield, BarChart3, Sparkles } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  uiSrc: string;
  width: string;
  className?: string;
  delay?: number;
  isMounted?: boolean;
}

function FeatureCard({ title, description, icon: Icon, uiSrc, width: _width, className = "", delay = 0, isMounted = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] as const }}
      className={"flex flex-col items-start shrink-0 border border-[#052618]/10 overflow-hidden bg-white group w-full rounded-[24px] sm:rounded-[32px] " + (className || "")}
    >
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden flex items-center justify-center p-6 sm:p-8 bg-[#F9FAFB]">
        {isMounted && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          >
            <source
              src="/media/hero-bg.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img
            src={uiSrc}
            alt={title}
            className="h-full w-full object-contain pointer-events-none select-none transition-all duration-500 group-hover:translate-y-[-10px]"
          />
        </div>
      </div>

      <div className="p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-5 self-stretch bg-white">
        <div className="w-10 h-10 p-2 flex items-center justify-center border border-[#138E5E]/20 bg-[#138E5E]/5 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-[#138E5E] stroke-[3px]" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#052618] font-onest text-xl sm:text-2xl font-semibold leading-tight sm:leading-[30px] tracking-[-0.8px]">
            {title}
          </h3>
          <p className="text-[#052618] font-inter text-base sm:text-lg font-normal leading-relaxed sm:leading-[28px] opacity-80">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const featureIcons = [PieChart, BarChart3, Shield, Zap];
const featureUIs = ["/features/ui-01.svg", "/features/ui-02.svg", "/features/ui-03.svg", "/features/ui-04.svg"];
const featureWidths = ["676px", "548px", "548px", "676px"];

export default function Features({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="features" className={"w-full bg-[#FFFEFE] py-20 lg:py-32 overflow-hidden " + (className || "")}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#138E5E]/10 bg-[#138E5E]/5 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#138E5E]" />
                <span className="text-[#138E5E] text-center font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  {dict.features.badge}
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 w-full max-w-[686px] text-[#052618] text-center font-onest text-[32px] sm:text-[40px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px]"
              >
                {dict.features.titleStart}{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  {dict.features.titleEm}
                </span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 w-full max-w-[514px] text-[#052618] text-center font-inter text-base sm:text-lg font-normal leading-relaxed sm:leading-7 opacity-80"
              >
                {dict.features.subtitle}
              </motion.p>
            </div>

            <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {dict.features.items.map((card, idx) => (
                <FeatureCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  icon={featureIcons[idx % featureIcons.length]}
                  uiSrc={featureUIs[idx % featureUIs.length]}
                  width={featureWidths[idx % featureWidths.length]}
                  isMounted={isMounted}
                  delay={0.2 + idx * 0.1}
                  className="w-full"
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
