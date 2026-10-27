import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PhoneProvider } from './context/PhoneContext';
import { DemoPhoneBanner } from './components/DemoPhoneBanner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OurCarsPage } from './pages/OurCarsPage';
import { BookACarPage } from './pages/BookACarPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <PhoneProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#141738] text-slate-100 selection:bg-orange-500 selection:text-white flex flex-col antialiased">
          {/* Top Demo Banner for WhatsApp number visibility */}
          <DemoPhoneBanner />

          {/* Dedicated Page Navigation Header */}
          <Header />

          {/* Main Routing Container */}
          <main className="flex-1 pb-16 md:pb-0">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />

              {/* Dedicated Menu Pages with SEO-friendly URLs */}
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/our-cars" element={<OurCarsPage />} />
              <Route path="/book-a-car" element={<BookACarPage />} />
              <Route path="/contact-us" element={<ContactPage />} />

              {/* Friendly aliases & fallbacks */}
              <Route path="/about" element={<Navigate to="/about-us" replace />} />
              <Route path="/cars" element={<Navigate to="/our-cars" replace />} />
              <Route path="/fleet" element={<Navigate to="/our-cars" replace />} />
              <Route path="/book" element={<Navigate to="/book-a-car" replace />} />
              <Route path="/booking" element={<Navigate to="/book-a-car" replace />} />
              <Route path="/contact" element={<Navigate to="/contact-us" replace />} />

              {/* Multilingual SEO Landing Routes - Gujarati with hyphens (-) */}
              <Route path="/રાજકોટ-ટેક્સી-સર્વિસ" element={<HomePage />} />
              <Route path="/રાજકોટ-કેબ-બુકિંગ" element={<HomePage />} />
              <Route path="/રાજકોટ-એરપોર્ટ-ટેક્સી" element={<HomePage />} />
              <Route path="/રાજકોટ-થી-અમદાવાદ-ટેક્સી" element={<HomePage />} />

              {/* Multilingual SEO Landing Routes - Hindi with hyphens (-) */}
              <Route path="/राजकोट-टैक्सी-सेवा" element={<HomePage />} />
              <Route path="/राजकोट-कैब-बुकिंग" element={<HomePage />} />
              <Route path="/राजकोट-एयरपोर्ट-टैक्सी" element={<HomePage />} />
              <Route path="/राजकोट-से-अहमदाबाद-टैक्सी" element={<HomePage />} />

              {/* Multilingual SEO Landing Routes - English / Transliterated */}
              <Route path="/rajkot-taxi" element={<HomePage />} />
              <Route path="/rajkot-cab-booking" element={<HomePage />} />
              <Route path="/rajkot-cab" element={<HomePage />} />
              <Route path="/rajkot-taxi-service" element={<HomePage />} />
              <Route path="/rajkot-taxi-seva" element={<HomePage />} />

              {/* Automatic Redirects for Space-Encoded URLs to Clean Hyphenated (-) URLs */}
              <Route path="/rajkot cab" element={<Navigate to="/rajkot-cab" replace />} />
              <Route path="/rajkot taxi" element={<Navigate to="/rajkot-taxi" replace />} />
              <Route path="/rajkot cab booking" element={<Navigate to="/rajkot-cab-booking" replace />} />
              <Route path="/રાજકોટ ટેક્સી સર્વિસ" element={<Navigate to="/રાજકોટ-ટેક્સી-સર્વિસ" replace />} />
              <Route path="/રાજકોટ કેબ બુકિંગ" element={<Navigate to="/રાજકોટ-કેબ-બુકિંગ" replace />} />
              <Route path="/રાજકોટ એરપોર્ટ ટેક્સી" element={<Navigate to="/રાજકોટ-એરપોર્ટ-ટેક્સી" replace />} />
              <Route path="/રાજકોટ થી અમદાવાદ ટેક્સી" element={<Navigate to="/રાજકોટ-થી-અમદાવાદ-ટેક્સી" replace />} />
              <Route path="/राजकोट टैक्सी सेवा" element={<Navigate to="/राजकोट-टैक्सी-सेवा" replace />} />
              <Route path="/राजकोट कैब बुकिंग" element={<Navigate to="/राजकोट-कैब-बुकिंग" replace />} />

              {/* Dynamic Multilingual Keyword Fallback Route (handles any /:keywordSlug or search query) */}
              <Route path="/:keywordSlug" element={<HomePage />} />

              {/* Catch-all redirect to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Footer with dedicated page navigation & centered copyright */}
          <Footer />

          {/* Floating WhatsApp Action & Mobile Bottom Bar */}
          <FloatingWhatsApp />
        </div>
      </PhoneProvider>
    </BrowserRouter>
  );
}
