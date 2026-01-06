"use client";

import Flipbook from "@/components/ui/Flipbook";
import ChapterBar from "@/components/ui/ChapterBar";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { chapters, getChapterIndexByPage, getSpreadIndexByPage, getFirstPageOfSpread } from "@/data/toc-chapters";

// Generate array of page numbers (98 pages total)
const TOTAL_PAGES = 98;
const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

export default function Home() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const [flipbookKey, setFlipbookKey] = useState(0);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // For desktop: create page pairs (spreads)
  const createSpreads = () => {
    const spreads: number[][] = [];
    spreads.push([1]);
    for (let i = 2; i <= TOTAL_PAGES; i += 2) {
      if (i + 1 <= TOTAL_PAGES) {
        spreads.push([i, i + 1]);
      } else {
        spreads.push([i]);
      }
    }
    return spreads;
  };

  const spreads = createSpreads();

  // Handle page change from Flipbook (desktop - spreads)
  const handleSpreadChange = useCallback((spreadIndex: number) => {
    setCurrentSpread(spreadIndex);
    const firstPage = getFirstPageOfSpread(spreadIndex);
    setCurrentPage(firstPage);
  }, []);

  // Handle mobile page change
  const handleMobilePageChange = useCallback((pageIndex: number) => {
    setCurrentPage(pageIndex + 1);
  }, []);

  // Jump to specific spread (for desktop chapter bar)
  const jumpToSpread = useCallback((spreadIndex: number) => {
    setCurrentSpread(spreadIndex);
    const firstPage = getFirstPageOfSpread(spreadIndex);
    setCurrentPage(firstPage);
    setFlipbookKey(prev => prev + 1);
  }, []);

  // Mobile: simple single pages with arrows at bottom
  if (!isDesktop) {
    return (
      <main className="min-h-screen bg-linear-to-br from-[#0a0a1a] via-[#0d1b2a] to-[#1b263b]">
        {/* Persistent download button - mobile */}
        <a
          href="/tpp_new_final_2.pdf"
          download="tpp_new_final_2.pdf"
          className="pdf-download-floating-mobile"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>PDF</span>
        </a>

        <Flipbook 
          key={`mobile-${flipbookKey}`}
          onPageChange={handleMobilePageChange}
          initialPage={currentPage - 1}
        >
          {pages.map((pageNum) => (
            <div key={pageNum} className="pdf-page-slide">
              <div className="pdf-page-container-mobile">
                <Image
                  src={`/pages/page-${pageNum.toString().padStart(2, "0")}.png`}
                  alt={`TPP Pathway - Page ${pageNum}`}
                  fill
                  sizes="100vw"
                  priority={pageNum <= 3}
                  quality={90}
                  className="pdf-page-image"
                />
              </div>
            </div>
          ))}
        </Flipbook>
      </main>
    );
  }

  // Desktop: double-page spreads with chapter bar
  return (
    <main className="min-h-screen bg-linear-to-br from-[#0a0a1a] via-[#0d1b2a] to-[#1b263b]">
      {/* Persistent download button - desktop */}
      <a
        href="/TPP - Pathways to Prosperity - Developing Tobago and Tobagonians.pdf"
        download="TPP - Pathways to Prosperity - Developing Tobago and Tobagonians.pdf"
        className="pdf-download-floating"
        onClick={(e) => e.stopPropagation()}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>Download PDF</span>
      </a>

      <Flipbook 
        key={`desktop-${flipbookKey}`}
        onPageChange={handleSpreadChange}
        initialPage={currentSpread}
        hideProgressBar={true}
      >
        {spreads.map((spread, idx) => (
          <div key={idx} className="pdf-spread-slide">
            <div className={`pdf-spread-container ${spread.length === 1 ? 'single-page' : 'double-page'}`}>
              {spread.map((pageNum) => (
                <div key={pageNum} className="pdf-spread-page">
                  <Image
                    src={`/pages/page-${pageNum.toString().padStart(2, "0")}.png`}
                    alt={`TPP Pathway - Page ${pageNum}`}
                    fill
                    sizes="50vw"
                    priority={pageNum <= 4}
                    quality={90}
                    className="pdf-page-image"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Flipbook>

      {/* Chapter Bar at bottom - desktop only */}
      <ChapterBar
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onChapterClick={jumpToSpread}
      />
    </main>
  );
}
