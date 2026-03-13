'use client';

import { useEffect, useRef } from 'react';
import { trackHybridEvent } from '@/lib/helpers';

interface Props {
  eventName: string;
  contentName: string;
  contentCategory?: string;
}

export function PageTracker({ eventName, contentName, contentCategory }: Props) {
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      const customData = {
        content_name: contentName,
        ...(contentCategory && { content_category: contentCategory })
      };

      trackHybridEvent(eventName, customData);
      tracked.current = true;
    }
  }, [eventName, contentName, contentCategory]);

  return null;
}