'use client'
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {  
  // Animation variants for staggered animations  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.25,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth motion
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth motion
      }
    }
  };

  // Animated counter hook
  function useCountUp(target: number, duration: number = 1.2, delay: number = 0) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      let start: number | null = null;
      let frame: number;
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = (timestamp - start) / 1000 - delay;
        if (elapsed > 0) {
          const progress = Math.min(elapsed / duration, 1);
          setValue(Math.floor(progress * target));
          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          } else {
            setValue(target);
          }
        } else {
          frame = requestAnimationFrame(animate);
        }
      };
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [target, duration, delay]);
    return value;
  }

  const count85 = useCountUp(85, 1.8, 1);
  const count93 = useCountUp(93, 1.8, 1.2);
  const count70 = useCountUp(70, 1.8, 1.4);

  return (
    <section id="hero" className="flex flex-col lg:flex-row py-16 px-8 gap-12 items-center justify-center pt-24 lg:mt-2.5">
      <motion.div 
        className="flex-1 max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          Revolutionize Your{" "}
          <motion.span 
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hiring Process
          </motion.span>{" "}
          with AI
        </motion.h1>
        <motion.p 
          className="text-lg mb-8 text-neutral-600 dark:text-neutral-300"
          variants={itemVariants}
        >
          HireX uses advanced AI to analyze resumes and conduct intelligent interviews,
          helping you find the perfect candidates quickly and efficiently while reducing bias and saving time.
        </motion.p>        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition">Get Started Free</Button>
          <Link href="/demo" passHref>
            <Button size="lg" variant="outline" className="hover:scale-105 transition w-full">Try out the Demo</Button>
          </Link>
        </motion.div><motion.div 
          className="mt-8 flex items-center gap-2"
          variants={itemVariants}
        >
        </motion.div>
        
        <motion.div 
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.8, staggerChildren: 0.2 }}
        >
          <motion.div 
            className="flex flex-col items-center sm:items-start"
            variants={itemVariants}
          >
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {count85}%
            </motion.span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Time saved in screening</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center sm:items-start"
            variants={itemVariants}
          >
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {count93}%
            </motion.span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Interview efficiency</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center sm:items-start"
            variants={itemVariants}
          >
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {count70}%
            </motion.span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Reduction in bias</span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex-1 relative max-w-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="absolute -z-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-20 w-full h-full"></div>
        <div className="h-[400px] w-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="rounded-lg shadow-xl dark:border dark:border-white/10"
          />
        </div>
      </motion.div>
    </section>
  );
}
