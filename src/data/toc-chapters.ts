// Table of Contents chapters with page numbers and metadata
export interface Chapter {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  startPage: number;
  endPage: number;
}

export const chapters: Chapter[] = [
  { id: "cover", name: "Cover", shortName: "Cover", icon: "📖", startPage: 1, endPage: 5 },
  { id: "policy", name: "Policy Framework", shortName: "Policy", icon: "📋", startPage: 6, endPage: 11 },
  { id: "autonomy", name: "Constitutional Autonomy", shortName: "Autonomy", icon: "🏛️", startPage: 12, endPage: 15 },
  { id: "education", name: "Education & Innovation", shortName: "Education", icon: "📚", startPage: 16, endPage: 22 },
  { id: "population", name: "Sustainable Population Growth", shortName: "Population", icon: "👥", startPage: 23, endPage: 25 },
  { id: "economy", name: "Economic Growth", shortName: "Economy", icon: "💰", startPage: 26, endPage: 29 },
  { id: "tourism", name: "Sustainable Tourism", shortName: "Tourism", icon: "✈️", startPage: 30, endPage: 33 },
  { id: "culture", name: "Culture & Creativity", shortName: "Culture", icon: "🎭", startPage: 34, endPage: 37 },
  { id: "sports", name: "Sports & Outdoor Recreation", shortName: "Sports", icon: "⚽", startPage: 38, endPage: 42 },
  { id: "food", name: "Food Security & Sovereignty", shortName: "Food", icon: "🌾", startPage: 43, endPage: 47 },
  { id: "healthcare", name: "Wellness & Healthcare Delivery", shortName: "Health", icon: "🏥", startPage: 48, endPage: 53 },
  { id: "public-health", name: "Public Health", shortName: "Wellness", icon: "❤️", startPage: 54, endPage: 58 },
  { id: "social", name: "Protecting Socially Vulnerable", shortName: "Social", icon: "🤝", startPage: 59, endPage: 63 },
  { id: "communities", name: "Sustainable & Livable Communities", shortName: "Communities", icon: "🏘️", startPage: 64, endPage: 67 },
  { id: "housing", name: "Affordable Housing Solutions", shortName: "Housing", icon: "🏠", startPage: 68, endPage: 71 },
  { id: "infrastructure", name: "Public Infrastructure", shortName: "Infra", icon: "🏗️", startPage: 72, endPage: 77 },
  { id: "climate", name: "Climate Change & Environmental Sustainability", shortName: "Climate", icon: "🌍", startPage: 78, endPage: 82 },
  { id: "service", name: "Public Service Modernisation", shortName: "Service", icon: "⚙️", startPage: 83, endPage: 87 },
  { id: "digital", name: "Digital Connectivity", shortName: "Digital", icon: "📱", startPage: 88, endPage: 92 },
  { id: "jobs", name: "Sustainable & Meaningful Job Creation", shortName: "Jobs", icon: "💼", startPage: 93, endPage: 98 },
];

// Helper function to get chapter by page number
export function getChapterByPage(pageNumber: number): Chapter | undefined {
  return chapters.find(ch => pageNumber >= ch.startPage && pageNumber <= ch.endPage);
}

// Helper function to get chapter index by page number
export function getChapterIndexByPage(pageNumber: number): number {
  return chapters.findIndex(ch => pageNumber >= ch.startPage && pageNumber <= ch.endPage);
}

// Get the spread index for desktop view (page 1 alone, then pairs)
export function getSpreadIndexByPage(pageNumber: number): number {
  if (pageNumber === 1) return 0;
  return Math.ceil((pageNumber - 1) / 2);
}

// Get first page of a spread by spread index
export function getFirstPageOfSpread(spreadIndex: number): number {
  if (spreadIndex === 0) return 1;
  return (spreadIndex - 1) * 2 + 2;
}

