'use client';

import React from 'react';
import { trackHybridEvent } from '@/lib/helpers';

interface WhatsAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  phoneNumber: string;
  message?: string;
  children: React.ReactNode;
}

export function WhatsAppLink({
  phoneNumber,
  message,
  children,
  className,
  onClick,
  ...rest
}: WhatsAppLinkProps) {

  // Utiliza a API oficial de redirecionamento do WhatsApp
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}${message ? `&text=${encodeURIComponent(message)}` : ''}`;

  const handleTracking = () => {
    // Dispara o pixel/CAPI em background
    trackHybridEvent('Lead', { content_name: 'Contato_WhatsApp' }).catch(console.error);
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTracking}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}