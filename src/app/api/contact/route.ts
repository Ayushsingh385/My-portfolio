import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact Form API Route
 * Handles form submissions and sends emails via EmailJS
 *
 * Note: To enable email sending:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Set up an email service and template
 * 3. Add environment variables to .env.local:
 *    - NEXT_PUBLIC_EMAILJS_SERVICE_ID
 *    - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 *    - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 */

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Validates the contact form data
 */
function validateFormData(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.subject || data.subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate form data
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Get EmailJS configuration from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS not configured. Contact form submission logged but not sent.');

      // Log the submission for development
      console.log('Contact Form Submission:', {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        timestamp: new Date().toISOString(),
      });

      // Return success for development/demo purposes
      return NextResponse.json({
        success: true,
        message: 'Message received! (Note: EmailJS not configured - running in demo mode)',
      });
    }

    // Send email via EmailJS
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: body.name,
          from_email: body.email,
          subject: body.subject,
          message: body.message,
          to_email: 'your-email@example.com', // Replace with your email
        },
      }),
    });

    if (!emailjsResponse.ok) {
      const errorData = await emailjsResponse.json();
      console.error('EmailJS Error:', errorData);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Contact API Error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again or email directly.',
      },
      { status: 500 }
    );
  }
}