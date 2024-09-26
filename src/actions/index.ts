import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { TestDriveEmail } from "../emails";

export const server = {
  testDrive:  defineAction({
    accept: 'form',
    input: z.object({
        "full_name": z.string(),
    }),
    handler: async ({  }) => {
        try {
            const response = await SendMail("Nueva Solicitud de Test Drive", TestDriveEmail(""));
            return response || "response...";
        } catch (error) {
            throw new ActionError({
                code: "INTERNAL_SERVER_ERROR",
                message: "No se pudo enviar el correo.",
            });
        }
    },
})
}

export const SendMail = async (subject: string, html: string) => {
  let url = 'https://api.mailersend.com/v1/email';
  const apiKey = import.meta.env.MAILERSEND_API_KEY;
  const fromEmmail = import.meta.env.MAIL_FROM_EMAIL;
  const fromName = import.meta.env.MAIL_FROM_NAME;
  const toEmmail = import.meta.env.MAIL_TO_EMAIL;
  const toName = import.meta.env.MAIL_TO_NAME;

  const body = {
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
      text: subject,
      html: html
    };

  let options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log('Email sent successfully:');
      return true;
    } else {
      const result = await response.json();
      console.error('Failed to send email:', result.errors);
      return result.errors;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return error;
  }
}