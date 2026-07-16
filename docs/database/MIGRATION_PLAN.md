# Database Migration Plan

This document outlines the sequential order for creating the database tables. Order is crucial to satisfy foreign key constraints during table creation.

## Migration Order

### 001 Create Families
- **Reason**: The `Families` table is a root entity with no foreign dependencies. It must exist before `Distros` can be created.

### 002 Create Distros
- **Reason**: Relies on `family_id` from the `Families` table. Serves as the parent for multiple distro-specific tables.

### 003 Create System Requirements
- **Reason**: Requires `Distros` to exist for its `distro_id` foreign key.

### 004 Create ProsCons
- **Reason**: Requires `Distros` to exist for its `distro_id` foreign key.

### 005 Create Installation Guides
- **Reason**: Requires `Distros` to exist. Must be created before `GuideSteps`.

### 006 Create Guide Steps
- **Reason**: Requires `InstallationGuides` to exist for the `guide_id` foreign key.

### 007 Create Commands
- **Reason**: Standalone reference table. Can be created at any time, but logically grouped after the core distro architecture.

### 008 Create Daily Tips
- **Reason**: Standalone table.

### 009 Create User Preferences
- **Reason**: Standalone local user data table.

### 010 Create Learning Progress
- **Reason**: Standalone local user data table (uses soft links, so it doesn't strictly depend on other tables via FKs, but conceptually relies on content tables existing).

## Migration Execution Strategy
Since the app is offline-first, migrations should be executed upon app initialization. The Capacitor SQLite plugin will read a migration manifest (or execute them programmatically). By adhering strictly to this order, SQLite will not throw `FOREIGN KEY constraint failed` errors upon initial database seeding.
