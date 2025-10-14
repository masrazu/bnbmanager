import React, { useState } from 'react';
import { Menu, X, Home, Package, HelpCircle, Phone, Calculator, Award, Users, CheckCircle, Star, Mail, MapPin, Clock } from 'lucide-react';

const FullServiceBnBWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorInputs, setCalculatorInputs] = useState({
    nightlyRate: 90,
    occupancy: 75
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    bedrooms: '',
    package: '',
    message: ''
  });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const calculateRevenue = () => {
    const nightsPerMonth = 30 * (calculatorInputs.occupancy / 100);
    const monthlyGross = calculatorInputs.nightlyRate * nightsPerMonth;
    const managementFee = monthlyGross * 0.25;
    const netIncome = monthlyGross - managementFee;
    return {
      monthlyGross: monthlyGross.toFixed(0),
      annualGross: (monthlyGross * 12).toFixed(0),
      netMonthly: netIncome.toFixed(0),
      netAnnual: (netIncome * 12).toFixed(0)
    };
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Get form data
  const form = e.target.closest('div').parentElement;
  const formData = new FormData();
  
  formData.append('form-name', 'contact');
  formData.append('name', document.getElementById('name').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('phone', document.getElementById('phone').value);
  formData.append('address', document.getElementById('address').value);
  formData.append('propertyType', document.getElementById('propertyType').value);
  formData.append('bedrooms', document.getElementById('bedrooms').value);
  formData.append('package', document.getElementById('package').value);
  formData.append('message', document.getElementById('message').value);

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });

    if (response.ok) {
      alert('Thank you! We will contact you within 24 hours.');
      // Clear form
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('address').value = '';
      document.getElementById('propertyType').value = '';
      document.getElementById('bedrooms').value = '';
      document.getElementById('package').value = '';
      document.getElementById('message').value = '';
    } else {
      alert('Sorry, there was an error. Please try again or email us directly at bnbmanager.fi@gmail.com');
    }
  } catch (error) {
    alert('Sorry, there was an error. Please try again or email us directly at bnbmanager.fi@gmail.com');
  }
};

  const revenue = calculateRevenue();

  const packages = [
    {
      name: 'Essential',
      price: '17%',
      description: 'For hands-on owners who want professional listing optimization',
      features: [
        'Listing optimization on Airbnb & Booking.com',
        'Guest communication & booking management',
        'Basic coordination with cleaners',
        'Monthly performance reports',
        'Business hours support (9-18 Mon-Fri)',
        'Calendar management across platforms'
      ],
      recommended: false
    },
    {
      name: 'Full Service',
      price: '27%',
      description: 'Completely hands-off – we handle everything',
      features: [
        'Everything in Essential package',
        'Professional cleaning after every checkout',
        'Check-in/check-out management',
        'Dynamic AI pricing optimization',
        '24/7 emergency guest support',
        'Maintenance coordination',
        'Supply restocking & management',
        'Damage inspection with photos',
        'Enhanced financial reporting'
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: '40%',
      description: 'White-glove service with maximum revenue optimization',
      features: [
        'Everything in Full Service package',
        'Professional photography session',
        'Interior design consultation',
        'Premium guest experience & concierge',
        'Dedicated account manager',
        'Tax documentation support',
        'Quarterly property reviews',
        'Priority same-day response',
        'Seasonal maintenance planning'
      ],
      recommended: false
    }
  ];

  const testimonials = [
    {
      name: 'Mikko T.',
      location: 'Helsinki',
      text: 'I travel for work 6 months a year and was wasting my apartment\'s potential. BnB Manager Finland turned it into €18,000 in annual income. They handle absolutely everything – I just check my bank account each month!',
      rating: 5
    },
    {
      name: 'Laura K.',
      location: 'Espoo',
      text: 'After the 2026 regulation announcement, I was confused about whether I could still rent my place. BnB Manager Finland explained everything, ensured I\'m compliant, and my occupancy rate is better than ever.',
      rating: 5
    },
    {
      name: 'Jonas P.',
      location: 'Vantaa',
      text: 'The cleaning quality is exceptional. Guests consistently mention how spotless the apartment is. My ratings went from 4.2 to 4.9 stars in three months.',
      rating: 5
    }
  ];

  const faqs = [
    {
      q: 'What areas do you serve?',
      a: 'Greater Helsinki region: Helsinki, Espoo, and Vantaa. We focus on these areas to provide excellent local service.'
    },
    {
      q: 'How quickly can I start earning?',
      a: 'Typically 2-3 weeks from initial consultation to first booking. Setup time varies based on property readiness.'
    },
    {
      q: 'Can I use my apartment sometimes?',
      a: 'Absolutely! You control your calendar. Block dates whenever you need your property. Many clients rent only when traveling.'
    },
    {
      q: 'What about the 2026 regulations?',
      a: 'Investment properties will be limited to 90 days per year, but owner-occupied properties remain largely unrestricted. We help you stay compliant and maximize your allowed rental days.'
    },
    {
      q: 'How do you calculate your fee?',
      a: 'Our percentage is calculated on gross revenue (nightly rates + cleaning fees + extra guest fees), before Airbnb platform fees and taxes.'
    },
    {
      q: 'What if there\'s property damage?',
      a: 'Airbnb provides Host Damage Protection up to €1,000,000. We also require security deposits and thoroughly document property condition.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="BnB Manager Finland" className="h-10" />
              <span className="ml-2 text-xl font-bold text-gray-900"></span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
              <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-blue-600 transition">Packages</button>
              <button onClick={() => scrollToSection('calculator')} className="text-gray-700 hover:text-blue-600 transition">Calculator</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Contact Us</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Home</button>
              <button onClick={() => scrollToSection('packages')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Packages</button>
              <button onClick={() => scrollToSection('calculator')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Calculator</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Property Into <span className="text-blue-600">Passive Income</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional AirBnB Management for Greater Helsinki Property Owners
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            We handle everything – from guest communication to cleaning, pricing optimization to regulatory compliance. You focus on your life, we focus on your property's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Book Free Consultation
            </button>
            <button onClick={() => scrollToSection('calculator')} className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition border-2 border-blue-600">
              Calculate Your Income
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600">70%</div>
              <div className="text-gray-600 mt-2">Avg. Occupancy</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600">€84</div>
              <div className="text-gray-600 mt-2">Avg. Daily Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-2">Guest Support</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600">0h</div>
              <div className="text-gray-600 mt-2">Your Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Choose BnB Manager Finland?</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We combine local expertise with professional service to maximize your property's potential
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of Helsinki, Espoo, and Vantaa markets. We know what works in your neighborhood.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">2026 Compliance Ready</h3>
              <p className="text-gray-600">Expert guidance on new Finnish regulations. We keep you compliant and maximize your rental days.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Service</h3>
              <p className="text-gray-600">Direct access to your account manager, not a call center. We treat your property like our own.</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Our Clients Typically See:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15-25%</div>
                <div className="text-blue-100">Higher Occupancy Rates</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Time Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-blue-100">Average Guest Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="py-20 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Service Packages</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Choose the service level that fits your needs and budget
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${pkg.recommended ? 'ring-4 ring-blue-600 transform scale-105' : ''}`}>
                {pkg.recommended && (
                  <div className="bg-blue-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6 text-sm">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      pkg.recommended 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              <strong>All packages include:</strong> Complete transparency, monthly reporting, and no hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works – Simple 5-Step Process</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Free Consultation', desc: 'We visit your property and provide revenue estimates' },
              { step: '2', title: 'Choose Package', desc: 'Select the service level that fits your needs' },
              { step: '3', title: 'Setup (1-2 weeks)', desc: 'Photography, listing creation, smart locks' },
              { step: '4', title: 'Go Live', desc: 'Start accepting bookings immediately' },
              { step: '5', title: 'Get Paid', desc: 'Monthly transfers with detailed reports' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section id="calculator" className="py-20 bg-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Potential Income</h2>
            <p className="text-xl text-gray-600">See how much your property could earn with BnB Manager Finland</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Average Nightly Rate (€)
                </label>
                <input
                  type="number"
                  value={calculatorInputs.nightlyRate}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, nightlyRate: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Expected Occupancy (%)
                </label>
                <input
                  type="number"
                  value={calculatorInputs.occupancy}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, occupancy: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Your Estimated Earnings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-100 text-sm mb-1">Monthly Gross Revenue</div>
                  <div className="text-3xl font-bold">€{revenue.monthlyGross}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-100 text-sm mb-1">Your Net Income (after 25% fee)</div>
                  <div className="text-3xl font-bold">€{revenue.netMonthly}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-100 text-sm mb-1">Annual Gross Revenue</div>
                  <div className="text-3xl font-bold">€{revenue.annualGross}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-100 text-sm mb-1">Your Annual Net Income</div>
                  <div className="text-3xl font-bold">€{revenue.netAnnual}</div>
                </div>
              </div>
              <p className="text-center text-blue-100 mt-6 text-sm">
                Based on Full Service package (25% management fee)
              </p>
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Your Free Property Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Real results from real property owners in Helsinki</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our service</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">90-Day Money-Back Guarantee</h3>
            <p className="text-blue-100 mb-6">
              Try BnB Manager Finland risk-free. If you're not satisfied with our service, cancel with 30 days' notice. No penalties. No questions asked.
            </p>
            <p className="text-sm text-blue-200">*Applies to Full Service and Premium packages only</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Phone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Book your free 30-minute property assessment today</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+358 44 9866 440</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">bnbmanager.fi@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Serving</div>
                    <div className="text-gray-600">Helsinki, Espoo & Vantaa</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9:00-18:00</div>
                    <div className="text-gray-600">Sat: 10:00-14:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What to Expect:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>30-minute property walkthrough</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Revenue potential analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Market comparison report</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personalized strategy recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zero obligation to proceed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Free Consultation</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+358 XX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Property Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Street, City"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Property Type</label>
                  <select 
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Number of Bedrooms</label>
                  <select 
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3+">3+ Bedrooms</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Interested Package</label>
                  <select 
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select package</option>
                    <option value="essential">Essential (17%)</option>
                    <option value="full">Full Service (28%)</option>
                    <option value="premium">Premium (40%)</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your property or any questions you have..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
                >
                  Request Free Consultation
                </button>
                
                <p className="text-sm text-gray-600 text-center">
                  We'll contact you within 24 hours to schedule your consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">BnB Manager Finland</span>
              </div>
              <p className="text-gray-400">
                Professional Airbnb Management for Greater Helsinki
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('packages')} className="hover:text-white transition">Packages</button></li>
                <li><button onClick={() => scrollToSection('calculator')} className="hover:text-white transition">Calculator</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition">FAQ</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Essential Management</li>
                <li>Full Service</li>
                <li>Premium Service</li>
                <li>Property Setup</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+358 44 9866 440</li>
                <li>bnbmanager.fi@gmail.com</li>
                <li>Helsinki, Espoo, Vantaa</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BnB Manager Finland. All rights reserved.</p>
            <p className="mt-2 text-sm">Your Property. Our Expertise. Passive Income.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullServiceBnBWebsite;