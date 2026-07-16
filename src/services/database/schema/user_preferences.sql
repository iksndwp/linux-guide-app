CREATE TABLE IF NOT EXISTS UserPreferences (
    id INTEGER PRIMARY KEY DEFAULT 1 CHECK(id = 1),
    dark_mode INTEGER NOT NULL DEFAULT 0 CHECK(dark_mode IN (0, 1)),
    onboarding INTEGER NOT NULL DEFAULT 0 CHECK(onboarding IN (0, 1))
);
