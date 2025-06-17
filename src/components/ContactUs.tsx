import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({
      type: 'submitting',
      message: 'Sending your message...'
    });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email us directly.'
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Contact Us
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Have questions about compound interest or need help with our calculator? 
          We're here to help! Send us a message and we'll get back to you quickly.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">Get In Touch</h3>
            </div>
            <div className="space-y-4 text-slate-600">
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Email</h4>
                <p className="text-sm">codewithrajiv@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Response Time</h4>
                <p className="text-sm">Usually within 24 hours</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Business Hours</h4>
                <p className="text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">Common Topics</h3>
            </div>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span>Calculator questions and support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span>Financial planning guidance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span>Bug reports and feature requests</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span>Partnership inquiries</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600">•</span>
                <span>Privacy and data questions</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="h-5 w-5 text-amber-600" />
              <h4 className="font-semibold text-amber-900">Quick Tip</h4>
            </div>
            <p className="text-amber-800 text-sm">
              Before contacting us, check our FAQ section - it might have the answer 
              you're looking for! For technical issues, please include details about 
              your browser and device.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
            </div>

            {/* Status Message */}
            {status.type !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg border ${
                status.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : status.type === 'error'
                  ? 'bg-red-50 border-red-200 text-red-800'
                  : 'bg-blue-50 border-blue-200 text-blue-800'
              }`}>
                <div className="flex items-center space-x-2">
                  {status.type === 'success' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {status.type === 'error' && <AlertCircle className="h-5 w-5 text-red-600" />}
                  {status.type === 'submitting' && <Clock className="h-5 w-5 text-blue-600 animate-spin" />}
                  <span className="text-sm font-medium">{status.message}</span>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                    disabled={status.type === 'submitting'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                    disabled={status.type === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Brief subject line (optional)"
                  disabled={status.type === 'submitting'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                  disabled={status.type === 'submitting'}
                />
              </div>

              <button
                type="submit"
                disabled={status.type === 'submitting'}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <div className="flex items-center justify-center space-x-2">
                  {status.type === 'submitting' ? (
                    <>
                      <Clock className="h-5 w-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-600">
                <strong>Note:</strong> We respect your privacy and will never share your contact 
                information with third parties. Your message will only be used to respond to 
                your inquiry. See our Privacy Policy for more details.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <section className="bg-slate-900 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Other Ways to Reach Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold mb-2">General Support</h3>
            <p className="text-slate-300 text-sm mb-2">
              Questions about using the calculator or understanding compound interest
            </p>
            <p className="text-blue-400 text-sm">codewithrajiv@gmail.com</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🐛</div>
            <h3 className="font-semibold mb-2">Bug Reports</h3>
            <p className="text-slate-300 text-sm mb-2">
              Found a problem? Help us improve by reporting issues
            </p>
            <p className="text-blue-400 text-sm">codewithrajiv@gmail.com</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold mb-2">Business Inquiries</h3>
            <p className="text-slate-300 text-sm mb-2">
              Partnerships, collaborations, or business opportunities
            </p>
            <p className="text-blue-400 text-sm">codewithrajiv@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;