CREATE TABLE IF NOT EXISTS LearningProgress (
    id TEXT PRIMARY KEY,
    entity_type TEXT NOT NULL CHECK(entity_type IN ('guide', 'cmd')),
    entity_id TEXT NOT NULL,
    completed INTEGER NOT NULL DEFAULT 0 CHECK(completed IN (0, 1)),
    timestamp TEXT NOT NULL,
    UNIQUE(entity_type, entity_id)
);

CREATE INDEX IF NOT EXISTS idx_learningprogress_completed ON LearningProgress(completed);
