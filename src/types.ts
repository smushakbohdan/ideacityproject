export type IssueCategory = 'Cesty' | 'Osvetlenie' | 'Inklúzia' | 'Zeleň' | 'Čistota';

export interface MunicipalIssue {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  location: string;
  coordinates: { lat: number; lng: number };
  status: 'Prijaté' | 'V riešení' | 'Opravené';
  upvotes: number;
  reportedAt: string;
  hasUserUpvoted?: boolean;
  duplicateReportsAvoided: number;
  photoUrl: string;
  severity: 'Nízka' | 'Stredná' | 'Kritická';
}

export interface SimulationStep {
  step: 'idle' | 'uploading' | 'analyzing' | 'duplicate_found' | 'success_new' | 'success_upvoted';
  detectedCategory?: IssueCategory;
  confidence?: number;
  duplicateIssue?: MunicipalIssue;
}
