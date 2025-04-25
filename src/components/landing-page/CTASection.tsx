'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function CTASection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="contact" className="py-16 px-8">
      <motion.div 
        className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-10 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Ready to Transform Your Hiring?
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join hundreds of companies that have already improved their hiring process with HireX. 
            Start your free 14-day trial today.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <Input 
            placeholder="Enter your email" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="bg-white text-blue-600 hover:bg-white/90 w-full">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center text-sm text-white/80"
          variants={itemVariants}
        >
          <p>No credit card required. Cancel anytime.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
