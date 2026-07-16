CREATE TABLE IF NOT EXISTS GuideSteps (
    id TEXT PRIMARY KEY,
    guide_id TEXT NOT NULL,
    step_number INTEGER NOT NULL CHECK(step_number > 0),
    title TEXT NOT NULL CHECK(length(title) > 0),
    instruction TEXT NOT NULL CHECK(length(instruction) > 0),
    image_url TEXT,
    FOREIGN KEY (guide_id) REFERENCES InstallationGuides(id) ON DELETE CASCADE,
    UNIQUE(guide_id, step_number)
);

CREATE INDEX IF NOT EXISTS idx_guidesteps_guide_id ON GuideSteps(guide_id);
