/*
  # RPC Functions for Analytics

  1. Functions for incrementing counters
    - increment_views() - Increment resource view count
    - increment_downloads() - Increment resource download count
*/

-- Function to increment resource views
CREATE OR REPLACE FUNCTION increment_views(resource_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE resources 
  SET views = COALESCE(views, 0) + 1,
      updated_at = now()
  WHERE id = resource_id;
END;
$$;

-- Function to increment resource downloads
CREATE OR REPLACE FUNCTION increment_downloads(resource_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE resources 
  SET downloads = COALESCE(downloads, 0) + 1,
      updated_at = now()
  WHERE id = resource_id;
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION increment_views(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION increment_downloads(text) TO anon, authenticated;