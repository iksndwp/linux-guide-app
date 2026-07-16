CREATE TABLE IF NOT EXISTS Commands (
    id TEXT PRIMARY KEY,
    distro_id TEXT NOT NULL,
    command TEXT NOT NULL CHECK(length(command) > 0),
    description TEXT NOT NULL CHECK(length(description) > 0),
    syntax TEXT,
    category TEXT,
    FOREIGN KEY (distro_id) REFERENCES Distros(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_commands_distro_id ON Commands(distro_id);
CREATE INDEX IF NOT EXISTS idx_commands_category ON Commands(category);
