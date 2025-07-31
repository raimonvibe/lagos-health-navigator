import { Heart, Apple, Dumbbell, Shield, Clock, CheckCircle, ArrowLeft, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { useDarkMode } from '@/contexts/DarkModeContext'

export default function HealthTips() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const healthTips = [
    {
      category: "Nutrition",
      icon: Apple,
      color: "bg-green-500",
      tips: [
        "Eat plenty of local fruits like oranges, bananas, and pawpaw for vitamin C",
        "Include leafy vegetables like ugwu, waterleaf, and bitter leaf in your diet",
        "Choose whole grains like brown rice, oats, and local yam over processed foods",
        "Stay hydrated with clean water - aim for 8 glasses daily",
        "Limit processed foods and sugary drinks"
      ]
    },
    {
      category: "Exercise",
      icon: Dumbbell,
      color: "bg-blue-500",
      tips: [
        "Take brisk walks around your neighborhood for 30 minutes daily",
        "Use stairs instead of elevators when possible",
        "Try traditional dances like Afrobeats for fun cardio exercise",
        "Do bodyweight exercises at home - push-ups, squats, planks",
        "Join community sports activities or local fitness groups"
      ]
    },
    {
      category: "Preventive Care",
      icon: Shield,
      color: "bg-purple-500",
      tips: [
        "Get regular health screenings at LASHMA-approved facilities",
        "Keep up with vaccinations including hepatitis B and yellow fever",
        "Practice good hygiene - wash hands frequently with soap",
        "Use mosquito nets and repellents to prevent malaria",
        "Schedule annual check-ups even when feeling healthy"
      ]
    },
    {
      category: "Mental Wellness",
      icon: Heart,
      color: "bg-pink-500",
      tips: [
        "Practice stress management through meditation or prayer",
        "Maintain social connections with family and friends",
        "Get adequate sleep - 7-9 hours per night",
        "Limit alcohol consumption and avoid smoking",
        "Seek professional help when feeling overwhelmed"
      ]
    }
  ]

  const emergencyTips = [
    "Know the emergency numbers: 122, 199, 112",
    "Keep a basic first aid kit at home",
    "Learn basic CPR and first aid techniques",
    "Have emergency contacts readily available",
    "Know the location of nearest hospital or clinic"
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-primary-50 to-secondary-50'}`}>
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
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Health Tips for Lagos Residents</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Practical health advice tailored for life in Lagos State
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {healthTips.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${category.color} rounded-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600 dark:text-red-400">
              <Clock className="h-5 w-5 mr-2" />
              Emergency Preparedness
            </CardTitle>
            <CardDescription>
              Essential tips for health emergencies in Lagos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {emergencyTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
          <CardHeader>
            <CardTitle className="text-primary">Local Health Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">LASHMA Benefits</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Free basic healthcare at 326+ centers</li>
                  <li>• Cancer treatment coverage up to ₦5 million</li>
                  <li>• Digital health records access</li>
                  <li>• Reduced waiting times</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Health Hotlines</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Emergency: 122, 199, 112</li>
                  <li>• Lagos State Health Info: 0800-HEALTH</li>
                  <li>• Mental Health Support: Available 24/7</li>
                  <li>• Poison Control: Contact nearest hospital</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
