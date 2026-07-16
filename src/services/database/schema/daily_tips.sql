CREATE TABLE IF NOT EXISTS DailyTips (
    id TEXT PRIMARY KEY,
    content TEXT NOT NULL CHECK(length(content) > 0),
    day_index INTEGER UNIQUE CHECK(day_index >= 1)
);

CREATE INDEX IF NOT EXISTS idx_dailytips_day_index ON DailyTips(day_index);
