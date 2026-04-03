'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { Section, SectionHeader, Card, Input, Textarea, Button } from '@/components/ui';
import { personalInfo } from '@/data';

/**
 * Contact Section Component
 * Working contact form with EmailJS integration
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS integration
      // Note: You'll need to set up EmailJS and configure your environment variables
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Ayushsingh385' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ayush-kumar-1singh' },
  ];

  return (
    <Section id="contact" background="gray">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind or want to chat? Feel free to reach out!"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Follow me on
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 md:p-8" glass>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                id="subject"
                name="subject"
                type="text"
                label="Subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <Textarea
                id="message"
                name="message"
                label="Message"
                placeholder="Tell me about your project or just say hi!"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
                leftIcon={!isSubmitting && <Send className="w-5 h-5" />}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}