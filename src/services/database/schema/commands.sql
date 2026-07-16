CREATE TABLE IF NOT EXISTS Commands (
    id TEXT PRIMARY KEY,
    command TEXT NOT NULL UNIQUE CHECK(length(command) > 0),
    description TEXT NOT NULL CHECK(length(description) > 0),
    syntax TEXT,
    category TEXT
);

CREATE INDEX IF NOT EXISTS idx_commands_category ON Commands(category);
