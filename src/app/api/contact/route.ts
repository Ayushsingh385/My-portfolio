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

import { personalInfo } from '@/data';

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
    const privateKey = process.env.EMAILJS_PRIVATE_KEY; // Optional for REST API

    console.log('ENV STATUS:', { hasServiceId: !!serviceId, hasTemplateId: !!templateId, hasPublicKey: !!publicKey });

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

      // Return success but indicate demo mode
      return NextResponse.json({
        success: true,
        message: 'Message received! (Demo Mode: To send real emails, please configure EmailJS in .env.local)',
      });
    }

    // Send email via EmailJS
    console.log('Attempting to send email via EmailJS with Service ID:', serviceId);
    
    try {
      const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          accessToken: privateKey, // Required for server-side requests (strict mode)
          template_params: {
            from_name: body.name,
            from_email: body.email,
            subject: body.subject,
            message: body.message,
            to_email: personalInfo.email,
          },
        }),
      });

      if (!emailjsResponse.ok) {
        const errorText = await emailjsResponse.text();
        console.error('EmailJS Error Status:', emailjsResponse.status);
        console.error('EmailJS Error Text:', errorText);
        throw new Error(`EmailJS failed with status ${emailjsResponse.status}: ${errorText}`);
      }

      console.log('Email sent successfully via EmailJS!');
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      });
    } catch (fetchError) {
      console.error('Network error calling EmailJS:', fetchError);
      throw fetchError;
    }
  } catch (error: unknown) {
    console.error('Contact API Error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again or email directly.';

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}