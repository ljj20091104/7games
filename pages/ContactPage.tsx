import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'advertising',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="py-16 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-brand-dark mb-4">Get in Touch</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to buy traffic or publish your game? Contact our team. 
            We usually respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-brand-orange mt-1" />
                  <div>
                    <div className="font-bold text-sm text-gray-400 uppercase">Email</div>
                    <div className="text-lg">business@arcadenexus.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-brand-orange mt-1" />
                  <div>
                    <div className="font-bold text-sm text-gray-400 uppercase">Phone</div>
                    <div className="text-lg">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-brand-orange mt-1" />
                  <div>
                    <div className="font-bold text-sm text-gray-400 uppercase">HQ Office</div>
                    <div className="text-lg leading-snug">
                      101 Tech Plaza, Suite 400<br/>
                      San Francisco, CA 94107
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-brand-blue mb-2">For Advertisers</h4>
                <p className="text-sm text-gray-300">
                  Looking for bulk traffic? Ask about our Enterprise API for real-time bidding on user sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for contacting ArcadeNexus. We will be in touch shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Inquiry Type</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="advertising">I want to buy traffic (Advertiser)</option>
                    <option value="publishing">I want to submit a game (Developer)</option>
                    <option value="support">Player Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg shadow-lg hover:bg-orange-600 transform active:scale-95 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};