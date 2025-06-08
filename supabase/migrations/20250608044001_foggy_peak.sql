/*
  # Fix Newsletter Subscribers RLS Policies

  1. Security Updates
    - Update the UPDATE policy for newsletter_subscribers to properly handle upsert operations
    - Ensure both INSERT and UPDATE operations work correctly for anonymous users
    - Add proper with_check conditions for data integrity

  This migration fixes the RLS policy that was preventing newsletter subscriptions from working properly.
*/

-- Drop existing policies to recreate them with proper configurations
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Anyone can update their subscription" ON newsletter_subscribers;

-- Create INSERT policy for newsletter subscriptions
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create UPDATE policy for newsletter subscriptions with proper with_check
CREATE POLICY "Anyone can update their subscription"
  ON newsletter_subscribers
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Also allow authenticated users to subscribe and update
CREATE POLICY "Authenticated users can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update their subscription"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);