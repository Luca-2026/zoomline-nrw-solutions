-- Make trade-in-images bucket private
UPDATE storage.buckets SET public = false WHERE id = 'trade-in-images';

-- Drop overly permissive public SELECT policy
DROP POLICY IF EXISTS "Anyone can view trade-in images" ON storage.objects;

-- Create authenticated SELECT policy (service role + authenticated users)
CREATE POLICY "Authenticated users can view trade-in images"
ON storage.objects FOR SELECT
USING (bucket_id = 'trade-in-images' AND auth.role() = 'authenticated');

-- Keep the existing INSERT policy but scope it
DROP POLICY IF EXISTS "Anyone can upload trade-in images" ON storage.objects;
CREATE POLICY "Anyone can upload trade-in images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'trade-in-images');