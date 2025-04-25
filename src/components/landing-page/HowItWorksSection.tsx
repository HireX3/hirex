'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HowItWorksSection() {
  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Slightly longer delay between steps for emphasis
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 1.2, // Slightly longer duration for steps
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing function
      }
    }
  };
  // Counter hook for percentage animation with inView trigger
  function useCountUp(target: number, duration: number = 1.2, delay: number = 0) {
    const [value, setValue] = useState(0);
    const [isTriggered, setIsTriggered] = useState(false);

    // This effect will start the animation when the component is in view
    useEffect(() => {
      // Create an intersection observer to detect when the element is visible
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isTriggered) {
            setIsTriggered(true);
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      // Target the element containing the progress bar
      const targetElement = document.getElementById('accuracy-progress');
      if (targetElement) {
        observer.observe(targetElement);
      }

      return () => {
        if (targetElement) {
          observer.unobserve(targetElement);
        }
      };
    }, [isTriggered]);

    // This effect handles the actual counting animation
    useEffect(() => {
      if (!isTriggered) return;
      
      let startTime: number | null = null;
      let animationFrameId: number;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const elapsedSeconds = elapsedTime / 1000;
        
        if (elapsedSeconds < delay) {
          animationFrameId = requestAnimationFrame(animateCount);
          return;
        }

        const progress = Math.min((elapsedSeconds - delay) / duration, 1);
        setValue(Math.floor(progress * target));
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCount);
        } else {
          setValue(target);
        }
      };
      
      animationFrameId = requestAnimationFrame(animateCount);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [isTriggered, target, duration, delay]);

    return value;
  }

  // Count up for the 98% accuracy
  const accuracyCount = useCountUp(98, 2.0, 0.3);

  // Existing steps array
  const steps = [
    {
      number: "01",
      title: "Upload Your Job Description",
      description: "Start by uploading your job description or creating one with our AI-powered job description generator.",
      color: "blue"
    },
    {
      number: "02",
      title: "AI Resume Screening",
      description: "Our AI analyzes resumes and ranks candidates based on your specific job requirements.",
      color: "indigo"
    },
    {
      number: "03",
      title: "Automated Interviews",
      description: "Qualified candidates are invited to complete an AI interview customized for the role.",
      color: "purple"
    },
    {
      number: "04",
      title: "Skill Assessment",
      description: "Candidates demonstrate their abilities through tailored skill assessments and coding challenges.",
      color: "violet"
    },
    {
      number: "05",
      title: "Review Top Candidates",
      description: "Access detailed reports on top candidates with AI-powered insights and recommendations.",
      color: "pink"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <h2 className="text-3xl font-bold mb-4">How HireX Works</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Our streamlined 5-step process takes the complexity out of hiring.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Vertical line connecting steps */}
          <motion.div 
            className="absolute left-[27px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 md:gap-12 relative"
              variants={itemVariants}
            >
              <motion.div 
                className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: 0.1 + index * 0.1 
                }}
              >
                {step.number}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{step.description}</p>
                
                {/* Step details - different for each step */}
                {index === 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg">
                      <span className="font-semibold">AI Job Description Analysis</span>
                      <p className="text-neutral-500 dark:text-neutral-400 mt-1">Identifies key requirements and skills needed</p>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg">
                      <span className="font-semibold">Customizable Templates</span>
                      <p className="text-neutral-500 dark:text-neutral-400 mt-1">30+ industry-specific job templates</p>
                    </div>
                  </div>
                )}
                  {index === 1 && (
                  <motion.div 
                    id="accuracy-progress"
                    className="mt-4 bg-white dark:bg-neutral-800 p-4 rounded-lg text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span>Resume Parsing Accuracy</span>
                      <span className="font-semibold">{accuracyCount}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "98%" }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 2, 
                          ease: [0.33, 1, 0.68, 1], 
                          delay: 0.3 
                        }}
                      />
                    </div>
                  </motion.div>
                )}
                  {index === 2 && (
                  <div className="mt-4 p-4 border border-dashed border-purple-300 dark:border-purple-800 rounded-lg text-sm italic text-neutral-600 dark:text-neutral-400">
                    &ldquo;Our AI conducts structured interviews with natural language processing, adapting questions based on each candidate&apos;s responses for a personalized experience.&rdquo;
                  </div>
                )}
              </div>
            </motion.div>
          ))} 
        </motion.div>
      </div>
    </section>
  );
}
