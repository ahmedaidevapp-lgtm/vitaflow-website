export type QueryIntentType = 'meaning' | 'high' | 'low' | 'normal-range' | 'symptoms';

export interface QueryIntent {
  type: QueryIntentType;
  searchQuery: string;
}

export interface MarkerEntry {
  slug: string;
  name: string;
  category: string;
  relatedMarkers: string[];
  targetQueries: QueryIntent[];
}

export interface ReferenceRange {
  population: string;
  min: number | null;
  max: number | null;
  unit: string;
  source: string;
  sourceUrl: string;
}

export interface Citation {
  id: number;
  title: string;
  source: string;
  url: string;
  year: number;
}

export interface VerifiedData {
  markerSlug: string;
  markerName: string;
  alternateNames: string[];
  whatItMeasures: string;
  whatItMeasuresSource: string;
  referenceRanges: ReferenceRange[];
  causesOfHigh: string[];
  causesOfHighSource: string;
  causesOfLow: string[];
  causesOfLowSource: string;
  symptoms: {
    high: string[];
    low: string[];
  };
  symptomsSource: string;
  citations: Citation[];
}

export interface FAQ {
  question: string;
  answer: string;
  intentType: QueryIntentType;
}

export interface GeneratedContent {
  markerSlug: string;
  generatedAt: string;
  model: string;
  intro: string;
  plainLanguageExplanation: string;
  faqs: FAQ[];
}

export interface PendingPage {
  marker: MarkerEntry;
  verifiedData: VerifiedData;
  generatedContent: GeneratedContent;
  qualityResult?: QualityResult;
}

export interface QualityResult {
  markerSlug: string;
  checkedAt: string;
  wordCount: number;
  wordCountPass: boolean;
  wordCountMinimum: number;
  requiredFieldsPass: boolean;
  missingFields: string[];
  uniquenessScore: number;
  uniquenessPass: boolean;
  aiTellPhrases: string[];
  aiTellPass: boolean;
  allChecksPass: boolean;
  readyForHumanReview: boolean;
  notes: string[];
}
