CREATE TABLE IF NOT EXISTS Families (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE CHECK(length(name) > 0),
    description TEXT,
    logo_asset TEXT
);
