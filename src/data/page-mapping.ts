/**
 * Manual Page Mapping - Understanding the Context of Each Page
 * This maps each page to its specific context type and grouping
 */

export interface PageMapping {
  pageNumber: number;
  context: string;
  type: 'cover' | 'toc' | 'section-header' | 'pillar' | 'focus-intro' | 'focus-actions' | 'message' | 'forward' | 'empty';
  title: string;
  subtitle?: string;
  groupWith?: number[]; // Pages that should be considered together
  notes?: string;
}

export const PAGE_MAPPINGS: PageMapping[] = [
  // FRONT MATTER
  { pageNumber: 1, context: 'Cover', type: 'cover', title: 'TPP Policy Mandate' },
  { pageNumber: 2, context: 'Table of Contents', type: 'toc', title: 'TABLE OF CONTENTS' },
  
  // INTRODUCTORY MESSAGES
  { pageNumber: 3, context: 'Political Leader Message', type: 'message', title: 'MESSAGE FROM THE POLITICAL LEADER', subtitle: 'Farley Chavez Augustine' },
  { pageNumber: 4, context: 'Forward Part 1', type: 'forward', title: 'FORWARD', groupWith: [5], notes: 'Continues on page 5' },
  { pageNumber: 5, context: 'Forward Part 2', type: 'forward', title: 'FORWARD (Continued)', groupWith: [4], notes: 'Continuation from page 4' },
  
  // POLICY FRAMEWORK
  { pageNumber: 6, context: 'Policy Framework Intro', type: 'section-header', title: 'POLICY FRAMEWORK', subtitle: 'Tobago\'s development will be guided by a planning pathway built on five fundamental pillars.' },
  
  // FIVE PILLARS
  { pageNumber: 7, context: 'Pillar One', type: 'pillar', title: 'PILLAR ONE: THE DEVELOPMENT PHILOSOPHY' },
  { pageNumber: 8, context: 'Pillar Two', type: 'pillar', title: 'PILLAR TWO: THE SOCIAL CONTRACT' },
  { pageNumber: 9, context: 'Pillar Three', type: 'pillar', title: 'PILLAR THREE: THE STRATEGIC POLICY AGENDA' },
  { pageNumber: 10, context: 'Pillar Four', type: 'pillar', title: 'PILLAR FOUR: THE GRAND VISION & DEVELOPMENT AGENDA PRIORITIES' },
  { pageNumber: 11, context: 'Pillar Five', type: 'pillar', title: 'PILLAR FIVE: THE IMPLEMENTATION LOGIC' },
  
  // POLICY FOCUS 1: CONSTITUTIONAL AUTONOMY
  { pageNumber: 12, context: 'Constitutional Autonomy Header', type: 'section-header', title: 'CONSTITUTIONAL AUTONOMY', subtitle: 'POLICY FOCUS' },
  { pageNumber: 13, context: 'Constitutional Autonomy - Focus Area 1', type: 'focus-intro', title: 'Tobago Legislative Assembly' },
  { pageNumber: 14, context: 'Constitutional Autonomy - Focus Areas 1-2 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS', groupWith: [13] },
  { pageNumber: 15, context: 'Constitutional Autonomy - Focus Areas 3-4', type: 'focus-intro', title: 'Participatory Governance & Security' },
  
  // POLICY FOCUS 2: EDUCATION AND INNOVATION
  { pageNumber: 16, context: 'Education Header', type: 'section-header', title: 'EDUCATION AND INNOVATION', subtitle: 'POLICY FOCUS' },
  { pageNumber: 17, context: 'Education - Overview & Focus Area 1', type: 'focus-intro', title: 'Curriculum Modernisation and Diversification' },
  { pageNumber: 18, context: 'Education - Focus Areas 1-2 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS' },
  { pageNumber: 19, context: 'Education - Focus Areas 3-4', type: 'focus-intro', title: 'Teacher Training & Early Childhood Education' },
  { pageNumber: 20, context: 'Education - Focus Areas 5-6', type: 'focus-intro', title: 'Inclusive Education & Community Involvement' },
  { pageNumber: 21, context: 'Education - Focus Areas 7-8', type: 'focus-intro', title: 'Assessment Systems & Infrastructure' },
  { pageNumber: 22, context: 'Education - Focus Area 8 Actions (cont)', type: 'focus-actions', title: 'Infrastructure Projects', groupWith: [21] },
  
  // POLICY FOCUS 3: SUSTAINABLE POPULATION GROWTH
  { pageNumber: 23, context: 'Population Header', type: 'section-header', title: 'SUSTAINABLE POPULATION GROWTH', subtitle: 'POLICY FOCUS' },
  { pageNumber: 24, context: 'Population - Overview & Focus Area 1', type: 'focus-intro', title: 'Family Support and Birth Rate Incentives' },
  { pageNumber: 25, context: 'Population - Focus Areas 1-2 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS' },
  
  // POLICY FOCUS 4: ECONOMIC GROWTH
  { pageNumber: 26, context: 'Economic Growth Header', type: 'section-header', title: 'ECONOMIC GROWTH', subtitle: 'POLICY FOCUS' },
  { pageNumber: 27, context: 'Economic Growth - Overview & Focus Area 1', type: 'focus-intro', title: 'Foster Public-Private Partnerships' },
  { pageNumber: 28, context: 'Economic Growth - Focus Areas 1-2 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS' },
  { pageNumber: 29, context: 'Economic Growth - Focus Areas 3-4', type: 'focus-intro', title: 'Diversify the Economy & Export Capabilities' },
  
  // POLICY FOCUS 5: SUSTAINABLE TOURISM
  { pageNumber: 30, context: 'Tourism Header', type: 'section-header', title: 'SUSTAINABLE TOURISM', subtitle: 'POLICY FOCUS' },
  { pageNumber: 31, context: 'Tourism - Overview & Focus Area 1', type: 'focus-intro', title: 'Enhance Tourism Amenities' },
  { pageNumber: 32, context: 'Tourism - Focus Areas 1-2 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS' },
  { pageNumber: 33, context: 'Tourism - Focus Areas 3-4', type: 'focus-intro', title: 'Marketing & Community Tourism' },
  
  // POLICY FOCUS 6: CULTURE AND CREATIVITY
  { pageNumber: 34, context: 'Culture Header', type: 'section-header', title: 'CULTURE AND CREATIVITY', subtitle: 'POLICY FOCUS' },
  { pageNumber: 35, context: 'Culture - Overview & Focus Area 1', type: 'focus-intro', title: 'Enhancement of Cultural Heritage Sites' },
  { pageNumber: 36, context: 'Culture - Focus Areas 1-3 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS' },
  { pageNumber: 37, context: 'Culture - Focus Area 4', type: 'focus-intro', title: 'Promotion of Cultural Festivals and Events' },
  
  // POLICY FOCUS 7: SPORTS AND OUTDOOR RECREATION
  { pageNumber: 38, context: 'Sports Header', type: 'section-header', title: 'SPORTS AND OUTDOOR RECREATION', subtitle: 'POLICY FOCUS' },
  { pageNumber: 39, context: 'Sports - Overview & Focus Area 1', type: 'focus-intro', title: 'Enhance Infrastructure Development' },
  { pageNumber: 40, context: 'Sports - Focus Areas 1-3 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS' },
  { pageNumber: 41, context: 'Sports - Focus Areas 3-4 Actions', type: 'focus-actions', title: 'Talent Development & Tourism' },
  { pageNumber: 42, context: 'Sports - Focus Area 5', type: 'focus-intro', title: 'Strengthen Community Engagement' },
  
  // POLICY FOCUS 8: FOOD SECURITY AND SOVEREIGNTY
  { pageNumber: 43, context: 'Food Security Header', type: 'section-header', title: 'FOOD SECURITY AND SOVEREIGNTY', subtitle: 'POLICY FOCUS' },
  { pageNumber: 44, context: 'Food Security - Overview & Focus Area 1', type: 'focus-intro', title: 'Invest in Infrastructure Development' },
  { pageNumber: 45, context: 'Food Security - Focus Areas 1-2 Actions', type: 'focus-actions', title: 'KEY FOCUS AREA ACTIONS' },
  { pageNumber: 46, context: 'Food Security - Focus Areas 3-4', type: 'focus-intro', title: 'Financial Resources & Market Access' },
  { pageNumber: 47, context: 'Food Security - Focus Areas 5-6', type: 'focus-intro', title: 'Research & Community Initiatives' },
  
  // POLICY FOCUS 9: WELLNESS & HEALTHCARE (extraction failed)
  { pageNumber: 48, context: 'Healthcare Header', type: 'section-header', title: 'WELLNESS & HEALTHCARE DELIVERY', subtitle: 'POLICY FOCUS' },
  { pageNumber: 49, context: 'Healthcare Content (empty)', type: 'empty', title: 'Healthcare - Page 49', notes: 'Failed extraction - use PDF image fallback' },
  { pageNumber: 50, context: 'Healthcare Content (empty)', type: 'empty', title: 'Healthcare - Page 50', notes: 'Failed extraction - use PDF image fallback' },
  { pageNumber: 51, context: 'Healthcare Content (empty)', type: 'empty', title: 'Healthcare - Page 51', notes: 'Failed extraction - use PDF image fallback' },
  { pageNumber: 52, context: 'Healthcare Content (empty)', type: 'empty', title: 'Healthcare - Page 52', notes: 'Failed extraction - use PDF image fallback' },
  { pageNumber: 53, context: 'Healthcare Content (empty)', type: 'empty', title: 'Healthcare - Page 53', notes: 'Failed extraction - use PDF image fallback' },
  { pageNumber: 54, context: 'Healthcare Content (empty)', type: 'empty', title: 'Healthcare - Page 54', notes: 'Failed extraction - use PDF image fallback' },
  { pageNumber: 55, context: 'Healthcare Content (empty)', type: 'empty', title: 'Healthcare - Page 55', notes: 'Failed extraction - use PDF image fallback' },
  
  // BACK MATTER
  { pageNumber: 56, context: 'Credits/Footer', type: 'empty', title: 'Credits', notes: 'Has small images/logos' },
  { pageNumber: 57, context: 'Back Cover (empty)', type: 'empty', title: 'Back Cover', notes: 'Empty page' },
];

export function getPageMapping(pageNumber: number): PageMapping | undefined {
  return PAGE_MAPPINGS.find(m => m.pageNumber === pageNumber);
}

export function getPagesByContext(context: string): PageMapping[] {
  return PAGE_MAPPINGS.filter(m => m.context.includes(context));
}


