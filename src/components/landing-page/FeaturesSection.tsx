'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Slow down the stagger effect between cards
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
        duration: 1, // Slower animation for each card
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing function
      }
    }
  };

  return (
    <section id="features" className="py-16 px-8 bg-neutral-50 dark:bg-neutral-900">
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
          <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Our platform uses cutting-edge AI to streamline every step of the hiring process,
            from resume screening to final candidate selection.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={cardVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1h8z"></path></svg>
                </div>
                <CardTitle>Resume Analysis</CardTitle>
                <CardDescription>
                  Our AI engine automatically extracts key information from resumes and ranks candidates based on job requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>Parse 100+ resume formats</li>
                  <li>Extract skills, experience, and education</li>
                  <li>Match candidates to job requirements</li>
                  <li>Eliminate bias in screening process</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">Learn more</Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><circle cx="9" cy="9" r="1"></circle><circle cx="15" cy="9" r="1"></circle></svg>
                </div>
                <CardTitle>AI Interviews</CardTitle>
                <CardDescription>
                  Conduct preliminary interviews with AI that adapts to candidate responses in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>Natural language conversation</li>
                  <li>Personalized follow-up questions</li>
                  <li>Behavioral and technical assessments</li>
                  <li>Detailed candidate response analysis</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-purple-600 dark:text-purple-400">Learn more</Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center dark:bg-green-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path><path d="M12 22v-3"></path></svg>
                </div>
                <CardTitle>Candidate Scoring</CardTitle>
                <CardDescription>
                  Objective scoring system that evaluates candidates across multiple dimensions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>Custom scoring criteria</li>
                  <li>Skills-based evaluation</li>
                  <li>Cultural fit assessment</li>
                  <li>Side-by-side candidate comparison</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-green-600 dark:text-green-400">Learn more</Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center dark:bg-orange-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600 dark:text-orange-400"><path d="M3 6V5c0-1.1.9-2 2-2h2"></path><path d="M11 5V3"></path><path d="M19 5c0-1.1-.9-2-2-2h-2v4"></path><path d="M3 10v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8"></path><path d="M10 2v7.5"></path><path d="M14 2v7.5"></path><path d="M8.5 12a.5.5 0 1 0-.5.5"></path><path d="M8.5 12a.5.5 0 1 1 0-1"></path><path d="M12.5 12a.5.5 0 1 0-.5.5"></path><path d="M12.5 12a.5.5 0 1 1 0-1"></path><path d="M16.5 12a.5.5 0 1 0-.5.5"></path><path d="M16.5 12a.5.5 0 1 1 0-1"></path><path d="M8.5 16a.5.5 0 1 0-.5.5"></path><path d="M8.5 16a.5.5 0 1 1 0-1"></path><path d="M12.5 16a.5.5 0 1 0-.5.5"></path><path d="M12.5 16a.5.5 0 1 1 0-1"></path><path d="M16.5 16a.5.5 0 1 0-.5.5"></path><path d="M16.5 16a.5.5 0 1 1 0-1"></path></svg>
                </div>
                <CardTitle>Skill Assessments</CardTitle>
                <CardDescription>
                  Automatically generate and evaluate custom skill assessments for candidates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>Role-specific tests</li>
                  <li>Coding challenges with AI evaluation</li>
                  <li>Soft skills assessment</li>
                  <li>Detailed performance analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-orange-600 dark:text-orange-400">Learn more</Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center dark:bg-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 dark:text-red-400"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive analytics to track and optimize your hiring process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>Time-to-hire metrics</li>
                  <li>Diversity and inclusion tracking</li>
                  <li>Sourcing channel effectiveness</li>
                  <li>Custom reporting and exports</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-400">Learn more</Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center dark:bg-cyan-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
                </div>
                <CardTitle>Diversity & Inclusion</CardTitle>
                <CardDescription>
                  Tools to help you build a more diverse and inclusive workforce.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>Bias detection in job descriptions</li>
                  <li>Anonymous screening options</li>
                  <li>Diverse candidate sourcing</li>
                  <li>Inclusion metrics and benchmarks</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-cyan-600 dark:text-cyan-400">Learn more</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
