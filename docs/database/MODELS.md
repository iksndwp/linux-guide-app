# Database Models

This document describes the conceptual entities within the Linux Guide database, their relationships, and how they are used within the application.

## 1. Families
- **Purpose**: Groups Linux distributions by their parent lineage (e.g., Debian, Red Hat, Arch).
- **Relationship**: One-to-Many with `Distros`.
- **Example**: "Debian Family"
- **Usage inside the application**: Used for filtering the distro library and organizing learning tracks.

## 2. Distros
- **Purpose**: Represents a specific Linux distribution.
- **Relationship**: 
  - Belongs to one `Families`.
  - One-to-One with `SystemRequirements`.
  - One-to-Many with `ProsCons` and `InstallationGuides`.
- **Example**: "Ubuntu 22.04 LTS"
- **Usage inside the application**: Displayed in the Distribution Library and Details screens. The core subject matter of the app.

## 3. SystemRequirements
- **Purpose**: Defines the hardware requirements (minimum and recommended) for a specific distro.
- **Relationship**: One-to-One with `Distros`.
- **Example**: "Minimum: 2GB RAM, 25GB Disk"
- **Usage inside the application**: Displayed on the Distro Details screen to help users decide if their hardware is compatible.

## 4. ProsCons
- **Purpose**: Lists the advantages and disadvantages of a particular distro.
- **Relationship**: Many-to-One with `Distros`.
- **Example**: "Pro: Highly stable. Con: Older software packages."
- **Usage inside the application**: Rendered as a comparison list on the Distro Details screen.

## 5. InstallationGuides
- **Purpose**: Represents a high-level guide on how to install a distro.
- **Relationship**: 
  - Many-to-One with `Distros`.
  - One-to-Many with `GuideSteps`.
- **Example**: "Ubuntu Clean Installation Guide"
- **Usage inside the application**: Listed in the distros section for users preparing to install a system.

## 6. GuideSteps
- **Purpose**: The individual, sequential steps required to complete an `InstallationGuides`.
- **Relationship**: Many-to-One with `InstallationGuides`.
- **Example**: "Step 1: Download the ISO file."
- **Usage inside the application**: Rendered in a step-by-step wizard when a user opens a specific guide.

## 7. Commands
- **Purpose**: A reference dictionary of Linux terminal commands.
- **Relationship**: Standalone reference.
- **Example**: `ls -la` (List directory contents)
- **Usage inside the application**: Powers the Command Reference screen and search functionality.

## 8. DailyTips
- **Purpose**: Short, bite-sized pieces of knowledge or trivia about Linux.
- **Relationship**: Standalone content.
- **Example**: "Did you know `cd -` takes you back to your previous directory?"
- **Usage inside the application**: Displayed on the home screen as a "Tip of the Day".

## 9. UserPreferences
- **Purpose**: Stores the user's app-wide settings.
- **Relationship**: Standalone, single-row configuration.
- **Example**: Dark mode enabled, Default starting screen.
- **Usage inside the application**: Read at app startup to configure the UI.

## 10. LearningProgress
- **Purpose**: Tracks what guides, commands, or distros the user has read or completed.
- **Relationship**: Links to entities indirectly via entity IDs and types (soft links).
- **Example**: "User completed the 'Basic File Navigation' module."
- **Usage inside the application**: Powers the "Continue Learning" cards and progress bars.

---

## 11. Recommendation Engine (Conceptual Module)

*Note: This is not a database table, but a logical application module that leverages the database to generate recommendations.*

- **Inputs**: User responses to an in-app questionnaire (e.g., "Do you have an old PC?", "Are you comfortable with the terminal?").
- **Processing**: 
  - The application takes user answers and maps them to query parameters.
  - For hardware (Old PC), the engine queries the `SystemRequirements` table to filter out distros needing high RAM/Disk.
  - For skill level, it filters the `Distros` table based on the `difficulty` column.
  - For specific use cases (Gaming, Stability), it scans `ProsCons` for matching keywords.
- **Outputs**: A sorted, filtered list of `Distros` objects that best match the user's criteria.
- **Data Flow**:
  1. User completes UI questionnaire.
  2. App translates answers into logical SQLite queries with `WHERE` and `LIKE` clauses.
  3. Query is executed against `Distros`, `SystemRequirements`, and `ProsCons`.
  4. The returned results are sorted by relevance and displayed as recommendations.
