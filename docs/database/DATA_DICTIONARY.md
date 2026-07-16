# Data Dictionary

This document thoroughly defines every table, column, and constraint in the database. 

---

## Table: Families
**Description**: Stores the parent lineages of Linux distributions.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `fam_01` |
| `name` | TEXT | No | No | No | Yes | None | Name of the family | Length > 0 | `Debian` |
| `description` | TEXT | Yes | No | No | No | None | Brief history or info | None | `Known for stability...` |
| `logo_url` | TEXT | Yes | No | No | No | None | Local path to logo | None | `assets/logos/debian.png` |

---

## Table: Distros
**Description**: Stores specific Linux distributions.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `dist_01` |
| `family_id` | TEXT | No | No | Yes (`Families.id`) | No | None | Link to family | FK constraint | `fam_01` |
| `name` | TEXT | No | No | No | No | None | Distribution name | Length > 0 | `Ubuntu 22.04 LTS` |
| `version` | TEXT | Yes | No | No | No | None | Release version | None | `22.04` |
| `release_date` | TEXT | Yes | No | No | No | None | Initial release date | ISO-8601 string | `2022-04-21` |
| `difficulty` | INTEGER | No | No | No | No | `1` | 1 (Easy) to 3 (Hard) | IN (1, 2, 3) | `1` |
| `description` | TEXT | Yes | No | No | No | None | Overview of the distro| None | `A popular desktop...` |

---

## Table: SystemRequirements
**Description**: Hardware requirements for a distribution.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `sysreq_01` |
| `distro_id` | TEXT | No | No | Yes (`Distros.id`) | Yes | None | Link to distro | FK constraint | `dist_01` |
| `min_ram_mb` | INTEGER | No | No | No | No | None | Minimum RAM in MB | >= 0 | `2048` |
| `rec_ram_mb` | INTEGER | No | No | No | No | None | Recommended RAM MB| >= 0 | `4096` |
| `min_disk_gb` | INTEGER | No | No | No | No | None | Minimum Disk in GB | >= 0 | `25` |
| `architecture` | TEXT | No | No | No | No | None | Supported CPU archs | None | `x86_64, ARM` |

---

## Table: ProsCons
**Description**: Advantages and disadvantages for distributions.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `pc_01` |
| `distro_id` | TEXT | No | No | Yes (`Distros.id`) | No | None | Link to distro | FK constraint | `dist_01` |
| `type` | TEXT | No | No | No | No | None | Is it a pro or con? | IN ('pro', 'con') | `pro` |
| `content` | TEXT | No | No | No | No | None | The actual point | Length > 0 | `Huge community support` |

---

## Table: InstallationGuides
**Description**: High-level guides for installing a system.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `guide_01` |
| `distro_id` | TEXT | No | No | Yes (`Distros.id`) | No | None | Link to distro | FK constraint | `dist_01` |
| `title` | TEXT | No | No | No | No | None | Name of the guide | Length > 0 | `Dual Boot with Windows`|
| `estimated_time`| INTEGER| Yes | No | No | No | None | Time in minutes | > 0 | `45` |

---

## Table: GuideSteps
**Description**: Sequential instructions for an installation guide.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `step_01` |
| `guide_id` | TEXT | No | No | Yes (`InstGuides.id`)| No | None | Link to guide | FK constraint | `guide_01` |
| `step_number`| INTEGER | No | No | No | No | None | Ordering of the step| > 0 | `1` |
| `instruction`| TEXT | No | No | No | No | None | The step details | Length > 0 | `Download Rufus...` |
| `image_url` | TEXT | Yes | No | No | No | None | Local image path | None | `assets/steps/rufus.png`|

---

## Table: Commands
**Description**: Reference library for terminal commands.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `cmd_01` |
| `command` | TEXT | No | No | No | Yes | None | The command name | Length > 0 | `ls` |
| `description`| TEXT | No | No | No | No | None | What it does | Length > 0 | `List directory contents`|
| `syntax` | TEXT | Yes | No | No | No | None | Usage syntax | None | `ls [OPTION]... [FILE]...`|
| `category` | TEXT | Yes | No | No | No | None | Command grouping | None | `File Management` |

---

## Table: DailyTips
**Description**: Bite-sized tips and trivia.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `tip_01` |
| `content` | TEXT | No | No | No | No | None | The tip text | Length > 0 | `Use '!!' to repeat...` |
| `day_index` | INTEGER | Yes | No | No | Yes | None | Numeric day mapping | >= 1 | `15` |

---

## Table: UserPreferences
**Description**: Stores the local settings for the user.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | INTEGER| No | Yes | No | Yes | `1` | Single row enforcement| = 1 | `1` |
| `dark_mode` | INTEGER| No | No | No | No | `0` | 0=False, 1=True | IN (0, 1) | `1` |
| `onboarding` | INTEGER| No | No | No | No | `0` | 0=Not done, 1=Done | IN (0, 1) | `1` |

---

## Table: LearningProgress
**Description**: Tracks the user's progress through modules, guides, or distros.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `prog_01` |
| `entity_type`| TEXT | No | No | No | No | None | What is being tracked| IN ('guide', 'cmd') | `guide` |
| `entity_id` | TEXT | No | No | No | No | None | ID of the tracked item| None | `guide_01` |
| `completed` | INTEGER| No | No | No | No | `0` | 0=False, 1=True | IN (0, 1) | `1` |
| `timestamp` | TEXT | No | No | No | No | None | Completion time | ISO-8601 | `2023-10-01T12:00:00Z`|
