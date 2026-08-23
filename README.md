# Linux Guide

Linux Guide is an offline-first Android application built with Ionic React and Capacitor to help users learn Linux through interactive recommendations, installation guides, command references, and offline documentation.

## Features

- Linux distribution recommendation
- Linux distribution library
- Installation guides
- Command reference
- Offline-first architecture
- SQLite-based local database *(in progress)*

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Ionic React 8 |
| Language | TypeScript |
| Runtime | React |
| Native Bridge | Capacitor 8 |
| Bundler | Vite |
| Database | SQLite *(planned)* |
| Platform | Android |

---

## Getting Started

### Requirements

- Node.js 22+
- npm
- JDK 21
- Android SDK
- Android Platform Tools (ADB)
- Git

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

### Build & Install Android

```bash
npm run android
```


---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build production assets |
| `npm run cap:sync` | Sync Capacitor project |
| `npm run android` | Complete Android build pipeline |
| `npm run android:sync` | Build and sync Capacitor |
| `npm run android:build` | Build Android APK |
| `npm run android:install` | Install APK to device |

---

## Project Status: on development

```
