# Database Schema Blueprint

This document defines the layout, keys, and indexes for the database without relying on specific SQL syntax. It serves as the blueprint for implementation.

## 1. Families Table
- **Layout**: Stores family ID, name, description, and an optional logo path.
- **Primary Key**: `id`
- **Foreign Keys**: None.
- **Unique Constraints**: `name` must be unique to prevent duplicates.
- **Indexes**: None strictly required for a small dataset, but `name` could be indexed.

## 2. Distros Table
- **Layout**: Stores distro ID, link to family, name, version details, and difficulty rating.
- **Primary Key**: `id`
- **Foreign Keys**: `family_id` references `Families.id` (ON DELETE CASCADE).
- **Unique Constraints**: None (can have multiple versions of same distro name).
- **Indexes**: 
  - Index on `family_id` for fast filtering by family.
  - Index on `difficulty` for fast filtering by user skill level.

## 3. SystemRequirements Table
- **Layout**: Stores minimum and recommended RAM/Disk, and architecture.
- **Primary Key**: `id`
- **Foreign Keys**: `distro_id` references `Distros.id` (ON DELETE CASCADE).
- **Unique Constraints**: `distro_id` must be unique (One-to-One relationship).
- **Indexes**: Index on `distro_id` (usually covered by the unique constraint automatically).

## 4. ProsCons Table
- **Layout**: Stores short text points categorized as 'pro' or 'con' for a distro.
- **Primary Key**: `id`
- **Foreign Keys**: `distro_id` references `Distros.id` (ON DELETE CASCADE).
- **Unique Constraints**: None.
- **Indexes**: Index on `distro_id`.

## 5. InstallationGuides Table
- **Layout**: Title and estimated time for a specific distro installation.
- **Primary Key**: `id`
- **Foreign Keys**: `distro_id` references `Distros.id` (ON DELETE CASCADE).
- **Unique Constraints**: None.
- **Indexes**: Index on `distro_id`.

## 6. GuideSteps Table
- **Layout**: Step number, instruction text, and image.
- **Primary Key**: `id`
- **Foreign Keys**: `guide_id` references `InstallationGuides.id` (ON DELETE CASCADE).
- **Unique Constraints**: Composite unique constraint on `(guide_id, step_number)` to prevent duplicate step numbers for a single guide.
- **Indexes**: Index on `guide_id`.

## 7. Commands Table
- **Layout**: Command string, description, syntax, category.
- **Primary Key**: `id`
- **Foreign Keys**: None.
- **Unique Constraints**: `command` must be unique.
- **Indexes**: 
  - Index on `category`.
  - Full-text search index (e.g., SQLite FTS5 extension) is highly recommended for `command` and `description` to enable rapid searching.

## 8. DailyTips Table
- **Layout**: Tip text and an optional index for cyclical display.
- **Primary Key**: `id`
- **Foreign Keys**: None.
- **Unique Constraints**: `day_index` to map unique days of the year/cycle.
- **Indexes**: Index on `day_index`.

## 9. UserPreferences Table
- **Layout**: Global boolean flags (dark mode, onboarding complete).
- **Primary Key**: `id`
- **Foreign Keys**: None.
- **Unique Constraints**: `id` is restricted to always equal `1` to enforce a single-row configuration table.
- **Indexes**: None.

## 10. LearningProgress Table
- **Layout**: Tracks completion status of various entities.
- **Primary Key**: `id`
- **Foreign Keys**: None (uses soft links via `entity_type` and `entity_id` to prevent cascade deletes from wiping user progress if content is updated/removed).
- **Unique Constraints**: Composite unique constraint on `(entity_type, entity_id)` to ensure an item is only tracked once per user context.
- **Indexes**: 
  - Index on `(entity_type, entity_id)`.
  - Index on `completed` to quickly find unfinished tasks.
