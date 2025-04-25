'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PricingSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const popularBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  const pricingPlans = [
    {
      name: "Starter",
      price: 199,
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 job postings per month",
        "AI resume screening",
        "Basic AI interviews",
        "Email support",
        "Analytics dashboard"
      ],
      highlighted: false,
      ctaText: "Get Started"
    },
    {
      name: "Professional",
      price: 499,
      description: "For growing teams with advanced needs",
      features: [
        "Up to 20 job postings per month",
        "Advanced AI resume screening",
        "Custom AI interviews",
        "Skill assessment tools",
        "Candidate insights",
        "Integration with ATS",
        "Priority support"
      ],
      highlighted: true,
      ctaText: "Start 14-day Trial"
    },
    {
      name: "Enterprise",
      price: 999,
      description: "For large organizations with complex hiring needs",
      features: [
        "Unlimited job postings",
        "Advanced AI resume screening",
        "Custom AI interviews",
        "Advanced skill assessment",
        "Team collaboration tools",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Custom integrations"
      ],
      highlighted: false,
      ctaText: "Contact Sales"
    }
  ];
  return (
    <section id="pricing" className="py-20 px-8">
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
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Choose the plan that fits your hiring needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card 
                className={`relative overflow-hidden h-full flex flex-col ${plan.highlighted ? 'border-2 border-blue-500 shadow-lg shadow-blue-100 dark:shadow-blue-900/20' : ''}`}
              >
                {plan.highlighted && (
                  <motion.div 
                    className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rotate-45 translate-x-8 translate-y-4"
                    variants={popularBadgeVariants}
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <motion.span 
                      className="text-4xl font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                    >
                      ${plan.price}
                    </motion.span>
                    <span className="text-neutral-500 dark:text-neutral-400">/month</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex gap-2 items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.05) + (index * 0.1), duration: 0.5 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        <span className="text-neutral-600 dark:text-neutral-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="mt-auto">
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : ''}`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                    >
                      {plan.ctaText}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
