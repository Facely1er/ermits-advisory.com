import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for TypeScript
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'contacted' | 'resolved';
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribed_at?: string;
  status?: 'active' | 'unsubscribed';
  source?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'whitepapers' | 'articles' | 'casestudies' | 'webinars';
  tags: string[];
  date: string;
  read_time?: string;
  download_url?: string;
  image_url: string;
  author?: string;
  file_size?: string;
  downloads?: number;
  views?: number;
  featured?: boolean;
  language?: string;
  format?: string;
  pages?: number;
  content?: {
    summary?: string;
    key_topics?: string[];
    benefits?: string[];
  };
  created_at?: string;
  updated_at?: string;
}

export interface DashboardMetric {
  id: string;
  name: string;
  value: number;
  change: number;
  icon: string;
  category: string;
  updated_at?: string;
}

export interface ThreatIntelligence {
  id: string;
  type: string;
  source: string;
  impact: 'Low' | 'Medium' | 'High' | 'Critical';
  timeline: string;
  description?: string;
  created_at?: string;
}

export interface StrategicAction {
  id: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  action: string;
  impact: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  assigned_to?: string;
  due_date?: string;
  created_at?: string;
  updated_at?: string;
}