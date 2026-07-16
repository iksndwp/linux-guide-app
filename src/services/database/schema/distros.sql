CREATE TABLE IF NOT EXISTS Distros (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL CHECK(length(slug) > 0),
    name TEXT NOT NULL CHECK(length(name) > 0),
    package_manager TEXT NOT NULL,
    logo_asset TEXT,
    official_website TEXT,
    difficulty INTEGER NOT NULL DEFAULT 1 CHECK(difficulty IN (1, 2, 3)),
    description TEXT,
    FOREIGN KEY (family_id) REFERENCES Families(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_distros_family_id ON Distros(family_id);
CREATE INDEX IF NOT EXISTS idx_distros_difficulty ON Distros(difficulty);
