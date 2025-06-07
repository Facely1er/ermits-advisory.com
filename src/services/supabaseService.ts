import { supabase } from '../lib/supabase';
import type { 
  ContactSubmission, 
  NewsletterSubscriber, 
  Resource, 
  DashboardMetric, 
  ThreatIntelligence, 
  StrategicAction 
} from '../lib/supabase';

// Contact Form Services
export const contactService = {
  async submitContact(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  async getContacts() {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};

// Newsletter Services
export const newsletterService = {
  async subscribe(email: string, source: string = 'website') {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .upsert([{ email, source, status: 'active' }], { 
        onConflict: 'email',
        ignoreDuplicates: false 
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async unsubscribe(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({ 
        status: 'unsubscribed', 
        unsubscribed_at: new Date().toISOString() 
      })
      .eq('email', email)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getSubscribers() {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('status', 'active')
      .order('subscribed_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};

// Resource Services
export const resourceService = {
  async getResources(filters?: {
    category?: string;
    tags?: string[];
    featured?: boolean;
    limit?: number;
  }) {
    let query = supabase
      .from('resources')
      .select('*');

    if (filters?.category && filters.category !== 'all') {
      query = query.eq('category', filters.category);
    }

    if (filters?.tags && filters.tags.length > 0) {
      query = query.overlaps('tags', filters.tags);
    }

    if (filters?.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    query = query.order('date', { ascending: false });

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getResourceById(id: string) {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    
    // Increment view count
    await supabase.rpc('increment_views', { resource_id: id });
    
    return data;
  },

  async incrementDownloads(id: string) {
    const { error } = await supabase.rpc('increment_downloads', { resource_id: id });
    if (error) throw error;
  }
};

// Dashboard Services
export const dashboardService = {
  async getMetrics() {
    const { data, error } = await supabase
      .from('dashboard_metrics')
      .select('*')
      .order('category');

    if (error) throw error;
    return data;
  },

  async getThreatIntelligence() {
    const { data, error } = await supabase
      .from('threat_intelligence')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;
    return data;
  },

  async getStrategicActions() {
    const { data, error } = await supabase
      .from('strategic_actions')
      .select('*')
      .order('priority', { ascending: false });

    if (error) throw error;
    return data;
  }
};

// Analytics Services
export const analyticsService = {
  async trackResourceView(resourceId: string) {
    // This could be expanded to include more detailed analytics
    return resourceService.getResourceById(resourceId);
  },

  async trackDownload(resourceId: string) {
    return resourceService.incrementDownloads(resourceId);
  }
};