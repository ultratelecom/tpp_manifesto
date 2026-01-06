"use client";

import { chapters, getChapterIndexByPage, getSpreadIndexByPage } from "@/data/toc-chapters";
import { useState } from "react";

interface ChapterBarProps {
  currentPage: number;
  totalPages: number;
  onChapterClick: (spreadIndex: number) => void;
}

export default function ChapterBar({ currentPage, onChapterClick }: ChapterBarProps) {
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  const currentChapterIndex = getChapterIndexByPage(currentPage);

  const handleChapterClick = (chapterStartPage: number) => {
    const spreadIndex = getSpreadIndexByPage(chapterStartPage);
    onChapterClick(spreadIndex);
  };

  return (
    <div className="chapter-bar-container">
      <div className="chapter-bar">
        {chapters.map((chapter, idx) => {
          const pageCount = chapter.endPage - chapter.startPage + 1;
          const isActive = idx === currentChapterIndex;
          const isHovered = hoveredChapter === chapter.id;

          return (
            <div
              key={chapter.id}
              className={`chapter-segment ${isActive ? "active" : ""}`}
              style={{ flex: pageCount }}
              onClick={() => handleChapterClick(chapter.startPage)}
              onMouseEnter={() => setHoveredChapter(chapter.id)}
              onMouseLeave={() => setHoveredChapter(null)}
            >
              {/* Simple tooltip - just name */}
              {isHovered && (
                <div className="chapter-tooltip">
                  {chapter.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

