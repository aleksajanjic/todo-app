-- Create todos table
CREATE TABLE todos (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  completed   BOOLEAN DEFAULT FALSE,
  priority    TEXT CHECK (priority IN ('high', 'med', 'low')) DEFAULT 'med',
  tag         TEXT CHECK (tag IN ('work', 'personal', 'urgent')),
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Policy: users can only see their own todos
CREATE POLICY "Users see own todos"
  ON todos FOR ALL
  USING (auth.uid() = user_id);
