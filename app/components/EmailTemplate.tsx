import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    phone: string;
    message: string; 
  }
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, phone, message
}) => (
    <div>
        <p>From: {firstName} {lastName}</p>
        <p>Phone Number: {phone}</p>
        <p>
            {message}
        </p>
    </div>
);
