export default function HowItWorksSection() {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How HireX Works</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Our streamlined 5-step process takes the complexity out of hiring.
          </p>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[27px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
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
                  <div className="mt-4 bg-white dark:bg-neutral-800 p-4 rounded-lg text-sm">
                    <div className="flex justify-between mb-2">
                      <span>Resume Parsing Accuracy</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: "98%"}}></div>
                    </div>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="mt-4 p-4 border border-dashed border-purple-300 dark:border-purple-800 rounded-lg text-sm italic text-neutral-600 dark:text-neutral-400">
                    "Our AI conducts structured interviews with natural language processing, adapting questions based on each candidate's responses for a personalized experience."
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
