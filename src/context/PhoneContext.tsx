import React, { createContext, useContext } from 'react';

interface PhoneContextType {
  rawNumber: string; // '919879524365'
  displayNumber: string; // '+91 98795 24365'
  getWhatsAppLink: (customMessage?: string) => string;
  getTelLink: () => string;
}

const PHONE_RAW = '919879524365';
const PHONE_DISPLAY = '+91 98795 24365';

const PhoneContext = createContext<PhoneContextType | undefined>(undefined);

export const PhoneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getWhatsAppLink = (customMessage?: string): string => {
    const defaultMsg = 'Hello Rajkot Taxi Point, I want to book a taxi. Please provide car availability and fare details.';
    const text = customMessage || defaultMsg;
    return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(text)}`;
  };

  const getTelLink = (): string => {
    return `tel:+${PHONE_RAW}`;
  };

  return (
    <PhoneContext.Provider
      value={{
        rawNumber: PHONE_RAW,
        displayNumber: PHONE_DISPLAY,
        getWhatsAppLink,
        getTelLink,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhone = (): PhoneContextType => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error('usePhone must be used within a PhoneProvider');
  }
  return context;
};
