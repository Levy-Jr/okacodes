interface Window {
  fbq: (
    type: string,
    eventName: string,
    data?: Record<string, any>,
    options?: { eventID: string }
  ) => void;
}