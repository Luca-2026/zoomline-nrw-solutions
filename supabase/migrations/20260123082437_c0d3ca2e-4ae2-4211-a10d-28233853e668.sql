-- Make the trade-in-images bucket public so images can be displayed
UPDATE storage.buckets 
SET public = true 
WHERE id = 'trade-in-images';