/**
 * Home screen — shared TypeScript interfaces.
 *
 * These types define the data contracts for every section of the Home dashboard.
 * All fields are intentionally kept flat and simple for this sprint.
 * Future sprints can evolve these types as real data sources are integrated.
 */

/** One preference item shown in the "Your Preferences" grid. */
export interface Preference {
  /** Display label, e.g. "Experience" */
  label: string;
  /** Human-readable value, e.g. "Beginner" */
  value: string;
}

/** Difficulty level of a Linux distribution. */
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

/** One distro card shown in the "Recommended For You" section. */
export interface Recommendation {
  id: string;
  name: string;
  /** Distro family, e.g. "Debian-based" */
  family: string;
  difficulty: Difficulty;
  /** Single or two-letter abbreviation used as logo placeholder, e.g. "U" */
  logoInitial: string;
  /** CSS-compatible color string for the logo background, e.g. "#E95420" */
  logoColor: string;
}

/** One Linux command shown in the "Quick Commands" section. */
export interface QuickCommand {
  id: string;
  /** The raw command string, e.g. "ls -la" */
  command: string;
  /** Short human description, e.g. "List all files with details" */
  description: string;
}

/** A single daily tip. */
export interface DailyTip {
  text: string;
}

/** Current in-progress learning state for the "Continue Learning" section. */
export interface LearningProgress {
  distroName: string;
  currentStep: number;
  totalSteps: number;
}
