import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
    <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
      New Message from {name}
    </h2>
    <p style={{ margin: '0 0 4px' }}>
      <strong>Email:</strong> {email}
    </p>
    <p style={{ margin: '0 0 12px' }}>
      <strong>Message:</strong>
    </p>
    <p style={{ margin: 0, padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      {message}
    </p>
  </div>
);
