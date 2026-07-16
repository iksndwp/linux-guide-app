CREATE TABLE IF NOT EXISTS Distros (
    id TEXT PRIMARY KEY,
    family_id TEXT NOT NULL,
    name TEXT NOT NULL CHECK(length(name) > 0),
    version TEXT,
    release_date TEXT,
    difficulty INTEGER NOT NULL DEFAULT 1 CHECK(difficulty IN (1, 2, 3)),
    description TEXT,
    FOREIGN KEY (family_id) REFERENCES Families(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_distros_family_id ON Distros(family_id);
CREATE INDEX IF NOT EXISTS idx_distros_difficulty ON Distros(difficulty);
