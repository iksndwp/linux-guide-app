/**
 * Home screen — mock data for Sprint 07.
 *
 * INTEGRATION NOTES (future sprints):
 *  - `preferences`       → replace with values loaded from Capacitor Preferences
 *                          written by the Onboarding flow.
 *  - `recommendations`   → replace with results from the Recommendation Engine
 *                          (SQLite-backed, scored by user profile).
 *  - `commands`          → can remain static or be curated per user skill level.
 *  - `dailyTip`          → replace with a randomly selected tip from SQLite.
 *  - `learningProgress`  → replace with progress loaded from SQLite.
 *  - `hasLearningProgress` → derive from whether a progress row exists in SQLite.
 */

import type {
  DailyTip,
  LearningProgress,
  Preference,
  QuickCommand,
  Recommendation,
} from './types';

/** Controls visibility of the "Continue Learning" section. */
export const hasLearningProgress = false;

/** Four preference cards in the "Your Preferences" grid. */
export const preferences: Preference[] = [
  { label: 'Experience', value: 'Beginner' },
  { label: 'Terminal', value: 'Basic' },
  { label: 'Purpose', value: 'Daily Use' },
  { label: 'Priority', value: 'Easy to use' },
];

/** Three distros shown in "Recommended For You". */
export const recommendations: Recommendation[] = [
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    family: 'Debian-based',
    difficulty: 'Beginner',
    logoInitial: 'U',
    logoColor: '#E95420',
  },
  {
    id: 'linux-mint',
    name: 'Linux Mint',
    family: 'Debian-based',
    difficulty: 'Beginner',
    logoInitial: 'LM',
    logoColor: '#87CF3E',
  },
  {
    id: 'manjaro',
    name: 'Manjaro',
    family: 'Arch-based',
    difficulty: 'Intermediate',
    logoInitial: 'Mj',
    logoColor: '#34BE5B',
  },
];

/** Three quick commands shown in the "Quick Commands" section. */
export const commands: QuickCommand[] = [
  {
    id: 'ls-la',
    command: 'ls -la',
    description: 'List all files with details',
  },
  {
    id: 'apt-update',
    command: 'sudo apt update',
    description: 'Update package list',
  },
  {
    id: 'pwd',
    command: 'pwd',
    description: 'Print working directory',
  },
];

/** One daily tip displayed at the bottom of the Home screen. */
export const dailyTip: DailyTip = {
  text: 'Use "!!" to rerun the last command with sudo. Simply type sudo !! and press Enter.',
};

/**
 * Mock learning progress shown when `hasLearningProgress` is true.
 * Unused this sprint but kept to validate the ContinueLearningCard component.
 */
export const learningProgress: LearningProgress = {
  distroName: 'Ubuntu Installation',
  currentStep: 4,
  totalSteps: 12,
};
