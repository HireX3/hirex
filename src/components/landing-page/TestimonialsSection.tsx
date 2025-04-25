'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  // Companies for the marquee
  const companies = [
    'Microsoft', 'Adobe', 'Shopify', 'Airbnb', 'Spotify', 'Tesla', 'Netflix', 'Uber', 'Dropbox', 'Slack'
  ];
  
  // Double the array for smooth infinite scrolling
  const duplicatedCompanies = [...companies, ...companies];  const testimonials = [
    {
      quote: 'HireX completely transformed our hiring process. We\'ve reduced our time-to-hire by 60% while improving the quality of our candidates.',
      author: 'Sarah Johnson',
      title: 'Head of HR, TechVision Inc.',
      avatar: "1"
    },
    {
      quote: 'The AI interview feature is a game-changer. Our team now focuses only on pre-qualified candidates who are genuinely interested in our company.',
      author: 'Michael Chen',
      title: 'CTO, Nexus Software',
      avatar: "2"
    },
    {
      quote: 'We\'ve seen a 40% increase in diverse hiring since implementing HireX. The bias reduction algorithms really work.',
      author: 'Priya Patel',
      title: 'DEI Director, Global Innovations',
      avatar: "3"
    },
    {
      quote: 'The analytics dashboard gives us insights we never had before. We now know exactly where our top performers are coming from.',
      author: 'James Wilson',
      title: 'Talent Acquisition Manager, Stellar Group',
      avatar: "4"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-8 bg-white dark:bg-neutral-800 overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Companies of all sizes are transforming their hiring process with HireX.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              custom={index}
            >
              <Card className="overflow-hidden border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex gap-4 items-start">
                    <motion.div 
                      className="flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20, 
                        delay: 0.2 + index * 0.1 
                      }}
                    >
                      <Avatar className="h-12 w-12 border-2 border-blue-200">
                        <AvatarImage src={`https://i.pravatar.cc/100?img=${testimonial.avatar}`} />
                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>                      <motion.div 
                        className="mb-4 text-neutral-600 dark:text-neutral-300 italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      >
                        &ldquo;{testimonial.quote}&rdquo;
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      >
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.title}</p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 relative py-10">
          <div className="text-neutral-400 dark:text-neutral-500 font-bold text-xl text-center mb-8">Trusted by:</div>
          
          <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div 
                  key={index} 
                  className="mx-12 text-neutral-500 dark:text-neutral-400 font-bold text-xl inline-block"
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
