import * as React from 'react';

interface EmailTemplateProps {
    first: string;
    last: string;
    phone: string;
    msg: string; 
  }
const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  first, last, phone, msg
}) => (
    <div>
        <p>From: {first} {last}</p>
        <p>Phone Number: {phone}</p>
        <p>
            {msg}
        </p>
    </div>
);

export default EmailTemplate;
