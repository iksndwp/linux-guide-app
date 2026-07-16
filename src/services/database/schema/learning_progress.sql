CREATE TABLE IF NOT EXISTS LearningProgress (
    id TEXT PRIMARY KEY,
    guide_id TEXT NOT NULL UNIQUE,
    current_step INTEGER NOT NULL DEFAULT 1 CHECK(current_step > 0),
    completed INTEGER NOT NULL DEFAULT 0 CHECK(completed IN (0, 1)),
    last_opened TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_learningprogress_completed ON LearningProgress(completed);
