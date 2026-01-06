"use client";

import { chapters, getChapterIndexByPage, Chapter } from "@/data/toc-chapters";
import { useState } from "react";

interface ChapterNavigatorProps {
  currentPage: number;
  onChapterClick: (pageNumber: number) => void;
  onPrevChapter: () => void;
  onNextChapter: () => void;
}

export default function ChapterNavigator({ 
  currentPage, 
  onChapterClick, 
  onPrevChapter, 
  onNextChapter 
}: ChapterNavigatorProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const currentChapterIndex = getChapterIndexByPage(currentPage);
  const currentChapter = chapters[currentChapterIndex];
  
  const hasPrevChapter = currentChapterIndex > 0;
  const hasNextChapter = currentChapterIndex < chapters.length - 1;

  const handleChapterSelect = (chapter: Chapter) => {
    onChapterClick(chapter.startPage);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Whitespace Navigator */}
      <div className="mobile-chapter-nav">
        {/* Previous Chapter Button */}
        <button 
          className={`chapter-nav-btn ${!hasPrevChapter ? 'disabled' : ''}`}
          onClick={onPrevChapter}
          disabled={!hasPrevChapter}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Current Chapter - tap to open drawer */}
        <button 
          className="chapter-nav-current"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span className="chapter-nav-icon">{currentChapter?.icon}</span>
          <span className="chapter-nav-name">{currentChapter?.shortName}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {/* Next Chapter Button */}
        <button 
          className={`chapter-nav-btn ${!hasNextChapter ? 'disabled' : ''}`}
          onClick={onNextChapter}
          disabled={!hasNextChapter}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Chapter Progress Dots */}
      <div className="chapter-dots">
        {chapters.map((chapter, idx) => (
          <div 
            key={chapter.id}
            className={`chapter-dot ${idx === currentChapterIndex ? 'active' : ''} ${idx < currentChapterIndex ? 'passed' : ''}`}
            onClick={() => handleChapterSelect(chapter)}
          />
        ))}
      </div>

      {/* Expandable Drawer */}
      {isDrawerOpen && (
        <>
          <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)} />
          <div className="chapter-drawer">
            <div className="drawer-handle" onClick={() => setIsDrawerOpen(false)} />
            <h3 className="drawer-title">Jump to Chapter</h3>
            <div className="drawer-grid">
              {chapters.map((chapter, idx) => (
                <button
                  key={chapter.id}
                  className={`drawer-item ${idx === currentChapterIndex ? 'active' : ''}`}
                  onClick={() => handleChapterSelect(chapter)}
                >
                  <span className="drawer-item-icon">{chapter.icon}</span>
                  <span className="drawer-item-name">{chapter.shortName}</span>
                  <span className="drawer-item-pages">p.{chapter.startPage}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

