"use client";

import Flipbook from "@/components/ui/Flipbook";
import Image from "next/image";
import { useState } from "react";

// Generate array of page numbers (98 pages total)
const TOTAL_PAGES = 98;
const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

export default function PathwayFlipbook() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0d1b2a] to-[#1b263b]">
      <Flipbook onPageChange={setCurrentPage}>
        {pages.map((pageNum) => (
          <div key={pageNum} className="pdf-page-slide">
            <div className="pdf-page-container">
              <Image
                src={`/pages/page-${pageNum.toString().padStart(2, "0")}.png`}
                alt={`TPP Pathway - Page ${pageNum}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
                priority={pageNum <= 3}
                quality={90}
                className="pdf-page-image"
              />
              
              {/* Download button on first page */}
              {pageNum === 1 && (
                <a
                  href="/TPP - Pathways to Prosperity - Developing Tobago and Tobagonians.pdf"
                  download="TPP - Pathways to Prosperity - Developing Tobago and Tobagonians.pdf"
                  className="pdf-download-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </Flipbook>
    </main>
  );
}

