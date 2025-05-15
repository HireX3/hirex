'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Upload, FileText, CheckCircle, Briefcase, Mic, MicOff } from 'lucide-react'

// Job description options
const jobOptions = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Developing high-quality software solutions, collaborating with cross-functional teams, and debugging code to improve functionality.',
    requirements: ['JavaScript/TypeScript', 'React/Angular/Vue', 'Node.js', 'Problem-solving skills', '3+ years of experience'],
    icon: '💻'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist', 
    description: 'Creating data models, implementing machine learning algorithms, and providing data-driven insights to stakeholders.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Data Visualization', 'Statistics background'],
    icon: '📊'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Leading product development from conception to launch, defining product vision, and working with stakeholders to ensure success.',
    requirements: ['Product roadmapping', 'User research', 'Communication skills', 'Agile methodologies', 'Technical background'],
    icon: '🚀'
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    description: 'Creating user-centered designs, conducting user research, and developing wireframes and prototypes for digital products.',
    requirements: ['User research', 'Wireframing', 'Figma/Sketch', 'Usability testing', 'Design systems'],
    icon: '🎨'
  }
]

// Interview questions by job type
const interviewQuestions = {
  'software-engineer': [
    "Can you explain your experience with JavaScript frameworks like React?",
    "How do you approach debugging a complex issue in your code?",
    "Describe a challenging project you worked on and how you overcame technical obstacles.",
    "How do you stay updated with the latest programming trends and technologies?",
    "Explain how you would design a scalable architecture for a web application."
  ],
  'data-scientist': [
    "Can you explain your experience with machine learning algorithms?",
    "How do you approach cleaning and preprocessing large datasets?",
    "Describe a data science project where you derived significant insights.",
    "How do you validate your models and ensure they aren't overfitting?",
    "Explain how you would communicate complex findings to non-technical stakeholders."
  ],
  'product-manager': [
    "How do you prioritize features in a product roadmap?",
    "Describe how you gather and incorporate user feedback into your product decisions.",
    "Tell me about a time when you had to make a difficult product decision.",
    "How do you measure the success of a product feature after launch?",
    "How do you balance stakeholder requests with user needs?"
  ],
  'ux-designer': [
    "Can you walk me through your design process?",
    "How do you incorporate user research into your design decisions?",
    "Describe a time when you had to redesign an existing product feature.",
    "How do you ensure your designs are accessible to all users?",
    "How do you collaborate with developers to ensure your designs are implemented correctly?"
  ]
}

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [interviewComplete, setInterviewComplete] = useState(false)
  const [transcript, setTranscript] = useState<{question: string, answer: string}[]>([])
  const [analysis, setAnalysis] = useState<{
    summary: string
    score: number
    strengths: string[]
    weaknesses: string[]
    fitScore: number
    recommendedRole?: string
  } | null>(null)
  const [interviewFeedback, setInterviewFeedback] = useState<{
    overallScore: number
    technicalScore: number
    communicationScore: number
    cultureFitScore: number
    recommendations: string[]
    strengths: string[]
  } | null>(null)
  
  // Refs for audio recording
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<BlobPart[]>([])
  const audioStreamRef = useRef<MediaStream | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }
  // Select job and proceed to next step
  const selectJob = (jobId: string) => {
    setSelectedJob(jobId)
    setCurrentStep(2)
  }

  const handleUpload = async () => {
    if (!file || !selectedJob) return

    setIsUploading(true)
    
    // Simulate file upload
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsUploading(false)
    setCurrentStep(3)
  }

  const analyzeCV = async () => {
    setIsAnalyzing(true)
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Get selected job data
    const jobData = jobOptions.find(job => job.id === selectedJob)
    
    // Create analysis based on selected job
    setAnalysis({
      summary: `Experienced ${jobData?.title.toLowerCase()} with 5+ years of experience. ${
        selectedJob === 'software-engineer' 
          ? "Strong focus on React, TypeScript, and Node.js. Previous roles at tech startups and mid-sized companies show progressive responsibility and leadership."
          : selectedJob === 'data-scientist'
            ? "Expertise in Python, machine learning algorithms, and data visualization. Experience with large datasets and statistical analysis."
            : selectedJob === 'product-manager'
              ? "Track record of successful product launches and feature development. Strong stakeholder management and agile methodology experience."
              : "Portfolio showcases user-centered design solutions and strong visual abilities. Experience with major design tools and user research methodologies."
      } Educational background includes a relevant degree and continuous learning through certifications.`,
      score: 87,
      strengths: [
        `Strong technical skills in required ${jobData?.title.toLowerCase()} technologies`,
        "Proven team leadership experience",
        selectedJob === 'software-engineer' 
          ? "Excellence in code quality and architecture"
          : selectedJob === 'data-scientist'
            ? "Strong analytical and statistical capabilities"
            : selectedJob === 'product-manager'
              ? "Clear product vision and roadmap development"
              : "User-centered design approach with excellent UI/UX sensibilities",
        "Good communication skills evidenced by presentations and documentation"
      ],
      weaknesses: [
        `Limited experience with some specific ${jobData?.title.toLowerCase()} tools we use`,
        "Gap in employment from 2022-2023",
        "May need additional training in our proprietary systems"
      ],
      fitScore: 85,
      recommendedRole: jobData?.title
    })
    
    setIsAnalyzing(false)
    setCurrentStep(4)
  }
  
  // Handle the interview process
  const startInterview = () => {
    setCurrentQuestion(0)
    setTranscript([])
    setInterviewComplete(false)
    setCurrentStep(5)
  }
  
  // Toggle audio recording
  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false)
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop()
      }
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach(track => track.stop())
      }
    } else {
      try {
        // Start recording
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        audioStreamRef.current = stream
        const mediaRecorder = new MediaRecorder(stream)
        mediaRecorderRef.current = mediaRecorder
        audioChunksRef.current = []
        
        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data)
          }
        }
        
        mediaRecorder.onstop = () => {
          // In a real app, you would send this audio to your API for speech-to-text
          // For this demo, we'll simulate a response
          
          // Generate a fake transcript based on question
          const fakeResponse = getSimulatedResponse(currentQuestion, selectedJob || '')
          
          // Update transcript with the question and answer
          setTranscript(prev => [
            ...prev, 
            {
              question: interviewQuestions[selectedJob as keyof typeof interviewQuestions][currentQuestion],
              answer: fakeResponse
            }
          ])
          
          // Move to next question or complete interview
          if (currentQuestion < interviewQuestions[selectedJob as keyof typeof interviewQuestions].length - 1) {
            setCurrentQuestion(prev => prev + 1)
          } else {
            completeInterview()
          }
        }
        
        mediaRecorder.start()
        setIsRecording(true)
      } catch (error) {
        console.error('Error accessing microphone:', error)
        alert('Unable to access microphone. Please check your permissions.')
      }
    }
  }
  
  // Generate a simulated response for the demo
  const getSimulatedResponse = (questionIndex: number, jobType: string): string => {
    const responses = {
      'software-engineer': [
        "I have over 4 years of experience with React, building complex SPAs and component libraries. I've also worked with Vue on smaller projects and understand core JavaScript framework principles.",
        "When debugging complex issues, I start with reproducing the bug consistently, then use Chrome DevTools and logging to narrow down the source. For particularly tricky bugs, I use bisection methods or pair with colleagues.",
        "I led the migration of a monolithic app to a microservices architecture. We faced challenges with service boundaries and data consistency, which we solved by implementing a domain-driven design approach.",
        "I follow tech blogs, participate in GitHub discussions, attend conferences, and set aside time each week for learning new technologies. I also contribute to open-source projects to keep my skills sharp.",
        "I'd start with identifying clear service boundaries, implement a clean API gateway, use containerization for consistency, set up proper monitoring, and ensure the database design supports scaling horizontally."
      ],
      'data-scientist': [
        "I've implemented various algorithms including linear regression, random forests, and neural networks. Recently, I've been focusing on deep learning for NLP tasks with transformer architectures.",
        "I have a structured approach starting with understanding data sources, identifying missing values and outliers, normalizing data formats, and creating reproducible data cleaning pipelines using Pandas and NumPy.",
        "I analyzed customer churn data and discovered that service usage patterns in the first 30 days strongly predicted long-term retention. This led to a 15% reduction in churn when we implemented targeted onboarding.",
        "I use cross-validation techniques, maintain separate validation datasets, monitor for distribution shifts, and ensure my features don't leak information from the future. I also use regularization methods appropriate to the model.",
        "I focus on creating clear visualizations that highlight key insights without technical jargon. I prepare different levels of detail for different audiences and always connect results to business metrics they already understand."
      ],
      'product-manager': [
        "I prioritize using a framework that balances business value, user impact, and development effort. I use techniques like RICE scoring and involve stakeholders in transparent prioritization sessions.",
        "I combine quantitative data from analytics with qualitative feedback from user interviews. I maintain a feedback repository and regularly review patterns to inform product decisions.",
        "We had to sunset a popular feature due to maintenance costs. I gathered usage data, calculated the actual business impact, and presented alternatives to stakeholders while communicating transparently with users about the transition.",
        "I establish clear success metrics before launch tied to business objectives. I use a combination of engagement metrics, user satisfaction scores, and business KPIs specific to the feature's goals.",
        "I create alignment by focusing on user problems first and connecting them to business goals. I involve stakeholders early in discovery, maintain transparent communication, and use data to mediate conflicting priorities."
      ],
      'ux-designer': [
        "My process involves discovery through user research, defining the problem clearly, ideating multiple solutions, prototyping the most promising ones, testing with users, and iterating based on feedback before implementation.",
        "I use a combination of user interviews, usability testing, analytics data, and contextual inquiry. I create research plans tied to specific questions and synthesize findings into actionable insights for the design process.",
        "I redesigned our checkout flow after discovering a 40% abandonment rate. By conducting usability tests, I identified confusing form labels and a lack of progress indicators. My redesign improved conversion by 25%.",
        "I follow WCAG guidelines, use sufficient color contrast, ensure keyboard navigation, provide text alternatives for images, create responsive designs, and test with screen readers. I also involve users with disabilities in testing.",
        "I create detailed design specifications with responsive breakpoints, interaction states, and component behaviors. I work alongside developers in planning, participate in technical discussions, and am available during implementation for questions."
      ]
    }
    
    return responses[jobType as keyof typeof responses][questionIndex] || "I don't have enough experience in that area yet, but I'm eager to learn more about it."
  }
  
  // Complete the interview process and provide feedback
  const completeInterview = () => {
    setInterviewComplete(true)
    
    // Generate interview feedback
    setInterviewFeedback({
      overallScore: 86,
      technicalScore: selectedJob === 'software-engineer' || selectedJob === 'data-scientist' ? 88 : 84,
      communicationScore: 90,
      cultureFitScore: 85,
      recommendations: [
        "Consider additional practice with system design questions",
        "Provide more specific metrics and results when discussing past projects",
        "Continue developing knowledge of our industry-specific challenges"
      ],
      strengths: [
        "Clear and articulate communication style",
        "Strong technical foundation in core concepts",
        "Thoughtful approach to problem-solving",
        "Good examples from previous experience"
      ]
    })
    
    // Move to results page
    setCurrentStep(6)
  }
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center mb-12">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">HireX Demo: Complete Hiring Process</h1>
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700'}`}>
              1
            </div>
            <div className={`h-1 w-16 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
            
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700'}`}>
              2
            </div>
            <div className={`h-1 w-16 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
            
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700'}`}>
              3
            </div>
            <div className={`h-1 w-16 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
            
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 4 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700'}`}>
              4
            </div>
            <div className={`h-1 w-16 ${currentStep >= 5 ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
            
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 5 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700'}`}>
              5
            </div>
            <div className={`h-1 w-16 ${currentStep >= 6 ? 'bg-blue-600' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
            
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 6 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700'}`}>
              6
            </div>
          </div>
        </div>
        
        {/* Step labels */}
        <div className="flex justify-between mb-8 px-4 text-xs text-center">
          <div className="w-24">Job Selection</div>
          <div className="w-24">CV Upload</div>
          <div className="w-24">Processing</div>
          <div className="w-24">CV Analysis</div>
          <div className="w-24">Interview</div>
          <div className="w-24">Final Results</div>
        </div>        {/* Step 1: Job Selection */}
        {currentStep === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-6">Select Job Position</h2>
            <p className="mb-8 text-neutral-600 dark:text-neutral-300">
              Choose the job position you're hiring for. This will help our AI tailor the interview 
              questions and CV analysis to the specific role requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobOptions.map((job) => (
                <div 
                  key={job.id}
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    selectedJob === job.id 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md' 
                      : 'border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3" aria-hidden="true">{job.icon}</span>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-neutral-600 dark:text-neutral-400">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button 
                disabled={!selectedJob}
                onClick={() => selectJob(selectedJob as string)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Continue to CV Upload
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* Step 2: CV Upload */}
        {currentStep === 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-6">Upload Resume/CV</h2>
            <p className="mb-8 text-neutral-600 dark:text-neutral-300">
              Upload a candidate's resume for AI analysis. Our system will extract key information 
              and provide insights on their fit for the {jobOptions.find(j => j.id === selectedJob)?.title} role.
            </p>

            <div 
              className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              
              <div className="flex flex-col items-center">
                <Upload size={48} className="text-neutral-400 dark:text-neutral-500 mb-4" />
                <p className="text-lg font-medium mb-2">
                  {file ? file.name : 'Drag & drop or click to upload'}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                  Supports PDF, DOC, DOCX (Max 5MB)
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                >
                  Select File
                </Button>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(1)}
              >
                Back
              </Button>
              
              <Button 
                disabled={!file || isUploading}
                onClick={handleUpload}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                {isUploading ? 'Uploading...' : 'Upload & Continue'}
              </Button>
            </div>
          </motion.div>
        )}        {/* Step 3: Processing with LangChain */}
        {currentStep === 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-6">Processing Resume</h2>
            <p className="mb-8 text-neutral-600 dark:text-neutral-300">
              The resume has been uploaded successfully. Our AI is now processing the document to extract relevant information for the {jobOptions.find(j => j.id === selectedJob)?.title} position.
            </p>

            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg mb-8">
              <div className="flex items-start mb-6">
                <FileText size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">{file?.name}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {file && `${(file.size / 1024).toFixed(2)} KB`} • Uploaded just now
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-sm">Document validation complete</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-sm">Text extraction complete</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-sm">Structure parsing complete</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-sm">Matching against {jobOptions.find(j => j.id === selectedJob)?.title} requirements</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(2)}
              >
                Back
              </Button>
              
              <Button 
                onClick={analyzeCV}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze with AI'}
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Analysis Results */}
        {currentStep === 4 && analysis && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-6">AI Analysis Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">Overall Score</h3>
                <div className="text-4xl font-bold text-blue-600">{analysis.score}/100</div>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">Job Fit</h3>
                <div className="text-4xl font-bold text-purple-600">{analysis.fitScore}%</div>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg text-center">
                <h3 className="text-lg font-medium mb-2">Recommended Role</h3>
                <div className="text-xl font-bold text-green-600">{analysis.recommendedRole}</div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Summary</h3>
              <p className="text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                {analysis.summary}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-600">Strengths</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index} className="text-neutral-600 dark:text-neutral-300">{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-amber-600">Areas for Improvement</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {analysis.weaknesses.map((weakness, index) => (
                    <li key={index} className="text-neutral-600 dark:text-neutral-300">{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(3)}
              >
                Back
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                onClick={startInterview}
              >
                Proceed to Interview
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* Step 5: Interview */}
        {currentStep === 5 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-6">AI-Powered Interview</h2>
            
            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">
                  Question {currentQuestion + 1} of {interviewQuestions[selectedJob as keyof typeof interviewQuestions].length}
                </h3>
                
                <div className="text-neutral-500 dark:text-neutral-400 text-sm">
                  Job: {jobOptions.find(j => j.id === selectedJob)?.title}
                </div>
              </div>
              
              <div className="mb-8 p-4 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <p className="font-medium">{interviewQuestions[selectedJob as keyof typeof interviewQuestions][currentQuestion]}</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <Button 
                  onClick={toggleRecording}
                  className={`flex items-center gap-2 px-8 py-6 rounded-full ${
                    isRecording 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <MicOff size={24} />
                      <span>Stop Recording</span>
                    </>
                  ) : (
                    <>
                      <Mic size={24} />
                      <span>Start Recording Answer</span>
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {isRecording 
                    ? 'Recording... Click stop when you finish your answer.' 
                    : 'Click to record your answer to the question above.'
                  }
                </p>
              </div>
            </div>
            
            {/* Previous answers */}
            {transcript.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold mb-3">Previous Questions & Answers</h3>
                <div className="space-y-4">
                  {transcript.map((item, index) => (
                    <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                      <p className="font-medium mb-2">{item.question}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(4)}
              >
                Back to CV Analysis
              </Button>
              
              {/* Skip for demo purposes */}
              <Button 
                variant="outline"
                onClick={() => {
                  if (currentQuestion < interviewQuestions[selectedJob as keyof typeof interviewQuestions].length - 1) {
                    setCurrentQuestion(prev => prev + 1)
                  } else {
                    completeInterview()
                  }
                }}
              >
                {currentQuestion < interviewQuestions[selectedJob as keyof typeof interviewQuestions].length - 1
                  ? 'Skip to Next Question'
                  : 'Skip to Results'
                }
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* Step 6: Final Results */}
        {currentStep === 6 && interviewFeedback && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-6">Complete Hiring Assessment</h2>
            <p className="mb-8 text-neutral-600 dark:text-neutral-300">
              Based on the candidate's CV and interview performance, our AI has generated a comprehensive assessment for the {jobOptions.find(j => j.id === selectedJob)?.title} position.
            </p>
            
            {/* Overall scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">CV Analysis</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Overall Score</span>
                      <span className="font-medium">{analysis?.score}/100</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${analysis?.score || 0}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Job Fit</span>
                      <span className="font-medium">{analysis?.fitScore}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${analysis?.fitScore || 0}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Interview Performance</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Technical Knowledge</span>
                      <span className="font-medium">{interviewFeedback.technicalScore}/100</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${interviewFeedback.technicalScore}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Communication</span>
                      <span className="font-medium">{interviewFeedback.communicationScore}/100</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${interviewFeedback.communicationScore}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Culture Fit</span>
                      <span className="font-medium">{interviewFeedback.cultureFitScore}/100</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${interviewFeedback.cultureFitScore}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overall recommendation */}
            <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">AI Recommendation</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {interviewFeedback.overallScore}%
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    {interviewFeedback.overallScore >= 85 ? 'Highly Recommended' : 
                     interviewFeedback.overallScore >= 70 ? 'Recommended' : 'Consider with Reservations'}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Overall match for {jobOptions.find(j => j.id === selectedJob)?.title} position
                  </p>
                </div>
              </div>
              
              <p className="text-neutral-700 dark:text-neutral-300">
                This candidate shows {interviewFeedback.overallScore >= 85 ? 'excellent' : interviewFeedback.overallScore >= 70 ? 'good' : 'moderate'} alignment with the requirements for this role, with notable strengths in {interviewFeedback.technicalScore > interviewFeedback.communicationScore ? 'technical expertise' : 'communication skills'}.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-600">Strengths</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {interviewFeedback.strengths.map((strength, index) => (
                    <li key={index} className="text-neutral-600 dark:text-neutral-300">{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-amber-600">Recommendations</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {interviewFeedback.recommendations.map((rec, index) => (
                    <li key={index} className="text-neutral-600 dark:text-neutral-300">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Interview transcript summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Interview Highlights</h3>
              {transcript.length > 0 ? (
                <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg space-y-4">
                  {transcript.slice(0, 2).map((item, index) => (
                    <div key={index}>
                      <p className="font-medium">{item.question}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">{item.answer.substring(0, 150)}...</p>
                    </div>
                  ))}
                  {transcript.length > 2 && (
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm italic">
                      + {transcript.length - 2} more questions and answers...
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-neutral-500 dark:text-neutral-400 italic">Interview was simulated for demo purposes</p>
              )}
            </div>

            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(1)}
              >
                Start New Hiring Process
              </Button>
              
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Export Full Report
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
