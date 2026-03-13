"use client"

import { sendEventToMetaCAPI } from '@/actions/capi';

export const trackHybridEvent = async (
  eventName: string,
  customData: Record<string, any> = {}
) => {
  // Gera UUID único e nativo para desduplicação
  const eventId = crypto.randomUUID();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 1. Disparo Client-Side (Pixel)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, customData, { eventID: eventId });
  }

  // 2. Disparo Server-Side (CAPI)
  await sendEventToMetaCAPI(eventName, eventId, currentUrl, customData);
};