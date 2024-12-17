import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Dribbble } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              {...fadeInUp}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg text-gray-600 mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:hello@designcraft.com" 
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:bg-primary/5">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>hello@designcraft.com</span>
                </a>

                <a 
                  href="tel:+15551234567" 
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:bg-primary/5">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </a>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { Icon: Twitter, href: 'https://twitter.com/designcraft', label: 'Twitter' },
                    { Icon: Linkedin, href: 'https://linkedin.com/company/designcraft', label: 'LinkedIn' },
                    { Icon: Dribbble, href: 'https://dribbble.com/designcraft', label: 'Dribbble' }
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-primary/5 transition-colors group"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-medium hover:bg-primary/90 transform hover:scale-[1.02] transition-all duration-200"
                >
                  {t('contact.send')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </main>
  );
}