# Habit Tracker

A responsive web application for managing and tracking daily habits. The application allows users to create habits, record daily completion, monitor streaks, and track overall progress through a clean and intuitive interface.

## Overview

Building consistent habits requires regular tracking and visibility into progress. Habit Tracker provides a lightweight solution for managing daily routines without requiring user accounts or external services.

All habit data is stored locally in the user's browser using the Web Storage API, allowing the application to persist data between sessions.

## Features

* **Habit Management** — Create and delete personal habits.
* **Daily Tracking** — Mark habits as completed for the current day.
* **Streak Tracking** — Calculate current and best completion streaks.
* **Progress Statistics** — View total habits, habits completed today, and best streak.
* **Persistent Storage** — Automatically save habit data using LocalStorage.
* **Responsive Interface** — Optimized for desktop, tablet, and mobile screens.
* **Zero Dependencies** — Runs directly in a modern web browser without additional libraries or frameworks.

## Technology Stack

| Technology   | Purpose                             |
| ------------ | ----------------------------------- |
| HTML5        | Application structure               |
| CSS3         | Styling and responsive layout       |
| JavaScript   | Application logic and interactivity |
| LocalStorage | Client-side data persistence        |




## Getting Started

### Prerequisites

A modern web browser such as:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

No additional software or dependencies are required.

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/habit-tracker.git
```

Navigate to the project directory:

```bash
cd habit-tracker
```

Open `index.html` in your preferred web browser.

## Usage

1. Enter the name of a habit in the input field.
2. Select **Add Habit**.
3. Mark the habit as completed when you finish it for the day.
4. Monitor your current streak and total completed days.
5. Delete habits that are no longer required.

The application automatically stores your data locally in the browser.

## Data Storage

Habit Tracker uses **LocalStorage** for client-side persistence.

No personal data is transmitted to a server or external database. Because the data is stored locally, habits are specific to the browser and device being used.

Clearing browser storage may remove saved habit data.

## Deployment

The application can be deployed as a static website using **GitHub Pages** or any other static hosting platform.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository's **Settings**.
3. Navigate to **Pages**.
4. Select the `main` branch as the deployment source.
5. Select the root directory.
6. Save the configuration.

GitHub Pages will generate a public URL for the application.

## Future Enhancements

Potential improvements include:

* Weekly and monthly habit calendars
* Detailed progress analytics
* Habit categories and priorities
* Custom habit frequencies
* Dark mode
* User authentication
* Cloud-based data storage
* Cross-device synchronization
* Push notifications and reminders
* Progressive Web App (PWA) support

## Learning Outcomes

This project demonstrates practical implementation of:

* DOM manipulation
* JavaScript event handling
* Client-side data persistence
* Array and object manipulation
* Date-based calculations
* Responsive web design
* Basic application state management
* Static web deployment

