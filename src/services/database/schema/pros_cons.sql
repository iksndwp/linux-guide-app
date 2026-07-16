CREATE TABLE IF NOT EXISTS ProsCons (
    id TEXT PRIMARY KEY,
    distro_id TEXT NOT NULL,
    type TEXT NOT NULL CHECK(type IN ('pro', 'con')),
    content TEXT NOT NULL CHECK(length(content) > 0),
    FOREIGN KEY (distro_id) REFERENCES Distros(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_proscons_distro_id ON ProsCons(distro_id);
