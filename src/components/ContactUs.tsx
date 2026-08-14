import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

function Logo({ className = "w-6 h-6 sm:w-7 sm:h-7" }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#195FD7" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#logo-grad)" />
      <path d="M56 24 L32 54 H48 L40 76 L68 44 H52 Z" fill="#ffffff" stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  );
}

export default function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-1">
            <Logo />
            <div className="flex items-center ml-1 sm:ml-2">
              <span className="text-slate-900">Tik</span>
              <span className="text-[#195FD7]">Flow</span>
            </div>
          </Link>
          <Link to="/" className="text-sm sm:text-base text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        
        {/* Hero Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Contact Us</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column (Info) */}
          <div className="md:col-span-5 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're here to help and answer any questions you might have.
            </p>

            <div className="space-y-6 flex-grow">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#195FD7]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:prstyadev@gmail.com" className="text-gray-900 font-medium mt-0.5 inline-block">prstyadev@gmail.com</a>
                  <p className="text-sm text-gray-500 mt-1">We'll respond as soon as possible</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-700 mt-0.5">Worldwide</p>
                  <p className="text-sm text-gray-500 mt-1">Available globally online</p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Support Hours</h3>
                  <p className="text-gray-700 mt-0.5">24/7 Online Support</p>
                  <p className="text-sm text-gray-500 mt-1">We're always here to help</p>
                </div>
              </div>
            </div>

            {/* FAQ Box */}
            <div className="mt-10 bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Looking for quick answers?</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Check out our FAQ section for answers to common questions.
              </p>
              <Link to="/#faq" className="inline-flex items-center gap-1.5 text-[#195FD7] font-medium hover:text-blue-800 transition-colors text-sm" onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Visit FAQ
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="md:col-span-7">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSent ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center h-full flex flex-col items-center justify-center min-h-[300px]">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#195FD7] focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#195FD7] focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#195FD7] focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900 bg-white appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                    >
                      <option value="" disabled hidden>Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bug Report / Issue">Bug Report / Issue</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Business / Copyright">Business / Copyright</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#195FD7] focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#195FD7] to-[#00B7D7] text-white font-bold text-lg px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all transform active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </main>

      {/* Footer standard minimal */}
      <Footer className="w-full border-t border-gray-200 mt-auto pt-10 pb-10 bg-white" />
    </div>
  );
}
