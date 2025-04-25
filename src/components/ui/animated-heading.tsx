'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
  delay?: number;
}

export function AnimatedHeading({
  children,
  subtitle,
  className = "",
  subtitleClassName = "",
  delay = 0
}: AnimatedHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className={`text-3xl font-bold mb-4 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className={`text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto ${subtitleClassName}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
