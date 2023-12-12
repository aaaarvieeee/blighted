import { Resend } from 'resend';
import EmailTemplate from '../../components/EmailTemplate';
import EmailConfirmationTemplate from '../../components/EmailConfirmationTemplate';

export async function POST(request) {
  
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const body = await request.json();
    console.log(body);
    const { firstName, lastName, PhoneNumber, email, message } = body;

    const confirmation = await resend.emails.send({
      from: 'blighted <info@blighted.art>',
      to: email,
      subject: 'Confirmation Email',
      react: EmailConfirmationTemplate({ first: firstName, last: lastName}),
    });

    const data2 = await resend.emails.send({
      from: 'blighted <info@blighted.art>',
      to: "sangalangarvie@gmail.com",
      subject: 'Customer Booking',
      react: EmailTemplate({ first: firstName, msg: message }),
    });

    return Response.json({confirmation, data2});
  } catch (error) {
    return Response.json({ error });
  }
}