import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTASection() {  return (
    <section id="contact" className="py-16 px-8">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-10 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join hundreds of companies that have already improved their hiring process with HireX. 
            Start your free 14-day trial today.
          </p>
        </div>
        
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input 
            placeholder="Enter your email" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
          />
          <Button className="bg-white text-blue-600 hover:bg-white/90">
            Get Started
          </Button>
        </div>
        
        <div className="mt-8 text-center text-sm text-white/80">
          <p>No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}
