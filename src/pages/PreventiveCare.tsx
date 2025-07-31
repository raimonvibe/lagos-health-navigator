import { Shield, Calendar, Heart, Eye, Stethoscope, ArrowLeft, CheckCircle, Clock, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { useDarkMode } from '@/contexts/DarkModeContext'

export default function PreventiveCare() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const screeningSchedule = [
    {
      ageGroup: "18-29 Years",
      screenings: [
        { test: "Blood Pressure", frequency: "Every 2 years" },
        { test: "Cholesterol", frequency: "Every 5 years" },
        { test: "Diabetes (Blood Sugar)", frequency: "Every 3 years" },
        { test: "STI Screening", frequency: "Annually if sexually active" },
        { test: "Pap Smear (Women)", frequency: "Every 3 years" },
        { test: "Breast Self-Exam", frequency: "Monthly" },
        { test: "Dental Check-up", frequency: "Every 6 months" },
        { test: "Eye Exam", frequency: "Every 2 years" }
      ]
    },
    {
      ageGroup: "30-39 Years",
      screenings: [
        { test: "Blood Pressure", frequency: "Annually" },
        { test: "Cholesterol", frequency: "Every 5 years" },
        { test: "Diabetes Screening", frequency: "Every 3 years" },
        { test: "Mammogram (Women)", frequency: "Consider starting" },
        { test: "Cervical Cancer Screening", frequency: "Every 3 years" },
        { test: "Skin Cancer Check", frequency: "Annually" },
        { test: "Dental Check-up", frequency: "Every 6 months" },
        { test: "Eye Exam", frequency: "Every 2 years" }
      ]
    },
    {
      ageGroup: "40+ Years",
      screenings: [
        { test: "Blood Pressure", frequency: "Annually" },
        { test: "Cholesterol", frequency: "Annually" },
        { test: "Diabetes Screening", frequency: "Annually" },
        { test: "Mammogram (Women)", frequency: "Annually" },
        { test: "Colonoscopy", frequency: "Every 10 years (starting at 45)" },
        { test: "Prostate Screening (Men)", frequency: "Discuss with doctor" },
        { test: "Bone Density (Women)", frequency: "Every 2 years after 65" },
        { test: "Eye Exam", frequency: "Annually" }
      ]
    }
  ]

  const vaccinations = [
    {
      vaccine: "COVID-19",
      schedule: "Initial series + boosters as recommended",
      importance: "Prevents severe illness and hospitalization"
    },
    {
      vaccine: "Influenza (Flu)",
      schedule: "Annually",
      importance: "Reduces risk of seasonal flu complications"
    },
    {
      vaccine: "Hepatitis B",
      schedule: "3-dose series if not previously vaccinated",
      importance: "Prevents liver infection and cancer"
    },
    {
      vaccine: "Yellow Fever",
      schedule: "Required for travel, 10-year validity",
      importance: "Mandatory for international travel from Nigeria"
    },
    {
      vaccine: "Tetanus/Diphtheria",
      schedule: "Every 10 years",
      importance: "Prevents serious bacterial infections"
    },
    {
      vaccine: "HPV (Human Papillomavirus)",
      schedule: "2-3 doses (ages 9-26)",
      importance: "Prevents cervical and other cancers"
    },
    {
      vaccine: "Meningitis",
      schedule: "As recommended by healthcare provider",
      importance: "Prevents serious brain and spinal cord infection"
    }
  ]

  const preventiveTips = [
    {
      category: "Daily Habits",
      icon: Heart,
      color: "bg-red-500",
      tips: [
        "Eat a balanced diet rich in fruits and vegetables",
        "Exercise for at least 30 minutes daily",
        "Get 7-9 hours of quality sleep",
        "Stay hydrated with clean water",
        "Practice good hygiene and handwashing"
      ]
    },
    {
      category: "Health Monitoring",
      icon: Stethoscope,
      color: "bg-blue-500",
      tips: [
        "Monitor your blood pressure regularly",
        "Keep track of your weight and BMI",
        "Perform monthly self-examinations",
        "Keep a health diary or use health apps",
        "Know your family medical history"
      ]
    },
    {
      category: "Risk Reduction",
      icon: Shield,
      color: "bg-green-500",
      tips: [
        "Don't smoke or use tobacco products",
        "Limit alcohol consumption",
        "Use sunscreen and protective clothing",
        "Practice safe sex and get regular STI testing",
        "Manage stress through healthy coping mechanisms"
      ]
    },
    {
      category: "Environmental Health",
      icon: Eye,
      color: "bg-purple-500",
      tips: [
        "Ensure clean water and proper sanitation",
        "Use mosquito nets to prevent malaria",
        "Maintain clean living and working environments",
        "Be aware of air quality and pollution",
        "Practice food safety and proper storage"
      ]
    }
  ]

  const earlyDetectionSigns = [
    "Unusual lumps or bumps anywhere on the body",
    "Changes in moles, freckles, or skin appearance",
    "Persistent cough or hoarseness",
    "Changes in bowel or bladder habits",
    "Unusual bleeding or discharge",
    "Persistent fatigue or unexplained weight loss",
    "Difficulty swallowing or persistent indigestion",
    "Changes in vision or hearing"
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-green-50 to-blue-50'}`}>
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
            <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Preventive Care Guide</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Stay healthy with regular screenings, vaccinations, and preventive measures
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Recommended Health Screenings by Age
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {screeningSchedule.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{group.ageGroup}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {group.screenings.map((screening, screeningIndex) => (
                      <div key={screeningIndex} className="flex justify-between items-start">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {screening.test}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {screening.frequency}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Essential Vaccinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaccinations.map((vaccination, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">{vaccination.vaccine}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {vaccination.schedule}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {vaccination.importance}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {preventiveTips.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 ${category.color} rounded-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
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

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="text-orange-600">Early Detection Warning Signs</CardTitle>
              <CardDescription>
                Contact your healthcare provider if you notice any of these signs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {earlyDetectionSigns.map((sign, index) => (
                  <li key={index} className="flex items-start">
                    <Clock className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{sign}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
            <CardHeader>
              <CardTitle className="text-primary">LASHMA Preventive Care Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Covered Screenings</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Annual health check-ups</li>
                    <li>• Blood pressure and diabetes screening</li>
                    <li>• Cancer screening programs</li>
                    <li>• Immunization services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Health Promotion</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Health education programs</li>
                    <li>• Wellness workshops</li>
                    <li>• Nutrition counseling</li>
                    <li>• Exercise and fitness programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Access Points</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• 326+ Primary Health Centers</li>
                    <li>• Community health outreach</li>
                    <li>• Mobile health clinics</li>
                    <li>• Digital health platforms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-green-600">Prevention is the Best Medicine</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Preventive care is one of the most effective ways to maintain good health and catch potential 
              problems early when they're most treatable. Regular screenings, vaccinations, and healthy 
              lifestyle choices can prevent many diseases and improve your quality of life. Work with your 
              healthcare provider to create a personalized preventive care plan that's right for your age, 
              health status, and risk factors.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
