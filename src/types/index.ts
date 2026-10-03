export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  engagementType: 'One-time project';
  targetAudience: string;
  includes: string[];
  excludes?: string;
}

export interface ExampleProject {
  id: string;
  projectTypeLabel: 'Example project';
  businessName: string;
  location: string;
  categoryLabel: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  representativeContact: string;
  role: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  timeline: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocalizedLeadFormData {
  fullName: string;
  mobileNumber: string;
  businessName: string;
  websiteOrInstagram?: string;
  selectedService: string;
  projectDetails: string;
}
