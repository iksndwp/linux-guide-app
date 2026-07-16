# Entity Relationship Diagram (ERD)

This document visualizes the structural relationships between entities in the Linux Guide database.

## ASCII ERD

```text
[Families] 1 ----------- * [Distros]
                              |
                              +-- 1 ------ 1 [SystemRequirements]
                              |
                              +-- 1 ------ * [ProsCons]
                              |
                              +-- 1 ------ * [InstallationGuides] 1 ------- * [GuideSteps]

[Commands]           (Standalone Reference)
[DailyTips]          (Standalone Content)
[UserPreferences]    (App Configuration)
[LearningProgress]   (User Tracking)
```

## Relationship Explanation

1. **Families to Distros (1:N)**: One family (e.g., Debian) can have many distros (Ubuntu, Mint). A distro belongs to exactly one family.
2. **Distros to SystemRequirements (1:1)**: Each distro has exactly one set of system requirements (minimum and recommended specs). 
3. **Distros to ProsCons (1:N)**: A distro can have multiple pros and cons listed for comparative analysis.
4. **Distros to InstallationGuides (1:N)**: A distro might have multiple guides (e.g., Dual Boot, Bare Metal).
5. **InstallationGuides to GuideSteps (1:N)**: An installation guide is broken down into multiple sequential steps.
6. **Commands & DailyTips**: These serve as global content libraries. They don't have strict referential integrity ties to distros, as commands are generally universal.
7. **UserPreferences & LearningProgress**: These store local user state. `LearningProgress` stores references to entity IDs (soft links) rather than enforcing strict foreign keys to allow content updates without breaking local tracking.

## Navigation Explanation

- **Distro Browsing**: Start at `Families` -> fetch `Distros` -> Select a `Distro` -> fetch `SystemRequirements` & `ProsCons`.
- **Installation Flow**: From `Distro` -> fetch `InstallationGuides` -> Select `Guide` -> fetch `GuideSteps` ordered by step number.
- **Reference**: Fetch `Commands` directly, filterable by name or category.
- **Home Screen**: Fetch random or cyclic `DailyTips`. Read `UserPreferences` and `LearningProgress` to populate layout and resume cards.

## Example Data Flow

When a user clicks "Ubuntu" in the UI:
1. Application queries `Distros` where id = X.
2. Application queries `SystemRequirements` where distro_id = X.
3. Application queries `ProsCons` where distro_id = X.
4. All retrieved data is mapped to a single `DistroDetail` object in the application layer and rendered to the screen simultaneously.
