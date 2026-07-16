CREATE TABLE IF NOT EXISTS Families (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE CHECK(length(name) > 0),
    description TEXT,
    logo_url TEXT
);

CREATE INDEX IF NOT EXISTS idx_families_name ON Families(name);
