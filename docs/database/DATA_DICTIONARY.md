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
| `logo_asset` | TEXT | Yes | No | No | No | None | Local path to logo | None | `assets/logos/debian.png` |

---

## Table: Distros
**Description**: Stores specific Linux distributions.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `dist_01` |
| `family_id` | TEXT | No | No | Yes (`Families.id`) | No | None | Link to family | FK constraint | `fam_01` |
| `slug` | TEXT | No | No | No | Yes | None | URL friendly name | Length > 0 | `ubuntu-22-04` |
| `name` | TEXT | No | No | No | No | None | Distribution name | Length > 0 | `Ubuntu 22.04 LTS` |
| `package_manager` | TEXT | No | No | No | No | None | Primary package tool| None | `apt` |
| `logo_asset` | TEXT | Yes | No | No | No | None | Local path to logo | None | `assets/logos/ubuntu.png` |
| `official_website`| TEXT | Yes | No | No | No | None | Project URL | None | `https://ubuntu.com` |
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
| `processor` | TEXT | No | No | No | No | None | Processor requirements| None | `Dual Core 2GHz` |

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
| `description` | TEXT | Yes | No | No | No | None | Short guide summary | None | `Install Ubuntu alongside...` |
| `estimated_time`| INTEGER| Yes | No | No | No | None | Time in minutes | > 0 | `45` |

---

## Table: GuideSteps
**Description**: Sequential instructions for an installation guide.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `step_01` |
| `guide_id` | TEXT | No | No | Yes (`InstGuides.id`)| No | None | Link to guide | FK constraint | `guide_01` |
| `step_number`| INTEGER | No | No | No | No | None | Ordering of the step| > 0 | `1` |
| `title` | TEXT | No | No | No | No | None | Step title | Length > 0 | `Download ISO` |
| `instruction`| TEXT | No | No | No | No | None | The step details | Length > 0 | `Go to ubuntu.com...` |
| `image_url` | TEXT | Yes | No | No | No | None | Local image path | None | `assets/steps/rufus.png`|

---

## Table: Commands
**Description**: Reference library for terminal commands.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `cmd_01` |
| `distro_id` | TEXT | No | No | Yes (`Distros.id`) | No | None | Link to distro | FK constraint | `dist_01` |
| `command` | TEXT | No | No | No | No | None | The command name | Length > 0 | `apt update` |
| `description`| TEXT | No | No | No | No | None | What it does | Length > 0 | `Updates package lists`|
| `syntax` | TEXT | Yes | No | No | No | None | Usage syntax | None | `sudo apt update`|
| `category` | TEXT | Yes | No | No | No | None | Command grouping | None | `Package Management` |

---

## Table: DailyTips
**Description**: Bite-sized tips and trivia.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `tip_01` |
| `content` | TEXT | No | No | No | No | None | The tip text | Length > 0 | `Use '!!' to repeat...` |

---

## Table: UserPreferences
**Description**: Stores local settings and recommendation engine variables.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | INTEGER| No | Yes | No | Yes | `1` | Single row enforcement| = 1 | `1` |
| `dark_mode` | INTEGER| No | No | No | No | `0` | 0=False, 1=True | IN (0, 1) | `1` |
| `onboarding_completed` | INTEGER| No | No | No | No | `0` | 0=Not done, 1=Done | IN (0, 1) | `1` |
| `experience` | TEXT | Yes | No | No | No | None | Rec Engine Input | None | `beginner` |
| `terminal_skill`| TEXT | Yes | No | No | No | None | Rec Engine Input | None | `none` |
| `purpose` | TEXT | Yes | No | No | No | None | Rec Engine Input | None | `gaming` |
| `priority` | TEXT | Yes | No | No | No | None | Rec Engine Input | None | `stability` |

---

## Table: LearningProgress
**Description**: Tracks user's progress through installation guides.

| Column | Type | Nullable | Primary Key | Foreign Key | Unique | Default Value | Description | Constraints | Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | TEXT | No | Yes | No | Yes | UUID/Auto | Unique identifier | None | `prog_01` |
| `guide_id` | TEXT | No | No | No | Yes | None | Link to Guide | UNIQUE | `guide_01` |
| `current_step`| INTEGER| No | No | No | No | `1` | Last viewed step | > 0 | `2` |
| `completed` | INTEGER| No | No | No | No | `0` | 0=False, 1=True | IN (0, 1) | `1` |
| `last_opened` | TEXT | No | No | No | No | None | Last viewed time | None | `2023-10-01T12:00:00Z`|
