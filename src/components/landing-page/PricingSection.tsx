import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingSection() {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Choose the plan that fits your hiring needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${plan.highlighted ? 'border-2 border-blue-500 shadow-lg shadow-blue-100 dark:shadow-blue-900/20' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rotate-45 translate-x-[30%] translate-y-[30%] w-[120px] text-center">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-neutral-500 dark:text-neutral-400">/month</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Contact our sales team for a custom plan tailored to your specific needs.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}
