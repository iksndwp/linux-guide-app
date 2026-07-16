# Database Design Documentation - Linux Guide

## Database Purpose
The database serves as the core local storage mechanism for the Linux Guide application. Its primary purpose is to provide structured, queryable data for Linux distributions, installation guides, command references, and user tracking (preferences, learning progress). Since the application relies heavily on comprehensive technical content, the database is optimized for quick read access and predictable relational structures.

## Offline Architecture
Linux Guide is an offline-first application designed to operate entirely without an internet connection. To achieve this, the SQLite database is seeded on the device during installation. All data fetching, searching, and filtering operations run locally on the device using Capacitor's SQLite plugins. There is no remote synchronization required for core functionality.

## Documentation Structure
- **`README.md`**: Overview, architecture, and future scalability.
- **`MODELS.md`**: Conceptual explanations of each entity and the recommendation engine.
- **`ERD.md`**: Entity-Relationship Diagram detailing data relationships and navigation paths.
- **`DATA_DICTIONARY.md`**: Comprehensive breakdown of every table and column.
- **`SCHEMA.md`**: Structural blueprint defining keys and indexes.
- **`MIGRATION_PLAN.md`**: Step-by-step table creation strategy respecting foreign keys.
- **`SEED_PLAN.md`**: Initial data required for the application.

## Design Principles
1. **Offline-First**: All essential data must reside in this local database.
2. **Read-Optimized**: Indexes are prioritized for common queries (e.g., searching commands).
3. **Simplicity**: Avoid excessive normalization to reduce complex JOINs that could slow down mobile devices.
4. **Maintainability**: Clear constraints and foreign keys enforce data integrity natively within SQLite.

## Future Scalability
The database is designed to be easily extended for future features:
- **Bookmarks & Favorite Distros**: Can be implemented via a new `Bookmarks` table linking `user_id` to an `entity_id` and `entity_type`.
- **Dark Theme Preferences**: Space is already reserved in the current `UserPreferences` table.
- **Multiple Learning Tracks**: Can be added by creating a `Tracks` table and a `TrackItems` join table linking to Commands and Guides.
- **Command Categories**: Currently handled by a text column in `Commands`, but can be normalized into a `CommandCategories` table (1:N) if the taxonomy grows complex.
- **Guide Images & Screenshots**: The design currently uses simple `image_url` strings. For multiple images per step/distro, future tables like `DistroScreenshots` (1:N) and `GuideImages` (1:N) can be attached.
- **Version History**: A future `ContentVersions` table could track database schema and seed data versions to facilitate Over-The-Air (OTA) SQLite database content updates.
