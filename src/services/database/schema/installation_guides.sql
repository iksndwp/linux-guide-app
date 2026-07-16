CREATE TABLE IF NOT EXISTS InstallationGuides (
    id TEXT PRIMARY KEY,
    distro_id TEXT NOT NULL,
    title TEXT NOT NULL CHECK(length(title) > 0),
    estimated_time INTEGER CHECK(estimated_time > 0),
    FOREIGN KEY (distro_id) REFERENCES Distros(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_installationguides_distro_id ON InstallationGuides(distro_id);
