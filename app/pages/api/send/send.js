import { EmailTemplate } from 'app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    const { firstName, lastName, PhoneNumber, email, message } = body;
    const data = await resend.emails.send({
      from: 'blighted <info@blighted.art>',
      to: email,
      subject: 'Confirmation Email',
      react: EmailTemplate({ firstName, lastName, PhoneNumber, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}