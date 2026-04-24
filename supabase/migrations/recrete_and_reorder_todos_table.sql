-- 1. Backup existing data
CREATE TABLE todos_backup AS SELECT * FROM todos;

-- 2. Drop old table
DROP TABLE todos;

-- 3. Recreate with desired column order
CREATE TABLE todos (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  list_id     UUID REFERENCES lists(id) ON DELETE SET NULL,
  user_id     UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  completed   BOOLEAN DEFAULT FALSE,
  priority    TEXT CHECK (priority IN ('high', 'med', 'low')) DEFAULT 'med',
  tag         TEXT CHECK (tag IN ('work', 'personal', 'urgent')),
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Restore data
INSERT INTO todos SELECT id, list_id, user_id, title, completed, priority, tag, created_at FROM todos_backup;

-- 5. Re-enable RLS and policy
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own todos"
  ON todos FOR ALL
  USING (auth.uid() = user_id);

-- 6. Drop backup when confirmed OK
DROP TABLE todos_backup;
