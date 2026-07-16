CREATE TABLE IF NOT EXISTS DailyTips (
    id TEXT PRIMARY KEY,
    content TEXT NOT NULL CHECK(length(content) > 0)
);
