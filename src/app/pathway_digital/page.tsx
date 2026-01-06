"use client";

import Flipbook from "@/components/ui/Flipbook";
import pathwayContent from "@/data/pathway-content.json";
import { PAGE_MAPPINGS } from "@/data/page-mapping";
import Image from "next/image";

interface PageContent {
  pageNumber: number;
  text: string;
  images: Array<{
    filename: string;
    path: string;
    width: number;
    height: number;
  }>;
}

const pages = pathwayContent.pages as PageContent[];

// Helper to get main image
function getMainImage(page: PageContent) {
  return page.images.find(img => img.width > 300 && img.height > 300);
}

// Helper to clean text (remove headers only)
function cleanText(text: string): string {
  return text
    .replace(/Tobago['']s Peoples Party\s*\|\s*Policy Mandate\s*\d*/gi, '')
    .replace(/^\d+\s*$/gm, '')
    .trim();
}

// ===== SLIDE COMPONENTS =====

// 1. COVER SLIDE (Page 1)
function CoverSlide({ page }: { page: PageContent }) {
  const mainImage = getMainImage(page);
  
  return (
    <div className="digital-slide digital-slide-cover">
      {mainImage && (
        <Image src={mainImage.path} alt="TPP Policy Mandate Cover" fill className="object-contain" priority />
      )}
    </div>
  );
}

// 2. TABLE OF CONTENTS (Page 2)
function TableOfContentsSlide() {
  return (
    <div className="digital-slide digital-slide-toc">
      <div className="toc-content">
        <h1 className="toc-title">TABLE OF<br />CONTENTS</h1>
      </div>
    </div>
  );
}

// 3. MESSAGE FROM POLITICAL LEADER (Page 3)
function PoliticalLeaderMessageSlide({ page }: { page: PageContent }) {
  const mainImage = getMainImage(page);
  const cleaned = cleanText(page.text);
  
  // Extract paragraphs (everything before the signature)
  const paragraphs = cleaned
    .split('\n\n')
    .filter(p => 
      p.trim() && 
      !p.includes('MESSAGE FROM THE') && 
      !p.includes('POLITICAL LEADER') &&
      !p.includes('Farley Chavez Augustine') &&
      !p.includes('Political Leader') &&
      !p.includes('Fellow Tobagonians')
    )
    .map(p => p.replace(/\n/g, ' ').trim());
  
  return (
    <div className="digital-slide digital-slide-leader-message">
      <div className="leader-layout">
        {mainImage && (
          <div className="leader-photo">
            <Image src={mainImage.path} alt="Farley Chavez Augustine" fill className="object-contain" />
          </div>
        )}
        <div className="leader-text">
          <h2 className="leader-title">MESSAGE FROM THE POLITICAL LEADER</h2>
          <p className="leader-greeting">Fellow Tobagonians,</p>
          <div className="leader-body">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="leader-signature">
            <p className="sig-name">Farley Chavez Augustine</p>
            <p className="sig-role">Political Leader, Tobago People's Party</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4-5. FORWARD (Pages 4-5 - Combined)
function ForwardSlide({ page, nextPage }: { page: PageContent; nextPage?: PageContent }) {
  const mainImage = getMainImage(page);
  const cleaned = cleanText(page.text + '\n\n' + (nextPage ? cleanText(nextPage.text) : ''));
  
  // Extract content after "FORWARD" and "I" (drop cap)
  const content = cleaned
    .replace(/FORWARD/gi, '')
    .replace(/^I\s+n the pursuit/i, 'In the pursuit')
    .replace(/NOTE[\s\S]*?Tobago 2025 to 2045\./i, '')
    .trim();
  
  const paragraphs = content
    .split('\n\n')
    .map(p => p.replace(/\n/g, ' ').trim())
    .filter(p => p.length > 20);
  
  return (
    <div className="digital-slide digital-slide-forward">
      <div className="forward-layout">
        <div className="forward-text">
          <h2 className="forward-title">FORWARD</h2>
          <div className="forward-body">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        {mainImage && (
          <div className="forward-note">
            <div className="note-badge">NOTE</div>
            <p className="note-text">
              The ideas in this document have been informed by evidence-based policy solutions to real problems faced by Tobagonians.
              The POLICY FOCUS at the beginning of each section have been derived from the TPP's Strategic Development Planning Pathway (SDPP) framework for Tobago 2025 to 2045.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// 6. POLICY FRAMEWORK (Page 6)
function PolicyFrameworkSlide({ page }: { page: PageContent }) {
  const mainImage = page.images.find(img => img.width > 1000);
  
  return (
    <div className="digital-slide digital-slide-framework">
      <div className="framework-content">
        <h1 className="framework-title">POLICY<br />FRAMEWORK</h1>
        <p className="framework-subtitle">
          Tobago's development will be guided by a planning pathway built on five fundamental pillars.
        </p>
      </div>
      {mainImage && (
        <div className="framework-visual">
          <Image src={mainImage.path} alt="Policy Framework Diagram" fill className="object-contain" />
        </div>
      )}
    </div>
  );
}

// 7-11. PILLAR SLIDES (Pages 7-11)
function PillarSlide({ page }: { page: PageContent }) {
  const cleaned = cleanText(page.text);
  const mainImage = getMainImage(page);
  
  // Extract pillar info
  const pillarMatch = cleaned.match(/PILLAR (ONE|TWO|THREE|FOUR|FIVE):\s*([A-Z\s&]+)/i);
  const pillarNum = pillarMatch ? pillarMatch[1] : '';
  const pillarTitle = pillarMatch ? pillarMatch[2].trim() : '';
  
  // Extract sections
  const overviewMatch = cleaned.match(/OVERVIEW\s+([\s\S]*?)(?=KEY ELEMENTS|EXPECTED OUTCOMES)/i);
  const overview = overviewMatch ? overviewMatch[1].replace(/\n/g, ' ').trim() : '';
  
  const keyElementsMatch = cleaned.match(/KEY ELEMENTS\s+([\s\S]*?)(?=EXPECTED OUTCOMES)/i);
  const keyElements = keyElementsMatch 
    ? keyElementsMatch[1].split(/•/).map(e => e.replace(/\n/g, ' ').trim()).filter(e => e.length > 10)
    : [];
  
  const outcomesMatch = cleaned.match(/EXPECTED OUTCOMES\s+([\s\S]*?)(?=OVERVIEW|$)/i);
  const outcomes = outcomesMatch
    ? outcomesMatch[1].split(/•/).map(e => e.replace(/\n/g, ' ').trim()).filter(e => e.length > 10)
    : [];
  
  return (
    <div className="digital-slide digital-slide-pillar">
      <div className="pillar-container">
        <div className="pillar-main">
          <div className="pillar-header-badge">PILLAR {pillarNum}</div>
          <h2 className="pillar-main-title">{pillarTitle}</h2>
          
          {overview && (
            <div className="pillar-block">
              <h3 className="pillar-block-label">OVERVIEW</h3>
              <p className="pillar-block-text">{overview}</p>
            </div>
          )}
          
          <div className="pillar-two-col">
            {keyElements.length > 0 && (
              <div className="pillar-block">
                <h3 className="pillar-block-label">KEY ELEMENTS</h3>
                <ul className="pillar-list">
                  {keyElements.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
              </div>
            )}
            
            {outcomes.length > 0 && (
              <div className="pillar-block pillar-block-outcomes">
                <h3 className="pillar-block-label">EXPECTED OUTCOMES</h3>
                <ul className="pillar-list">
                  {outcomes.map((out, i) => <li key={i}>{out}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {mainImage && (
          <div className="pillar-visual">
            <Image src={mainImage.path} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}

// 12, 16, 23, 26, 30, 34, 38, 43, 48. POLICY HEADERS
function PolicyHeaderSlide({ page, mapping }: { page: PageContent; mapping: any }) {
  const mainImage = page.images.find(img => img.width > 1000);
  
  return (
    <div className="digital-slide digital-slide-policy-header">
      <div className="policy-header-bg" />
      {mainImage && (
        <div className="policy-header-visual">
          <Image src={mainImage.path} alt="" fill className="object-cover opacity-15" />
        </div>
      )}
      <div className="policy-header-content">
        <span className="policy-header-badge">POLICY FOCUS</span>
        <h1 className="policy-header-title">{mapping.title}</h1>
      </div>
    </div>
  );
}

// FOCUS INTRO PAGES (Overview + First Focus Area)
function FocusIntroSlide({ page, mapping }: { page: PageContent; mapping: any }) {
  const cleaned = cleanText(page.text);
  
  // Extract policy overview (before first FOCUS AREA)
  const overviewMatch = cleaned.match(/^([\s\S]*?)(?=\d+\s+FOCUS\s+AREA)/i);
  const overview = overviewMatch ? overviewMatch[1].trim() : '';
  
  // Extract Primary Performance Targets
  const targetsMatch = cleaned.match(/Primary\s+Performance\s+Targets\s+([\s\S]*?)(?=\d+\s+FOCUS\s+AREA|$)/i);
  const targets = targetsMatch
    ? targetsMatch[1].split(/[A-Z]\.\s+/).filter(t => t.trim()).map(t => t.replace(/\n/g, ' ').trim())
    : [];
  
  // Extract first focus area
  const focusMatch = cleaned.match(/(\d+)\s+FOCUS\s+AREA\s+([^\n]+)\s+([\s\S]*?)$/i);
  const focusNum = focusMatch ? focusMatch[1] : '';
  const focusTitle = focusMatch ? focusMatch[2].trim() : '';
  const focusDesc = focusMatch ? focusMatch[3].replace(/KEY FOCUS AREA ACTIONS[\s\S]*/, '').replace(/\n/g, ' ').trim() : '';
  
  return (
    <div className="digital-slide digital-slide-focus-intro">
      <div className="focus-intro-layout">
        <div className="focus-intro-main">
          {overview && (
            <div className="focus-overview">
              <h3 className="focus-overview-label">Policy Focus: {mapping.title.split(' - ')[0]}</h3>
              <p className="focus-overview-text">{overview}</p>
            </div>
          )}
          
          {focusNum && focusTitle && (
            <div className="focus-area-card">
              <div className="focus-area-number">{focusNum}</div>
              <h3 className="focus-area-title">{focusTitle}</h3>
              <p className="focus-area-desc">{focusDesc}</p>
            </div>
          )}
        </div>
        
        {targets.length > 0 && (
          <div className="focus-targets-sidebar">
            <h4 className="targets-heading">Primary Performance Targets</h4>
            <ul className="targets-list">
              {targets.map((target, i) => (
                <li key={i}>{target}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// FOCUS ACTIONS PAGES (Key Actions for Focus Areas)
function FocusActionsSlide({ page }: { page: PageContent }) {
  const cleaned = cleanText(page.text);
  const lines = cleaned.split('\n').filter(l => l.trim());
  
  return (
    <div className="digital-slide digital-slide-focus-actions">
      <div className="focus-actions-content">
        {lines.map((line, i) => {
          const trimmed = line.trim();
          
          // Section headers
          if (trimmed === 'KEY FOCUS AREA ACTIONS') {
            return <h3 key={i} className="actions-heading">{trimmed}</h3>;
          }
          
          // Focus area numbers + titles
          if (/^\d+\s+FOCUS\s+AREA$/i.test(trimmed)) {
            return <div key={i} className="focus-area-divider"><span className="focus-num">{trimmed.match(/^\d+/)?.[0]}</span> FOCUS AREA</div>;
          }
          
          // Focus area titles (after number)
          if (i > 0 && /^\d+\s+FOCUS\s+AREA$/i.test(lines[i-1])) {
            return <h3 key={i} className="focus-area-subtitle">{trimmed}</h3>;
          }
          
          // Government will statement
          if (trimmed.includes('A TPP Government will') || trimmed.includes('A TPP government will')) {
            return <p key={i} className="gov-will-statement">{trimmed}</p>;
          }
          
          // Roman numeral action items
          if (/^[IVX]+\.\s+/.test(trimmed)) {
            return <div key={i} className="action-item">{trimmed}</div>;
          }
          
          // NOTE boxes
          if (trimmed === 'NOTE') {
            return <div key={i} className="note-label">NOTE</div>;
          }
          
          // All caps subtitles
          if (trimmed === trimmed.toUpperCase() && trimmed.length > 10 && trimmed.length < 100) {
            return <h4 key={i} className="focus-caps-subtitle">{trimmed}</h4>;
          }
          
          // Regular paragraphs
          if (trimmed.length > 20) {
            return <p key={i} className="focus-paragraph">{trimmed}</p>;
          }
          
          return null;
        })}
      </div>
    </div>
  );
}

// POLICY FRAMEWORK / SECTION HEADERS
function SectionHeaderSlide({ page, mapping }: { page: PageContent; mapping: any }) {
  const mainImage = page.images.find(img => img.width > 1000);
  
  return (
    <div className="digital-slide digital-slide-policy-header">
      <div className="policy-header-bg" />
      {mainImage && (
        <div className="policy-header-visual">
          <Image src={mainImage.path} alt="" fill className="object-cover opacity-15" />
        </div>
      )}
      <div className="policy-header-content">
        <span className="policy-header-badge">POLICY FOCUS</span>
        <h1 className="policy-header-title">{mapping.title}</h1>
      </div>
    </div>
  );
}

// EMPTY PAGES - Fallback to PDF image
function EmptyPageSlide({ page }: { page: PageContent }) {
  return (
    <div className="digital-slide digital-slide-pdf-fallback">
      <div className="pdf-fallback-container">
        <Image
          src={`/pages/page-${page.pageNumber.toString().padStart(2, '0')}.png`}
          alt={`Page ${page.pageNumber}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

// ===== MAIN RENDERER =====

function DigitalSlide({ page, nextPage }: { page: PageContent; nextPage?: PageContent }) {
  const mapping = PAGE_MAPPINGS.find(m => m.pageNumber === page.pageNumber);
  
  if (!mapping) {
    return <EmptyPageSlide page={page} />;
  }
  
  switch (mapping.type) {
    case 'cover':
      return <CoverSlide page={page} />;
    
    case 'toc':
      return <TableOfContentsSlide />;
    
    case 'message':
      return <PoliticalLeaderMessageSlide page={page} />;
    
    case 'forward':
      // Only render on page 4, skip page 5 (it's combined)
      return page.pageNumber === 4 ? <ForwardSlide page={page} nextPage={nextPage} /> : null;
    
    case 'section-header':
      return <PolicyHeaderSlide page={page} mapping={mapping} />;
    
    case 'pillar':
      return <PillarSlide page={page} />;
    
    case 'focus-intro':
      return <FocusIntroSlide page={page} mapping={mapping} />;
    
    case 'focus-actions':
      return <FocusActionsSlide page={page} />;
    
    case 'empty':
      return <EmptyPageSlide page={page} />;
    
    default:
      return <EmptyPageSlide page={page} />;
  }
}

export default function PathwayDigital() {
  // Filter out page 5 since it's combined with page 4
  const visiblePages = pages.filter(p => p.pageNumber !== 5);
  
  return (
    <main className="digital-flipbook">
      <Flipbook>
        {visiblePages.map((page, index) => {
          const nextPage = pages[page.pageNumber]; // Get actual next page
          return <DigitalSlide key={page.pageNumber} page={page} nextPage={nextPage} />;
        })}
      </Flipbook>
    </main>
  );
}
