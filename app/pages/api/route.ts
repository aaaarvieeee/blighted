import { Resend } from 'resend';
import EmailTemplate from '../../components/EmailTemplate';

export async function POST(request) {
  
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const body = await request.json();
    console.log(body);
    const { firstName, lastName, PhoneNumber, email, message } = body;
    const data = await resend.emails.send({
      from: 'blighted <info@blighted.art>',
      to: email,
      subject: 'Confirmation Email',
      react: EmailTemplate({ first: firstName, last: lastName, phone: PhoneNumber, msg: message }),
    });
    


    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}