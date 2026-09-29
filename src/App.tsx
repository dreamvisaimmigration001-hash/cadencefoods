/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PurposePage } from './pages/PurposePage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { WhyCadencePage } from './pages/WhyCadencePage';
import { ContactPage } from './pages/ContactPage';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [inquiryCategory, setInquiryCategory] = useState<string>('Co-Packing');
  const [inquiryNotes, setInquiryNotes] = useState<string>('');

  // Sync with URL hash on mount and hash changes for true multi-page navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'purpose', 'capabilities', 'why-cadence', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, category?: string, notes?: string) => {
    if (category) setInquiryCategory(category);
    if (notes) setInquiryNotes(notes);

    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#181A1E]">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => navigateTo(page)}
      />

      {/* Multi-Page Route Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}

        {currentPage === 'purpose' && (
          <PurposePage onNavigate={navigateTo} />
        )}

        {currentPage === 'capabilities' && (
          <CapabilitiesPage onNavigate={navigateTo} />
        )}

        {currentPage === 'why-cadence' && (
          <WhyCadencePage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialCategory={inquiryCategory}
            initialNotes={inquiryNotes}
          />
        )}
      </main>

      {/* Minimal Premium Footer */}
      <Footer onNavigate={(page) => navigateTo(page)} />
    </div>
  );
}
