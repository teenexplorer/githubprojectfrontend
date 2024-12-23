export interface Question {
  id: number;
  text: string;
  requiresImage: boolean;
  answer: string;
  image?: File;
  timestamp?: string; // Add timestamp for tracking when questions are answered
}

export interface QuestionCount {
  questionNo: number;
  totalCount: number;
  todayCount: number;
}

export interface QuestionnaireStats {
  totalBlocks: number;
  totalGP: number;
  totalBeneficiaries: number;
  totalFieldInspectors: number;
}