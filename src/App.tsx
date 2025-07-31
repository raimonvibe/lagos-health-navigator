import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Sun, Moon, Phone, MapPin, Shield, Heart, Stethoscope, Clock, Users, Search, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import HealthTips from './pages/HealthTips'
import YoungAdultHealth from './pages/YoungAdultHealth'
import MentalHealthSupport from './pages/MentalHealthSupport'
import PreventiveCare from './pages/PreventiveCare'
import './App.css'

function HomePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const emergencyNumbers = [
    { number: '122', label: 'Primary Emergency', description: '24/7 Federal Ministry of Health' },
    { number: '199', label: 'Alternative Emergency', description: 'Universal emergency access' },
    { number: '112', label: 'Additional Emergency', description: 'Emergency contact' }
  ]

  const quickActions = [
    { icon: MapPin, label: 'Find Hospitals', color: 'bg-primary' },
    { icon: Shield, label: 'Check Insurance', color: 'bg-secondary' },
    { icon: Phone, label: 'Emergency Guide', color: 'bg-accent' }
  ]

  const facilities = [
    {
      name: 'Lagos State University Teaching Hospital (LASUTH)',
      type: 'Tertiary Hospital',
      address: 'Ikeja, Lagos State',
      phone: '+234 1 234 5678',
      rating: 4.2,
      insurance: ['LASHMA', 'Private Insurance'],
      hours: '24/7'
    },
    {
      name: 'Lagos State Accident & Emergency Centre',
      type: 'Emergency Center',
      address: 'Old Toll-Gate, Lagos-Ibadan Expressway',
      phone: '+234 1 234 5679',
      rating: 4.0,
      insurance: ['LASHMA', 'Emergency Services'],
      hours: '24/7'
    },
    {
      name: 'Emergency Response Services Ltd',
      type: 'Emergency Services',
      address: '6 Adeshina Street, Ikeja',
      phone: '+234 814 682 1431',
      rating: 4.5,
      insurance: ['Private', 'LASHMA'],
      hours: '24/7'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-primary-50 to-secondary-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-primary-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Lagos Health Navigator</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Your Guide to Better Healthcare 🏥✨</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleDarkMode}
            className="p-2"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-10 dark:opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6 space-x-4">
            <Heart className="h-12 w-12 text-primary animate-pulse" />
            <Stethoscope className="h-12 w-12 text-secondary animate-bounce" />
            <Shield className="h-12 w-12 text-accent animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Your Complete Guide to <span className="text-primary">Lagos Healthcare</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Find the right care, at the right time, at the right price
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {quickActions.map((action, index) => (
              <Button 
                key={index} 
                className={`${action.color} hover:opacity-90 text-white px-6 py-3`}
                onClick={() => {
                  const sectionMap: { [key: string]: string } = {
                    'Find Hospitals': 'facilities-section',
                    'Check Insurance': 'insurance-section', 
                    'Emergency Guide': 'emergency-section'
                  };
                  const sectionId = sectionMap[action.label];
                  if (sectionId) {
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <action.icon className="h-5 w-5 mr-2" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section id="emergency-section" className="py-16 px-4 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
              <Phone className="h-8 w-8 text-red-600 dark:text-red-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">🚨 EMERGENCY NUMBERS</h3>
            <p className="text-slate-600 dark:text-slate-300">Quick access to emergency medical services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {emergencyNumbers.map((emergency, index) => (
              <Card key={index} className="border-2 border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-colors cursor-pointer">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-3xl font-bold text-red-600 dark:text-red-400">{emergency.number}</CardTitle>
                  <CardDescription className="font-semibold text-slate-900 dark:text-white">{emergency.label}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">{emergency.description}</p>
                  <Button 
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white w-full"
                    onClick={() => window.open(`tel:${emergency.number}`, '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Facility Finder */}
      <section id="facilities-section" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Find Healthcare Facilities</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">Locate hospitals, clinics, and health centers near you</p>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input 
                  placeholder="Search by location, facility name, or service..." 
                  className="pl-10 py-3"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{facility.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{facility.type}</Badge>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{facility.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {facility.address}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <Phone className="h-4 w-4 mr-2" />
                      {facility.phone}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <Clock className="h-4 w-4 mr-2" />
                      {facility.hours}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {facility.insurance.map((ins, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{ins}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-primary hover:bg-primary-600"
                    onClick={() => {
                      const encodedAddress = encodeURIComponent(facility.address);
                      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
                    }}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Navigator */}
      <section id="insurance-section" className="py-16 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-full mb-4">
              <Shield className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">LASHMA Insurance Navigator</h3>
            <p className="text-slate-600 dark:text-slate-300">Your guide to Lagos State Health Management Agency benefits</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  Registration Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Cancer treatment coverage up to ₦5 million</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Access to 326 Primary Health Centers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Digital health records via Lagos SHIP</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Reduced wait times (15-20 minutes)</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-secondary hover:bg-secondary-600"
                  onClick={() => window.open('https://www.lashmaregulations.com.ng/', '_blank')}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Register for LASHMA
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-accent mr-2" />
                  How to Register
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Visit Registration Portal</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Access lashmaregulations.com.ng</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Get CIN Number</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Company Identification Number system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Complete Registration</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Submit required documents</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <p className="text-sm font-medium mb-2">Contact Information:</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">17/19 Kafi Street, Alausa Ikeja Lagos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Lagos Health Navigator</h4>
                  <p className="text-sm text-slate-400">Better Healthcare Access</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Your comprehensive guide to navigating Lagos healthcare system with confidence.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Emergency Services</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Emergency: 122</li>
                <li>Alternative: 199</li>
                <li>Additional: 112</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://www.lashmaregulations.com.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LASHMA Registration</a></li>
                <li><a href="https://lagosministryofhealth.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Lagos Ministry of Health</a></li>
                <li>
                  <button 
                    className="hover:text-primary cursor-pointer bg-transparent border-none text-sm text-slate-400 p-0"
                    onClick={() => document.getElementById('facilities-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Find Hospitals
                  </button>
                </li>
                <li>
                  <button 
                    className="hover:text-primary cursor-pointer bg-transparent border-none text-sm text-slate-400 p-0"
                    onClick={() => document.getElementById('insurance-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Insurance Guide
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/health-tips" className="hover:text-primary transition-colors">
                    Health Tips
                  </Link>
                </li>
                <li>
                  <Link to="/young-adult-health" className="hover:text-primary transition-colors">
                    Young Adult Health
                  </Link>
                </li>
                <li>
                  <Link to="/mental-health-support" className="hover:text-primary transition-colors">
                    Mental Health Support
                  </Link>
                </li>
                <li>
                  <Link to="/preventive-care" className="hover:text-primary transition-colors">
                    Preventive Care
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 Lagos Health Navigator. Built to improve healthcare access in Lagos State.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/health-tips" element={<HealthTips />} />
      <Route path="/young-adult-health" element={<YoungAdultHealth />} />
      <Route path="/mental-health-support" element={<MentalHealthSupport />} />
      <Route path="/preventive-care" element={<PreventiveCare />} />
    </Routes>
  )
}

export default App
