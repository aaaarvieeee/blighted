import * as React from 'react';

interface EmailTemplateProps {
    first: string;
    last: string;
  }
const EmailConfirmationTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  first, last
}) => (
    <div>
        <p>hi {first},</p>
        <p>
            thanks for testing my website!
        </p>

        <p>
            arvie
        </p>
    </div>
);

export default EmailConfirmationTemplate;
