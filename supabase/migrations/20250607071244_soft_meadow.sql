/*
  # Initial Database Schema for ERMITS Advisory

  1. New Tables
    - `contact_submissions` - Store contact form submissions
    - `newsletter_subscribers` - Store newsletter email subscriptions
    - `resources` - Store downloadable resources and content
    - `dashboard_metrics` - Store dashboard key metrics
    - `threat_intelligence` - Store threat intelligence data
    - `strategic_actions` - Store strategic action items

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users and public access where appropriate
*/

-- Enable RLS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read contact submissions
CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  source text DEFAULT 'website',
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow public to subscribe to newsletter
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow public to update their subscription status
CREATE POLICY "Anyone can update their subscription"
  ON newsletter_subscribers
  FOR UPDATE
  TO anon
  USING (true);

-- Resources Table
CREATE TABLE IF NOT EXISTS resources (
  id text PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('whitepapers', 'articles', 'casestudies', 'webinars')),
  tags text[] DEFAULT '{}',
  date date NOT NULL,
  read_time text,
  download_url text,
  image_url text NOT NULL,
  author text,
  file_size text,
  downloads integer DEFAULT 0,
  views integer DEFAULT 0,
  featured boolean DEFAULT false,
  language text DEFAULT 'English',
  format text DEFAULT 'PDF',
  pages integer,
  content jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Allow public to read resources
CREATE POLICY "Anyone can read resources"
  ON resources
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can manage resources
CREATE POLICY "Authenticated users can manage resources"
  ON resources
  FOR ALL
  TO authenticated
  USING (true);

-- Dashboard Metrics Table
CREATE TABLE IF NOT EXISTS dashboard_metrics (
  id text PRIMARY KEY,
  name text NOT NULL,
  value numeric NOT NULL,
  change numeric DEFAULT 0,
  icon text NOT NULL,
  category text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE dashboard_metrics ENABLE ROW LEVEL SECURITY;

-- Allow public to read dashboard metrics
CREATE POLICY "Anyone can read dashboard metrics"
  ON dashboard_metrics
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Threat Intelligence Table
CREATE TABLE IF NOT EXISTS threat_intelligence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  source text NOT NULL,
  impact text NOT NULL CHECK (impact IN ('Low', 'Medium', 'High', 'Critical')),
  timeline text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE threat_intelligence ENABLE ROW LEVEL SECURITY;

-- Allow public to read threat intelligence
CREATE POLICY "Anyone can read threat intelligence"
  ON threat_intelligence
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Strategic Actions Table
CREATE TABLE IF NOT EXISTS strategic_actions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  priority text NOT NULL CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')),
  action text NOT NULL,
  impact text NOT NULL,
  status text DEFAULT 'Not Started' CHECK (status IN ('Not Started', 'In Progress', 'Completed')),
  assigned_to text,
  due_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE strategic_actions ENABLE ROW LEVEL SECURITY;

-- Allow public to read strategic actions
CREATE POLICY "Anyone can read strategic actions"
  ON strategic_actions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Update timestamps function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_resources_updated_at
  BEFORE UPDATE ON resources
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_strategic_actions_updated_at
  BEFORE UPDATE ON strategic_actions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();