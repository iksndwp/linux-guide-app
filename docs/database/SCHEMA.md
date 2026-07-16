# Database Schema Blueprint

This document defines the layout, keys, and indexes for the database without relying on specific SQL syntax. It serves as the blueprint for implementation.

## 1. Families Table
- **Layout**: Stores family ID, name, description, and local `logo_asset` path.
- **Primary Key**: `id`
- **Foreign Keys**: None.
- **Unique Constraints**: `name` must be unique to prevent duplicates.
- **Indexes**: None (covered by UNIQUE on name).

## 2. Distros Table
- **Layout**: Stores distro ID, link to family, slug, name, package manager, logo asset, official website, and difficulty rating.
- **Primary Key**: `id`
- **Foreign Keys**: `family_id` references `Families.id` (ON DELETE CASCADE).
- **Unique Constraints**: `slug` must be unique for precise URL routing and lookup.
- **Indexes**: 
  - Index on `family_id` for fast filtering by family.
  - Index on `difficulty` for fast filtering by user skill level.

## 3. SystemRequirements Table
- **Layout**: Stores minimum and recommended RAM/Disk, and processor requirements.
- **Primary Key**: `id`
- **Foreign Keys**: `distro_id` references `Distros.id` (ON DELETE CASCADE).
- **Unique Constraints**: `distro_id` must be unique (One-to-One relationship).
- **Indexes**: Index on `distro_id` (covered by the unique constraint).

## 4. ProsCons Table
- **Layout**: Stores short text points categorized as 'pro' or 'con' for a distro.
- **Primary Key**: `id`
- **Foreign Keys**: `distro_id` references `Distros.id` (ON DELETE CASCADE).
- **Unique Constraints**: None.
- **Indexes**: Index on `distro_id`.

## 5. InstallationGuides Table
- **Layout**: Title, description, and estimated time for a specific distro installation.
- **Primary Key**: `id`
- **Foreign Keys**: `distro_id` references `Distros.id` (ON DELETE CASCADE).
- **Unique Constraints**: None.
- **Indexes**: Index on `distro_id`.

## 6. GuideSteps Table
- **Layout**: Step number, title, detailed instruction text, and image.
- **Primary Key**: `id`
- **Foreign Keys**: `guide_id` references `InstallationGuides.id` (ON DELETE CASCADE).
- **Unique Constraints**: Composite unique constraint on `(guide_id, step_number)` to prevent duplicate step numbers for a single guide.
- **Indexes**: Index on `guide_id`.

## 7. Commands Table
- **Layout**: Distro link, command string, description, syntax, category.
- **Primary Key**: `id`
- **Foreign Keys**: `distro_id` references `Distros.id` (ON DELETE CASCADE).
- **Unique Constraints**: None (different distros can share identical command names).
- **Indexes**: 
  - Index on `distro_id`.
  - Index on `category`.

## 8. DailyTips Table
- **Layout**: Tip content text.
- **Primary Key**: `id`
- **Foreign Keys**: None.
- **Unique Constraints**: None.
- **Indexes**: None (chosen randomly at runtime).

## 9. UserPreferences Table
- **Layout**: Global boolean flags (dark mode, onboarding complete) and onboarding engine variables (experience, terminal_skill, purpose, priority).
- **Primary Key**: `id`
- **Foreign Keys**: None.
- **Unique Constraints**: `id` is restricted to always equal `1` to enforce a single-row configuration table.
- **Indexes**: None.

## 10. LearningProgress Table
- **Layout**: Tracks completion status and current step specifically for guides.
- **Primary Key**: `id`
- **Foreign Keys**: None strictly required, though conceptually links to `InstallationGuides`.
- **Unique Constraints**: `guide_id` is unique to ensure 1:1 progress tracking.
- **Indexes**: 
  - Index on `completed` to quickly find unfinished tasks.
