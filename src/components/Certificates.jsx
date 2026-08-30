import React, { useState, useEffect } from 'react';
import { certificates } from '../data/portfolioData';

// ── Lightbox Modal ──────────────────────────────────────────────────────────
const CertModal = ({ cert, onClose }) => {
  const isPdf = cert.certUrl?.endsWith('.pdf');

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#111] rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{cert.icon}</span>
            <div>
              <h3 className="text-white font-black text-sm md:text-base leading-tight">{cert.name}</h3>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">{cert.issuer}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Download / Open in new tab */}
            <a
              href={cert.certUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold hover:bg-white/20 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {isPdf ? 'Open PDF' : 'Open Image'}
            </a>
            {/* Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-200"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Certificate viewer */}
        <div className="flex-1 overflow-auto bg-[#0a0a0a] flex items-center justify-center" style={{ minHeight: '400px' }}>
          {isPdf ? (
            <iframe
              src={`${cert.certUrl}#toolbar=1&navpanes=0`}
              title={cert.name}
              className="w-full"
              style={{ height: '70vh', border: 'none' }}
            />
          ) : (
            <img
              src={cert.certUrl}
              alt={cert.name}
              className="max-w-full max-h-[70vh] object-contain p-4"
              decoding="async"
            />
          )}
        </div>
      </div>
    </div>
  );
};

// ── Certificate Card ────────────────────────────────────────────────────────
const CertificateCard = ({ cert, aosDelay, onView }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group bg-black/25 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col"
    >
      {/* Badge / Certificate Preview Image */}
      <div
        className="relative bg-black/30 flex items-center justify-center overflow-hidden cursor-pointer"
        style={{ minHeight: '180px' }}
        onClick={() => onView(cert)}
      >
        {cert.badge && !imgError ? (
          <img
            src={cert.badge}
            alt={`${cert.name} badge`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
            onError={() => setImgError(true)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-7xl select-none py-8">{cert.icon}</span>
        )}
        {/* Year badge overlay */}
        <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-black tracking-widest px-3 py-1 rounded-full border border-white/20">
          {cert.year}
        </span>
        {/* Hover overlay with eye icon */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-white/90 text-black font-black text-sm px-5 py-2.5 rounded-full shadow-xl">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Certificate
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Issuer */}
        <p className="text-red-300 text-[11px] font-black tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="text-base">{cert.icon}</span>
          {cert.issuer}
        </p>

        {/* Title */}
        <h3 className="text-white text-base font-black leading-tight mb-2 group-hover:text-red-200 transition-colors duration-300">
          {cert.name}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-xs leading-relaxed flex-1 mb-4">
          {cert.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          {/* View Certificate Button */}
          <button
            onClick={() => onView(cert)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white text-black text-xs font-black tracking-wide hover:bg-red-50 hover:scale-105 transition-all duration-300 shadow-md"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Certificate
          </button>

          {/* Verify Button */}
          {cert.verifyUrl ? (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-full border border-white/20 text-white/70 text-xs font-bold tracking-wide hover:border-white/50 hover:text-white transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verify Credential
            </a>
          ) : (
            <span className="flex items-center justify-center gap-2 w-full py-2 rounded-full border border-white/10 text-white/25 text-xs font-bold tracking-wide cursor-default">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Credential
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Main Section ────────────────────────────────────────────────────────────
const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certifications"
      className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-black/20 border border-black/20 rounded-full px-5 py-1.5 text-sm text-black/70 font-bold mb-6">
            🏅 Industry Recognized
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Certifications
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-xl mx-auto">
            Industry-recognized credentials validating my expertise in cloud, AI, and software development.
          </p>
        </div>

        {/* Stats row */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-6 mb-14">
          {[
            { value: `${certificates.featured.length}`, label: 'Certifications' },
            { value: '3', label: 'Cloud & AI Certs' },
            { value: '2', label: 'AWS & Oracle' },
          ].map((stat) => (
            <div key={stat.label} className="bg-black/20 backdrop-blur-sm border border-black/20 rounded-2xl px-8 py-4 text-center">
              <div className="text-3xl font-black text-black">{stat.value}</div>
              <div className="text-red-100 text-xs font-bold tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard
              key={cert.name}
              cert={cert}
              aosDelay={String(index * 100)}
              onView={setActiveCert}
            />
          ))}
        </div>

        {/* View Full Resume CTA */}
        {certificates.viewAllUrl && (
          <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center">
            <a
              href={certificates.viewAllUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Full Resume
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </section>
  );
};

export default Certificates;
