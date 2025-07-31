import { Brain, Heart, Phone, Users, ArrowLeft, CheckCircle, AlertCircle, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { useDarkMode } from '@/contexts/DarkModeContext'

export default function MentalHealthSupport() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const mentalHealthServices = [
    {
      title: "Professional Counseling",
      icon: Brain,
      color: "bg-purple-500",
      services: [
        "Licensed therapists and psychologists in Lagos",
        "Cognitive Behavioral Therapy (CBT) sessions",
        "Group therapy and support sessions",
        "Family and couples counseling",
        "Specialized trauma and PTSD treatment"
      ]
    },
    {
      title: "Crisis Support",
      icon: Phone,
      color: "bg-red-500",
      services: [
        "24/7 mental health crisis hotlines",
        "Emergency psychiatric services",
        "Suicide prevention support",
        "Crisis intervention teams",
        "Emergency mental health assessments"
      ]
    },
    {
      title: "Community Support",
      icon: Users,
      color: "bg-blue-500",
      services: [
        "Peer support groups and networks",
        "Community mental health programs",
        "Religious and spiritual counseling",
        "Workplace mental health initiatives",
        "Student mental health services"
      ]
    },
    {
      title: "Self-Care Resources",
      icon: Heart,
      color: "bg-green-500",
      services: [
        "Mindfulness and meditation techniques",
        "Stress management workshops",
        "Mental health apps and online resources",
        "Exercise and wellness programs",
        "Sleep hygiene and relaxation methods"
      ]
    }
  ]

  const warningSignsData = [
    {
      category: "Emotional Signs",
      signs: [
        "Persistent sadness or hopelessness",
        "Extreme mood swings or irritability",
        "Overwhelming anxiety or worry",
        "Loss of interest in activities",
        "Feelings of worthlessness or guilt"
      ]
    },
    {
      category: "Behavioral Signs",
      signs: [
        "Social withdrawal and isolation",
        "Changes in sleep or eating patterns",
        "Substance abuse or risky behaviors",
        "Difficulty concentrating or making decisions",
        "Neglecting personal hygiene or responsibilities"
      ]
    },
    {
      category: "Physical Signs",
      signs: [
        "Unexplained aches and pains",
        "Fatigue or loss of energy",
        "Changes in appetite or weight",
        "Frequent headaches or digestive issues",
        "Sleep disturbances or insomnia"
      ]
    }
  ]

  const copingStrategies = [
    "Practice deep breathing and relaxation techniques",
    "Maintain regular exercise and physical activity",
    "Keep a consistent sleep schedule",
    "Connect with supportive friends and family",
    "Limit alcohol and avoid drugs",
    "Practice gratitude and positive thinking",
    "Engage in hobbies and enjoyable activities",
    "Seek professional help when needed"
  ]

  const emergencyContacts = [
    { service: "Emergency Services", number: "122, 199, 112" },
    { service: "Lagos State Mental Health", number: "0800-MENTAL" },
    { service: "Suicide Prevention Hotline", number: "0809-210-6493" },
    { service: "Crisis Text Line", number: "Text HOME to 741741" }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'}`}>
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
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
              <Brain className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Mental Health Support</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive mental health resources and support for Lagos residents
            </p>
          </div>
        </div>

        <Card className="mb-8 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600 dark:text-red-400">
              <AlertCircle className="h-5 w-5 mr-2" />
              Crisis Support - Available 24/7
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              If you or someone you know is in immediate danger or having thoughts of self-harm, please reach out for help immediately.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <span className="font-medium">{contact.service}</span>
                  <Badge variant="outline" className="text-red-600 border-red-600">
                    {contact.number}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mentalHealthServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${service.color} rounded-lg`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.services.map((item, itemIndex) => (
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
            Recognizing Warning Signs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {warningSignsData.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.signs.map((sign, signIndex) => (
                      <li key={signIndex} className="flex items-start">
                        <AlertCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-600">Healthy Coping Strategies</CardTitle>
              <CardDescription>
                Practical ways to manage stress and maintain mental wellness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {copingStrategies.map((strategy, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{strategy}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-600">Mental Health Resources in Lagos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Professional Services</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Lagos State Mental Health Hospital</li>
                    <li>• Private psychiatric clinics</li>
                    <li>• University counseling centers</li>
                    <li>• LASHMA mental health coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Support Groups</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Depression and anxiety support groups</li>
                    <li>• Addiction recovery programs</li>
                    <li>• Grief and loss support</li>
                    <li>• Family support networks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Online Resources</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Mental health apps and platforms</li>
                    <li>• Online therapy sessions</li>
                    <li>• Educational resources and webinars</li>
                    <li>• Peer support forums</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="text-purple-600">Remember: You Are Not Alone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Mental health challenges are common and treatable. Seeking help is a sign of strength, not weakness. 
              Whether you're dealing with stress, anxiety, depression, or other mental health concerns, there are 
              people and resources available to support you. Take the first step by reaching out to a trusted 
              friend, family member, or mental health professional.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
