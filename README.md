# Linux Guide

Linux Guide is an offline-first Android application built with Ionic React and Capacitor to help users learn Linux through interactive recommendations, installation guides, command references, and offline documentation.

> **Status:** under active development. Features marked *(in progress)* are not finished yet.

## Features

- Linux distribution recommendation
- Linux distribution library
- Installation guides
- Command reference
- Offline-first architecture
- SQLite-based local database *(in progress)*

## Tech Stack

| Category       | Technology                                   |
| -------------- | -------------------------------------------- |
| Framework      | Ionic React 8                                |
| UI             | React 19, React Router 5                     |
| Language       | TypeScript 5.9                               |
| Native Bridge  | Capacitor 8                                  |
| Bundler        | Vite 5                                       |
| Local Storage  | `@capacitor-community/sqlite` *(in progress)*, `@capacitor/preferences` |
| Testing        | Vitest (unit), Cypress (e2e)                 |
| Linting        | ESLint 9                                     |
| Platform       | Android                                      |

## Project Structure

```
linux-guide-app/
├── android/          # Native Android project (Capacitor)
├── cypress/          # End-to-end tests
├── docs/database/    # Database documentation
├── public/           # Static assets
├── src/              # Application source code
├── capacitor.config.ts
├── vite.config.ts
└── package.json
```

## Getting Started

### Requirements

- Node.js 22+
- npm
- JDK 21
- Android SDK
- Android Platform Tools (ADB)
- Git
- An Android device (USB debugging enabled) or emulator, for installing the APK

### Installation

```bash
git clone https://github.com/iksndwp/linux-guide-app.git
cd linux-guide-app
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build & Install on Android

Connect your device (or start an emulator), then run:

```bash
npm run android
```

This builds the web assets, syncs them to the Android project, builds a debug APK, and installs it via ADB.

> **Note:** the `android:build` script sets `JAVA_HOME=/usr/lib/jvm/java-21-openjdk`, which is a typical Linux path. If your JDK 21 is installed elsewhere, adjust it in `package.json`.

## Available Scripts

| Command                   | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `npm run dev`             | Start Vite development server                        |
| `npm run build`           | Type-check and build production assets               |
| `npm run preview`         | Preview the production build locally                 |
| `npm run cap:sync`        | Sync web assets to the Capacitor Android project     |
| `npm run android:sync`    | Build web assets and sync Capacitor                  |
| `npm run android:build`   | Build the debug APK (Gradle)                         |
| `npm run android:install` | Install the debug APK to a connected device via ADB  |
| `npm run android`         | Full pipeline: sync → build APK → install            |
| `npm run test.unit`       | Run unit tests with Vitest                           |
| `npm run test.e2e`        | Run end-to-end tests with Cypress                    |
| `npm run lint`            | Lint the codebase with ESLint                        |

## Roadmap

- [x] Ionic React + Capacitor project setup
- [x] Android build & install pipeline
- [ ] SQLite local database integration
- [ ] Complete distribution library content
- [ ] Complete installation guides and command reference
- [ ] Full offline documentation

## Project Status

On development.
