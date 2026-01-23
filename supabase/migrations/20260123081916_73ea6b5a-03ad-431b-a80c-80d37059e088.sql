-- Create storage bucket for trade-in machine images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'trade-in-images', 
  'trade-in-images', 
  false,
  5242880, -- 5MB limit per file
  ARRAY['image/jpeg', 'image/png', 'image/webp']
);

-- Allow anyone to upload (no auth required for inquiry form)
CREATE POLICY "Anyone can upload trade-in images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'trade-in-images');

-- Allow anyone to read (for email processing)
CREATE POLICY "Anyone can read trade-in images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'trade-in-images');

-- Allow deletion after 30 days (cleanup)
CREATE POLICY "Service role can delete trade-in images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'trade-in-images');