export const prerender = false;

import type { APIRoute } from 'astro';

const url = 'https://api.mailersend.com/v1/email';

const apiKey = import.meta.env.MAILERSEND_API_KEY;
const fromEmmail = import.meta.env.MAIL_FROM_EMAIL;
const fromName = import.meta.env.MAIL_FROM_NAME;
const toEmmail = import.meta.env.MAIL_TO_EMAIL;
const toName = import.meta.env.MAIL_TO_NAME;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const { subject, html } = body;

  let options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: {
        email: fromEmmail,
        name: fromName
      },
      to: [
        {
          email: toEmmail,
          name: toName
        }
      ],
      subject: subject,
      html: html
    })
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return new Response(JSON.stringify({
        message: 'Email sent successfully'
      }));
    } else {
      const result = await response.json();
      console.log('Failed to send email', result.errors);
      return new Response(JSON.stringify({
        message: 'Failed to send email',
        error: result.errors
      }));
    }
  } catch (error) {
    console.log('Error sending email', error);
    return new Response(JSON.stringify({
      message: 'Error sending email',
      error: error
    }));
  }
}