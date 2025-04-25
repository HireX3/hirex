import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Our platform uses cutting-edge AI to streamline every step of the hiring process,
            from resume screening to final candidate selection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
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
          
          <Card>
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
                <li>Adaptive questioning based on responses</li>
                <li>Consistent evaluation criteria</li>
                <li>Available 24/7 for global candidates</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-purple-600 dark:text-purple-400">Learn more</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="mb-2 h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center dark:bg-green-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14h.01"></path><path d="M13 18.5v.5"></path><path d="M16 18.5v.5"></path><path d="m15.5 13-.5.5"></path></svg>
              </div>
              <CardTitle>Skill Assessment</CardTitle>
              <CardDescription>
                Automatically evaluate technical and soft skills with customizable assessment tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Coding challenges with AI evaluation</li>
                <li>Role-based skill assessment</li>
                <li>Soft skill evaluation</li>
                <li>Benchmarking against top performers</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-green-600 dark:text-green-400">Learn more</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center dark:bg-amber-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>
              </div>
              <CardTitle>Candidate Insights</CardTitle>
              <CardDescription>
                Gain deep insights into candidate profiles with AI-powered analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Personality profile assessment</li>
                <li>Culture fit evaluation</li>
                <li>Predictive performance metrics</li>
                <li>Team compatibility analysis</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-amber-600 dark:text-amber-400">Learn more</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center dark:bg-cyan-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              </div>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Track your hiring process with detailed analytics and reporting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Recruitment funnel metrics</li>
                <li>Time-to-hire tracking</li>
                <li>Source effectiveness analysis</li>
                <li>Custom reporting options</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-cyan-600 dark:text-cyan-400">Learn more</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 h-12 w-12 rounded-lg bg-rose-100 flex items-center justify-center dark:bg-rose-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-600 dark:text-rose-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <CardTitle>Collaborative Hiring</CardTitle>
              <CardDescription>
                Involve your entire team in the hiring process with collaborative tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Team feedback collection</li>
                <li>Interview scheduling</li>
                <li>Candidate sharing and notes</li>
                <li>Decision-making workflow</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-rose-600 dark:text-rose-400">Learn more</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
