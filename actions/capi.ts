'use server';

import { headers } from 'next/headers';

export async function sendEventToMetaCAPI(
  eventName: string,
  eventId: string,
  eventUrl: string,
  customData: Record<string, any> = {}
) {
  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.error('Meta CAPI: Missing credentials.');
    return;
  }

  const headersList = await headers();
  const clientIp = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || '0.0.0.0';
  const userAgent = headersList.get('user-agent') || '';

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_id: eventId,
        event_source_url: eventUrl,
        user_data: {
          client_ip_address: clientIp.split(',')[0].trim(),
          client_user_agent: userAgent,
        },
        custom_data: customData,
      },
    ],
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Meta CAPI Error:', errorData);
    }
  } catch (error) {
    console.error('Falha na requisição para a API do Meta:', error);
  }
}