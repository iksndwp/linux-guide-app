# Database Seed Plan

This document describes the initial dataset required to populate the database on a fresh installation, ensuring the application is immediately useful offline.

## Initial Linux Families
- **Debian**: The foundation for many user-friendly distros.
- **Arch**: Known for rolling releases and high customizability.
- **Red Hat**: Enterprise-focused, base for Fedora.
- **Reason**: Provides a broad taxonomy covering 90% of the mainstream desktop distros users will want to learn about.

## Initial Distros
- **Ubuntu**: The standard recommendation for beginners (Debian family).
- **Linux Mint**: A highly accessible alternative to Windows (Debian family).
- **Fedora**: Modern, cutting-edge software (Red Hat family).
- **Manjaro**: Accessible entry point to the Arch ecosystem (Arch family).
- **Reason**: These represent the most commonly requested distros for newcomers, providing a robust baseline for the library.

## Initial Commands
- **File Management**: `ls`, `cd`, `cp`, `mv`, `rm`, `mkdir`
- **System Info**: `top`, `htop`, `df`, `free`, `uname`
- **Network**: `ping`, `ip`, `curl`
- **Permissions**: `chmod`, `chown`, `sudo`
- **Reason**: A curated list of the absolute essential commands every Linux user must know, categorized logically for learning tracks.

## Initial Daily Tips
- Provide 30 initial tips covering terminal shortcuts, philosophy (e.g., "Everything is a file"), and basic security practices.
- **Reason**: Ensures a full month of unique content for the Home Screen before looping or requiring an app update.

## Initial Installation Guides
- **Ubuntu: Clean Install (Bare Metal)**
- **Ubuntu: Dual Boot with Windows**
- **Linux Mint: Virtual Machine Installation**
- **Reason**: Focuses on the most common scenarios beginners face when trying Linux for the first time.

## Learning Progress Defaults
- Leave table completely empty on initialization. 
- **Reason**: Progress is entirely user-driven. Empty state implies 0% completion.

## User Preference Defaults
- Insert a single row with ID `1`.
- `dark_mode` = 0 (or detect system default at runtime).
- `onboarding` = 0 (Not done).
- **Reason**: Ensures the configuration row exists so the app can `UPDATE` it rather than handling complex `INSERT/UPDATE` logic branching during runtime.
