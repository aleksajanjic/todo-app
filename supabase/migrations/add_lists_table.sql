-- Create lists table (no icons)
CREATE TABLE lists (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL,
  color      TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE lists ENABLE ROW LEVEL SECURITY;

-- Policy for lists
CREATE POLICY "Users see own lists"
  ON lists FOR ALL
  USING (auth.uid() = user_id);

-- Add list_id to existing todos table
ALTER TABLE todos
  ADD COLUMN list_id UUID REFERENCES lists(id) ON DELETE SET NULL;
