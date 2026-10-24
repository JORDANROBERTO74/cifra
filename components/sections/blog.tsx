"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const tagStyles = [
  "bg-[#E1F2FE] text-[#0368A1]",
  "bg-[#DDFCE6] text-[#138E5E]",
  "bg-[#FEF3C6] text-[#B45308]",
];

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  imageTop?: boolean;
  delay?: number;
}

function BlogCard({ image, date, title, description, tags, imageTop = true, delay = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col items-start bg-white hover:bg-[#F6FDFE] rounded-[24px] overflow-hidden border border-[#052618]/10 shadow-[0_4px_24px_rgba(4,39,24,0.02)] hover:shadow-[0_20px_60px_rgba(4,39,24,0.08)] transition-all duration-500 w-full lg:w-[612px]"
    >
      {imageTop && (
        <div className="w-full h-[300px] md:h-[440px] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      <div className="flex flex-col p-6 md:p-[40px] gap-4 w-full self-stretch lg:w-[612px]">
        <span className="text-[#052618] font-sans text-base md:text-[18px] leading-[28px] opacity-80">
          {date}
        </span>
        <h3 className="text-[#052618] font-onest text-[28px] md:text-[34px] font-semibold leading-[1.1] md:leading-[38px] tracking-[-1px]">
          {title}
        </h3>
        <p className="text-[#052618] font-sans text-base md:text-[18px] leading-[28px] opacity-80">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag: string, i: number) => (
            <div
              key={i}
              className={"px-[10px] py-[3px] rounded-[6px] text-center font-sans text-[14px] font-medium leading-[20px] " + (tagStyles[i % tagStyles.length] ?? "bg-[#F4FBFA] text-[#052618]/60")}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {!imageTop && (
        <div className="w-full h-[300px] md:h-[440px] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Blog({
  dict,
  locale,
  className,
}: {
  dict: Dictionary;
  locale: Locale;
  className?: string;
}) {
  const dateFormatter = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <section id="blog" className={"w-full bg-[#FEFEFF] py-16 md:py-[100px] flex justify-center " + (className || "")}>
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            {/* Header Content */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-[80px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E4F2EB] border border-[#138E5E]/10 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#138E5E]" />
                <span className="text-[#138E5E] text-[13px] font-sans font-medium uppercase tracking-wider">{dict.blog.badge}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[32px] sm:text-[40px] md:text-[52px] font-onest font-semibold text-[#052618] leading-[1.1] md:leading-[58px] tracking-tight md:tracking-[-2px] mb-6 max-w-3xl"
              >
                {dict.blog.titleStart} <span className="italic text-[rgba(4,39,24,0.40)]">{dict.blog.titleEm}</span> {dict.blog.titleEnd}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[15px] md:text-[18px] text-[#052618] leading-[1.6] md:leading-[28px] max-w-[612px] font-sans opacity-60"
              >
                {dict.blog.subtitle}
              </motion.p>
            </div>

            {/* Blog Cards Grid */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              {dict.blog.posts.map((post, idx) => (
                <BlogCard
                  key={idx}
                  image={post.image}
                  date={dateFormatter.format(new Date(post.date + "T00:00:00"))}
                  title={post.title}
                  description={post.description}
                  tags={post.tags}
                  imageTop={idx % 2 === 0}
                  delay={0.3 + idx * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
