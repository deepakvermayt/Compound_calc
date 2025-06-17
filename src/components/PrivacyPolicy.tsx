import React from 'react';
import { Shield, Eye, Lock, Cookie, Globe, UserCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We are committed to protecting your privacy and ensuring the security of your 
          personal information. This policy explains how we handle your data.
        </p>
      </section>

      {/* Quick Summary */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
        <div className="flex items-start space-x-4">
          <Shield className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Privacy at a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>No personal data stored permanently</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>No account registration required</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Calculator inputs stay on your device</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>GDPR and CCPA compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="space-y-8">
        {/* Information We Collect */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Calculator Usage Data
              </h3>
              <p className="text-slate-700 mb-3">
                When you use our compound interest calculator, all calculations are performed 
                locally in your browser. We do not store or transmit your financial input data 
                to our servers. This includes:
              </p>
              <ul className="space-y-2 text-slate-600 ml-4">
                <li>• Principal amounts you enter</li>
                <li>• Interest rates you test</li>
                <li>• Time periods you calculate</li>
                <li>• Compounding frequencies you select</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-slate-700 mb-3">
                Like most websites, we automatically collect certain information when you visit:
              </p>
              <ul className="space-y-2 text-slate-600 ml-4">
                <li>• IP address (anonymized for analytics)</li>
                <li>• Browser type and version</li>
                <li>• Device type and operating system</li>
                <li>• Pages visited and time spent</li>
                <li>• Referring website (if applicable)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Contact Form Information
              </h3>
              <p className="text-slate-700 mb-3">
                If you use our contact form, we collect:
              </p>
              <ul className="space-y-2 text-slate-600 ml-4">
                <li>• Name and email address (as provided by you)</li>
                <li>• Message content</li>
                <li>• Date and time of submission</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center space-x-3 mb-6">
            <UserCheck className="h-6 w-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Website Improvement
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Analyze usage patterns to improve user experience</li>
                <li>• Identify and fix technical issues</li>
                <li>• Optimize page loading and performance</li>
                <li>• Understand which features are most valuable</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Communication
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Respond to your contact form inquiries</li>
                <li>• Provide customer support when needed</li>
                <li>• Send important updates about our service</li>
                <li>• Address technical issues you report</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">Data Protection & Security</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                Security Measures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-800">
                <div>
                  <h4 className="font-medium mb-2">Technical Safeguards:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure hosting infrastructure</li>
                    <li>• Regular security updates and monitoring</li>
                    <li>• Protected contact form submissions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Access Controls:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Limited staff access to any collected data</li>
                    <li>• Regular access reviews and updates</li>
                    <li>• Secure authentication for admin areas</li>
                    <li>• Audit trails for data access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Data Retention
              </h3>
              <p className="text-slate-700 mb-3">
                We follow a minimal data retention policy:
              </p>
              <ul className="space-y-2 text-slate-600 ml-4">
                <li>• Calculator inputs: Not stored (processed locally only)</li>
                <li>• Analytics data: Aggregated and anonymized, retained for 26 months</li>
                <li>• Contact form submissions: Retained for 2 years or until resolved</li>
                <li>• Server logs: Retained for 90 days for security monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center space-x-3 mb-6">
            <Cookie className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-slate-900">Cookies & Tracking</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">
                Types of Cookies We Use
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <h4 className="font-medium text-orange-900 mb-2">Essential</h4>
                  <p className="text-sm text-orange-800">
                    Required for basic website functionality
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-medium text-orange-900 mb-2">Analytics</h4>
                  <p className="text-sm text-orange-800">
                    Help us understand usage patterns
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h4 className="font-medium text-orange-900 mb-2">Functional</h4>
                  <p className="text-sm text-orange-800">
                    Remember your preferences
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Managing Your Cookie Preferences
              </h3>
              <p className="text-slate-700 mb-3">
                You can control cookies through your browser settings:
              </p>
              <ul className="space-y-2 text-slate-600 ml-4">
                <li>• Block all cookies (may affect website functionality)</li>
                <li>• Accept only essential cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Set preferences for future visits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">Your Privacy Rights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                GDPR Rights (EU Residents)
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Right to access your personal data</li>
                <li>• Right to correct inaccurate information</li>
                <li>• Right to delete your data</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                CCPA Rights (California Residents)
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Right to know what data is collected</li>
                <li>• Right to delete personal information</li>
                <li>• Right to opt-out of data sales</li>
                <li>• Right to non-discrimination</li>
                <li>• Right to request data categories</li>
                <li>• Right to know data sharing practices</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <p className="text-indigo-800 text-sm">
              <strong>Note:</strong> Since we collect minimal personal data and don't store 
              calculator inputs, most data requests can be fulfilled quickly. Contact us 
              using the information below to exercise your rights.
            </p>
          </div>
        </section>
      </div>

      {/* Contact Information */}
      <section className="bg-slate-900 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Privacy Questions</h3>
            <p className="text-slate-300 mb-4">
              If you have questions about this privacy policy or how we handle your data, 
              please don't hesitate to reach out.
            </p>
            <div className="space-y-2 text-slate-300">
              <p>📧 Email: codewithrajiv@gmail.com</p>
              <p>📱 Response time: Within 48 hours</p>
              <p>🌍 Available: Monday - Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Data Protection Officer</h3>
            <p className="text-slate-300 mb-4">
              For formal data protection inquiries or to exercise your privacy rights:
            </p>
            <div className="space-y-2 text-slate-300">
              <p>📧 Email: codewithrajiv@gmail.com</p>
              <p>📋 Include: Your specific request and contact information</p>
              <p>⏱️ Response: Within 30 days as required by law</p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <div className="text-center space-y-2">
        <p className="text-sm text-slate-500">
          This privacy policy was last updated on January 2025.
        </p>
        <p className="text-sm text-slate-500">
          We may update this policy periodically. Significant changes will be highlighted 
          on our website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;