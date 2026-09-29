export type PageId = 'home' | 'purpose' | 'capabilities' | 'why-cadence' | 'contact';

export interface RouteState {
  page: PageId;
  inquiryCategory?: string;
  inquiryNotes?: string;
}
