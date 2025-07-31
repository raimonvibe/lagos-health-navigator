import { Users, Heart, Brain, Shield, Smartphone, ArrowLeft, CheckCircle, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { useDarkMode } from '@/contexts/DarkModeContext'

export default function YoungAdultHealth() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const healthTopics = [
    {
      title: "Mental Health & Stress Management",
      icon: Brain,
      color: "bg-purple-500",
      content: [
        "Recognize signs of anxiety and depression early",
        "Practice mindfulness and meditation techniques",
        "Build healthy coping mechanisms for academic/work stress",
        "Maintain work-life balance in Lagos' fast-paced environment",
        "Seek professional help when needed - mental health is health"
      ]
    },
    {
      title: "Reproductive Health",
      icon: Heart,
      color: "bg-pink-500",
      content: [
        "Regular reproductive health screenings and STI testing",
        "Access to family planning resources and contraception",
        "Understanding consent and healthy relationships",
        "Pregnancy planning and prenatal care options",
        "Access to confidential reproductive health services"
      ]
    },
    {
      title: "Lifestyle & Nutrition",
      icon: Shield,
      color: "bg-green-500",
      content: [
        "Maintain healthy eating habits despite busy schedules",
        "Limit alcohol consumption and avoid substance abuse",
        "Stay physically active with regular exercise routines",
        "Get adequate sleep (7-9 hours) for optimal health",
        "Stay hydrated and eat balanced meals regularly"
      ]
    },
    {
      title: "Digital Wellness",
      icon: Smartphone,
      color: "bg-blue-500",
      content: [
        "Manage screen time and social media usage",
        "Protect mental health from online negativity",
        "Use health apps and digital tools responsibly",
        "Maintain real-world social connections",
        "Practice digital detox regularly"
      ]
    }
  ]

  const commonConcerns = [
    {
      concern: "Academic/Career Stress",
      solutions: [
        "Set realistic goals and expectations",
        "Develop time management skills",
        "Build support networks with peers",
        "Consider counseling services at universities/workplaces"
      ]
    },
    {
      concern: "Financial Health Stress",
      solutions: [
        "Learn basic financial literacy and budgeting",
        "Understand health insurance options including LASHMA",
        "Plan for healthcare expenses and emergency funds",
        "Access free or low-cost health services when available"
      ]
    },
    {
      concern: "Relationship & Social Health",
      solutions: [
        "Communicate openly and honestly in relationships",
        "Set healthy boundaries with friends and partners",
        "Build diverse social support networks",
        "Learn conflict resolution skills"
      ]
    }
  ]

  const preventiveCare = [
    "Annual health check-ups and screenings",
    "Regular dental and eye care",
    "Vaccinations including HPV, hepatitis B",
    "Mental health check-ins and counseling",
    "Sexual health screenings and education"
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-secondary-50 to-accent-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-start">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleDarkMode}
            className="p-2"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
        <div className="mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-full mb-4">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Young Adult Health Guide</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Health guidance for young adults (18-35) navigating life in Lagos
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {healthTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${topic.color} rounded-lg`}>
                    <topic.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topic.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Common Young Adult Health Concerns
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {commonConcerns.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-accent">{item.concern}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800">
            <CardHeader>
              <CardTitle className="text-accent">Preventive Care Checklist</CardTitle>
              <CardDescription>
                Essential health screenings for young adults
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {preventiveCare.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
            <CardHeader>
              <CardTitle className="text-primary">Lagos Resources for Young Adults</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Healthcare Access</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• LASHMA youth-friendly services</li>
                    <li>• University health centers</li>
                    <li>• Community health centers</li>
                    <li>• Private clinics with youth programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Mental Health Support</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Campus counseling services</li>
                    <li>• Mental health helplines</li>
                    <li>• Support groups and peer networks</li>
                    <li>• Online therapy platforms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Emergency Contacts</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Emergency: 122, 199, 112</li>
                    <li>• Crisis helpline: Available 24/7</li>
                    <li>• Campus security (if applicable)</li>
                    <li>• Trusted friend or family member</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
