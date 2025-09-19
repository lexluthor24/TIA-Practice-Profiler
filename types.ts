
export interface QuestionOption {
  text: string;
  value: string;
}

export interface Question {
  stratum: string;
  part: 'character' | 'context';
  questionText: string;
  options: QuestionOption[];
}

export interface UserAnswer {
  value: string;
  stratum: string;
  part: 'character' | 'context';
}

export interface UserAnswers {
  [key: number]: UserAnswer;
}

export interface ProfileCharacter {
  mindset: string;
  specialization: string;
  impact_ethos: string;
  practice_model: string;
}

export interface ProfileContext {
    domain: string;
    driver: string;
    model: string;
}

export interface Profile {
  character: ProfileCharacter;
  context: ProfileContext;
}

export interface Archetype {
    title: string;
    description: string;
}

export interface CharacterReportItem {
    title: string;
    description: string;
    strengths?: string[];
    blindSpots?: string[];
    growthPath?: string;
    example?: string;
}

export interface CharacterReportContent {
    [key: string]: CharacterReportItem;
}

export interface ContextReportContent {
    domain: Record<string, string>;
    driver: Record<string, string>;
    model: Record<string, string>;
}

export interface ReportContentData {
    mindset: CharacterReportContent;
    specialization: CharacterReportContent;
    impact_ethos: CharacterReportContent;
    practice_model: CharacterReportContent;
    context: ContextReportContent;
}

export interface GeminiAnalysis {
    synthesis: string;
    pathway: string;
    recommendations: string[];
}

// Admin Panel Types
export interface CategoryCounts {
    [category: string]: {
        [item: string]: number;
    };
}

export interface AdminStats {
    totalCompletions: number;
    pdfDownloads: number;
    shares: number; // Placeholder
    categoryCounts: CategoryCounts;
}

export interface AnswerMetric {
    text: string;
    value: string;
    count: number;
}

export interface QuestionMetric {
    questionText: string;
    options: AnswerMetric[];
}