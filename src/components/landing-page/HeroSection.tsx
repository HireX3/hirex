import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SplineScene } from "@/components/ui/splite";

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col lg:flex-row py-16 px-8 gap-12 items-center justify-center pt-24">
      <div className="flex-1 max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Revolutionize Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hiring Process</span> with AI
        </h1>
        <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-300">
          HireX uses advanced AI to analyze resumes and conduct intelligent interviews,
          helping you find the perfect candidates quickly and efficiently while reducing bias and saving time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Get Started Free</Button>
          <Button size="lg" variant="outline">Book a Demo</Button>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-white">
              <AvatarImage src="https://i.pravatar.cc/100?img=1" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage src="https://i.pravatar.cc/100?img=2" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white">
              <AvatarImage src="https://i.pravatar.cc/100?img=3" />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <span className="font-bold">500+</span> companies are already using HireX
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">85%</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Time saved in screening</span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">93%</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Interview efficiency</span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">70%</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Reduction in bias</span>
          </div>
        </div>
      </div>      <div className="flex-1 relative max-w-md">
        <div className="absolute -z-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-20 w-full h-full"></div>
        <div className="h-[400px] w-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="rounded-lg shadow-xl dark:border dark:border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
