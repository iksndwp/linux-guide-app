# Linux Guide

Linux Guide is an offline-first Android application built with Ionic React and Capacitor.

The application helps users learn Linux through:

- Linux distribution recommendations
- Installation guides
- Command references
- Offline documentation

---

# Tech Stack

- Ionic React 8
- React
- TypeScript
- Capacitor 8
- Vite
- Android SDK
- Gradle
- Node.js

---

# Requirements

Before running this project, install:

- Node.js 22+
- npm
- Java Development Kit (JDK) 21
- Android SDK
- Android Platform Tools (ADB)
- Git

Linux is recommended.

---

# Clone Project

```bash
git clone https://github.com/iksndwp/linux-guide-app.git
```

---

# Install Dependencies

```bash
npm install
```

---

# Android SDK

Make sure Android SDK is installed.

Example:

```
~/Android/Sdk
```

Set environment variables.

Example:

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk

export ANDROID_HOME=$HOME/Develop/kit/android
export ANDROID_SDK_ROOT=$ANDROID_HOME

export PATH="$JAVA_HOME/bin:$PATH"
export PATH="$ANDROID_HOME/platform-tools:$PATH"
```

---

# Verify Environment

```bash
java -version

javac -version

adb devices
```

---

# Install Android Platform

```bash
npx cap sync android
```

---

# Run Development Server

```bash
npm run dev
```

Default:

```
http://localhost:5173
```

---

# Build Android APK

```bash
npm run android
```

This command automatically performs:

1. Build Vite project
2. Sync Capacitor
3. Build Android APK
4. Install APK to connected Android device

---

# Manual Build

If needed:

```bash
npm run build

npx cap sync android

cd android

JAVA_HOME=/usr/lib/jvm/java-21-openjdk ./gradlew assembleDebug

adb install -r app/build/outputs/apk/debug/app-debug.apk
```

---

# Available Scripts

```bash
npm run dev
```

Start Vite development server.

```bash
npm run build
```

Build production web assets.

```bash
npm run cap:sync
```

Sync web assets to Capacitor.

```bash
npm run android:sync
```

Build web assets and sync Capacitor.

```bash
npm run android:build
```

Build Android APK.

```bash
npm run android:install
```

Install APK to connected Android device.

```bash
npm run android
```

Complete Android build pipeline.

---



# License

This project is developed for educational purposes.
