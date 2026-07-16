CREATE TABLE IF NOT EXISTS SystemRequirements (
    id TEXT PRIMARY KEY,
    distro_id TEXT NOT NULL UNIQUE,
    min_ram_mb INTEGER NOT NULL CHECK(min_ram_mb >= 0),
    rec_ram_mb INTEGER NOT NULL CHECK(rec_ram_mb >= 0),
    min_disk_gb INTEGER NOT NULL CHECK(min_disk_gb >= 0),
    architecture TEXT NOT NULL,
    FOREIGN KEY (distro_id) REFERENCES Distros(id) ON DELETE CASCADE
);
