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
                              +-- 1 ------ * [Commands]
                              |
                              +-- 1 ------ * [InstallationGuides] 1 ------- * [GuideSteps]
                                                                  |
                                                                  +-- 1 --- 1 [LearningProgress]

[DailyTips]          (Standalone Content)
[UserPreferences]    (App Configuration)
```

## Relationship Explanation

1. **Families to Distros (1:N)**: One family (e.g., Debian) can have many distros (Ubuntu, Mint). A distro belongs to exactly one family.
2. **Distros to SystemRequirements (1:1)**: Each distro has exactly one set of system requirements (minimum and recommended specs). 
3. **Distros to ProsCons (1:N)**: A distro can have multiple pros and cons listed for comparative analysis.
4. **Distros to Commands (1:N)**: A distro can have specific terminal commands associated with it.
5. **Distros to InstallationGuides (1:N)**: A distro might have multiple guides (e.g., Dual Boot, Bare Metal).
6. **InstallationGuides to GuideSteps (1:N)**: An installation guide is broken down into multiple sequential steps.
7. **InstallationGuides to LearningProgress (1:1)**: Progress is tracked specifically for each installation guide.
8. **DailyTips**: Standalone content library for random daily tips.
9. **UserPreferences**: Local configuration state, storing dark mode, onboarding, and recommendation engine variables.

## Navigation Explanation

- **Distro Browsing**: Start at `Families` -> fetch `Distros` -> Select a `Distro` -> fetch `SystemRequirements` & `ProsCons`.
- **Installation Flow**: From `Distro` -> fetch `InstallationGuides` -> Select `Guide` -> fetch `GuideSteps` ordered by step number. Check `LearningProgress` to resume.
- **Reference**: Fetch `Commands` by `distro_id` and `category`.
- **Home Screen**: Fetch random `DailyTips`. Read `UserPreferences` to drive recommendations, and `LearningProgress` to populate resume cards.

## Example Data Flow

When a user clicks "Ubuntu" in the UI:
1. Application queries `Distros` where slug = 'ubuntu'.
2. Application queries `SystemRequirements` where distro_id = X.
3. Application queries `ProsCons` where distro_id = X.
4. All retrieved data is mapped to a single `DistroDetail` object in the application layer and rendered to the screen simultaneously.
