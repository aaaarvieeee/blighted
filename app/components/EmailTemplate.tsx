import * as React from 'react';

interface EmailTemplateProps {
    first: string;
    msg: string;

  }
const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  first, msg
}) => (
    <div>
        <p>{first} tested your site!</p>

        <p>
            {msg}
        </p>
    </div>
);

export default EmailTemplate;
