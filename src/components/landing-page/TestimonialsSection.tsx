import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "HireX completely transformed our hiring process. We've reduced our time-to-hire by 60% while improving the quality of our candidates.",
      author: "Sarah Johnson",
      title: "Head of HR, TechVision Inc.",
      avatar: "1"
    },
    {
      quote: "The AI interview feature is a game-changer. Our team now focuses only on pre-qualified candidates who are genuinely interested in our company.",
      author: "Michael Chen",
      title: "CTO, Nexus Software",
      avatar: "2"
    },
    {
      quote: "We've seen a 40% increase in diverse hiring since implementing HireX. The bias reduction algorithms really work.",
      author: "Priya Patel",
      title: "DEI Director, Global Innovations",
      avatar: "3"
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. We now know exactly where our top performers are coming from.",
      author: "James Wilson",
      title: "Talent Acquisition Manager, Stellar Group",
      avatar: "4"
    }
  ];
  return (
    <section id="testimonials" className="py-20 px-8 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Companies of all sizes are transforming their hiring process with HireX.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Avatar className="h-12 w-12 border-2 border-blue-200">
                      <AvatarImage src={`https://i.pravatar.cc/100?img=${testimonial.avatar}`} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <div className="mb-4 text-neutral-600 dark:text-neutral-300 italic">
                      "{testimonial.quote}"
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-12 items-center">
          <div className="text-neutral-400 dark:text-neutral-500 font-bold text-xl">Trusted by:</div>
          {['Microsoft', 'Adobe', 'Shopify', 'Airbnb', 'Spotify'].map((company, index) => (
            <div key={index} className="text-neutral-500 dark:text-neutral-400 font-bold text-xl">{company}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
