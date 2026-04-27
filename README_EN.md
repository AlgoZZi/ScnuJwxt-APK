# SCNU Academic Assistant (ScnuJwxt)

<p align="center"><a href="README.md">中文</a> | English</p>

[![Android](https://img.shields.io/badge/Android-24%2B-brightgreen)](https://developer.android.com/) [![Kotlin](https://img.shields.io/badge/Kotlin-100%25-purple)](https://kotlinlang.org/) [![Compose](https://img.shields.io/badge/Jetpack%20Compose-UI-blue)](https://developer.android.com/jetpack/compose) [![License](https://img.shields.io/badge/License-Private-lightgrey)](LICENSE)

**SCNU Academic Assistant** is an **unofficial** Android app designed for **current students of South China Normal University (SCNU)**. It aims to centralize access to class schedules, grades, exam arrangements, notifications, course selection information, and more into a mobile-friendly interface, with capabilities for data export, file download, and message viewing.

> This application is primarily intended for academic use within the university. Before using, please ensure you have legal access to the university's academic system and comply with relevant university regulations.

---

## Project Overview

Built with **Jetpack Compose + Kotlin**, this app focuses on common operations in SCNU's academic system, aiming to provide a lightweight, clear, and mobile-friendly entry point. The current GitHub repository is only for publishing **APK installation packages**; source code is not publicly available. The app supports:

- Student class schedule query and weekly view browsing
- Grade inquiry, detailed grade viewing, and export
- Exam schedule query and export
- Notification, file, and message viewing
- Course selection query and submission
- Electronic certificate application and download
- Personal information display, account management, and login status maintenance
- In-app AI assistant access (displayed based on permissions)

---

## Features

### 1. Class Schedule
- Weekly view displaying current semester's course arrangements
- Auto-locate current week
- Support left/right week switching
- View course details including instructor, location, period, campus, credits, weeks, etc.
- Schedule settings: start date, total weeks, class times, semester identification method, etc.
- Export current semester schedule as PDF
- View university academic calendar

### 2. Grades
- Display all graded course records
- Support semester switching for historical grade inquiry
- View detailed grade breakdown: attendance score, final exam score, comprehensive score, and percentages
- Export grade table files

### 3. Electronic Certificates
- Apply for electronic transcripts
- Apply for electronic certificates
- Select time range, language version, and other parameters
- Preview and download PDF

### 4. Exam Arrangements
- View current and historical semester exam information
- Display exam time, location, seat number, campus, credits, etc.
- Export exam schedule files

### 5. Course Selection
- Query available courses during selection period
- Browse by course type categories
- View course details and capacity information
- Submit course selection requests
- View selected courses list

### 6. Notifications, Files, Messages
- View academic notifications and announcements
- View files distributed by the academic system
- View in-app messages, categorized as unread and read
- Attachment download support for some content

### 7. Personal Center
- Display name, student ID, college, major, class
- Save student ID and password for auto-login
- Access to announcements, help, feedback, device ID, about, etc.

### 8. AI Assistant
- Display based on developer authorization: Claude sonnet-4.6, Qwen, ChatGPT-5.4, etc.
- Provide assistance tailored to campus scenarios
- Separated from core academic functions to avoid interference

---

## Interface & Modules

The app's main interface typically includes the following modules:

- `Schedule`
- `Grades`
- `Exams`
- `Course Selection`
- `Personal Center`
- `Notifications`
- `Files`
- `Messages`
- `Help`
- `Feedback`
- `Announcements`
- `About`

Some features may not be displayed by default depending on version or authorization status.

---

## Tech Stack

- **Language**: Kotlin
- **UI**: Jetpack Compose, Material 3
- **Architecture**: ViewModel + Repository
- **Network**: OkHttp, JSoup, Gson
- **Local Storage**: DataStore Preferences
- **Image Loading**: Coil
- **Rich Text Rendering**: Markwon
- **Testing**: JUnit, AndroidX Test, Compose UI Test
- **Build Tool**: Gradle Kotlin DSL

---

## Runtime Environment

- **Minimum Android Version**: API 24
- **Target Android Version**: API 36
- **Compile Version**: API 36.1
- **Development Language Version**: Java 11 / Kotlin

It is recommended to use a newer version of Android Studio for development and debugging.

---

## Installation & Running

### Install Release APK Directly

1. Go to the `Releases` page of the GitHub repository
2. Download the APK file for the corresponding version
3. Complete installation on your Android device
4. If blocked by the system during first installation, allow "Install unknown apps" permission

> Note: Since the source code is not publicly available in this repository, regular users only need to download the APK from `Releases`.

---

## Configuration Notes

### 1. Semester & Schedule Settings

When using schedule-related features for the first time, it is recommended to check:

- Start date of the semester
- Current semester
- Total number of weeks
- Class start/end times
- Campus-specific schedule rules

If your campus has different schedule times from the default values, you can adjust them in the settings.

### 2. Login Information

The app may require you to provide student ID, password, or login credentials to access academic data.

Recommendations:

- Confirm your account password is correct
- Only save login status on trusted devices
- Re-login promptly after account changes

### 3. Export & Download

Some features support exporting PDF or table files, which typically require:

- Stable network connection
- Storage permission or system file access capability
- Sufficient storage space on your device

---

## Permission Notes

The app includes the following common permissions or capabilities:

- `INTERNET`: Access academic-related network data
- `REQUEST_INSTALL_PACKAGES`: Handle app updates or installation package processes
- `FileProvider`: Securely share or open exported files

The app also enables file saving, downloading, and content sharing capabilities, which may vary depending on the Android version.

---

## Privacy & Data Notes

### Privacy Protection

This app does not store user academic passwords. Login credentials are only used for interaction with the university's academic system to ensure account security.

### Data Collection

Only necessary device identifiers are collected for early beta testing and post-release qualification verification and feedback tracking. No other purposes.

### Data Source

All data including schedules, grades, and exams comes from the official SCNU academic system. Data displayed in the app is cached at login. To view the latest information, refresh or re-login. Do not use in-app data as the sole reference for important matters such as exams or course selection. Always refer to the official academic system website.

---

## Release Notes

This repository only provides APK release files for direct download and installation.

- For the latest version, go to `Releases`
- For historical versions, select the corresponding tag on the `Releases` page
- If installation fails, confirm your device's Android version meets the minimum requirements
- If the system prompts a security warning, confirm the APK source is the official release page of this repository

---

## Project Structure

```text
ScnuJwxt/
├── app/
├── gradle/
├── build.gradle.kts
├── settings.gradle.kts
└── README.md
```

This page only retains project description and release information. Source code structure is not displayed in the public repository.

---

## Version Information

Current release version:

- **App Name**: SCNU Academic Assistant
- **Version**: `1.5`
- **Version Code**: `6`
- **Package Name**: `com.example.scnujwxt`

To confirm the currently installed version, refer to the app's "About" page or the GitHub `Releases` page.

Each version typically includes:

- Version number
- Update content
- Fixed issues
- Known limitations
- Release date
- Corresponding APK file name

---

## TODO

The testing and integration of some LiRuyun feature links have been completed, and the relevant logic code has basic functionality. We will continue to promote official integration into the App and continuously improve the experience based on actual usage feedback.

---

## Service & Disclaimer

### Service Period

The app is tentatively scheduled to operate for one year. During this period, the developer will strive to maintain app stability, perform timely version updates, and fix issues.

### Disclaimer

This application is an unofficial tool for learning and convenience purposes only, and does not assume official academic service responsibilities. The developer will make every effort to fix but does not guarantee against functional unavailability, information discrepancies, etc., caused by academic system changes, account abnormalities, network issues, data delays, interface changes, or user operation errors. Do not use this application for any purposes that violate university regulations.

---

## Feedback & Suggestions

The app is continuously being optimized. Students are welcome to submit issues and suggestions through the in-app `My - Feedback` feature to help the developer improve functionality and user experience.

---

## Acknowledgments

Thanks to all students who participated in the beta testing, usage, testing, feedback, and suggestions! May **SCNU Academic Assistant** bring convenience to everyone's academic life!
