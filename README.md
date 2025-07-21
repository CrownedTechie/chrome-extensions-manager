# 🧩 About the Project

This project is a Chrome extension that helps you manage your installed Chrome extensions with ease. It originally began as a solution to [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp)—you can preview that version via the deployed web app (that uses mock data) [here](https://chrome-extensions-manager.vercel.app/), and if you're interested in the source code, check out the `staging-web` branch in the repository. One of my mentors suggested turning it into a full-fledged Chrome extension... and here we are! 

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Branches](#branches)
- [Quick Access](#quick-access)
- [Project Structure](#project-structure)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
- [Acknowledgements](#Acknowledgements)


## Overview

### Features

Users should be able to:

- View their installed Chrome extensions
- Enable or disable their extensions
- Filter active and inactive extensions
- Uninstall extensions from the list
- Select their color theme

### 🌱 Branches

| Branch | Description |
|--------|-------------|
| `main` | Chrome extension |
| `staging-web` | Web app version (uses mock data) |

## Quick Access
Don’t feel like messing with Developer Mode?

Just download the [chrome-extensions-manager.zip](https://github.com/CrownedTechie/chrome-extensions-manager/releases/download/v1.0.0/chrome-extensions-manager.zip), unzip it, and follow the *"Load Extension in Chrome"* steps from the Installation section — but this time, select the extracted folder. 
Alternatively, you can head over to the [latest release page](https://github.com/CrownedTechie/chrome-extensions-manager/releases/tag/v1.0.0) and follow the steps from there.

## Project Structure

```
src/
├── assets/           # Svgs
├── components/       # Shared components
├── utils/            # Helper zone
├── App.tsx           # Root component that holds the UI structure
├── background.ts     # Core logic for managing Chrome extensions and background scripts
├── chrome-global.ts  # Chrome-specific types and others used across the app
├── index.css         # Main css file
└── main.tsx          # Entry point that renders <App /> to the DOM
public/               # Images and other static files
environments/         # Environment-specific configuration

```

## Installation

#### Prerequisites

- Node.js (v20 or later)
- npm

#### Steps

##### 1. Clone the repository
```sh
  git clone https://github.com/CrownedTechie/chrome-extensions-manager.git
```

##### 2. Install Dependencies
```sh
  npm install 
```

##### 3. Build the project
```sh
  npm run build
```
> **Note**: This will generate a dist folder containing the production-ready files

##### 4. Load Extension in Chrome
  - **Open Chrome Extensions Page**
    1. Open Chrome browser
    2. Go to `chrome://extensions/` or paste it in your address bar

  - **Enable Developer Mode**
    1. Toggle the **Developer mode** switch at the top right of the page

  - **Load the Extension**
    1. Click "Load unpacked" button
    2. In the file picker that opens, navigate to and select the `dist` folder of the project
    3. Chrome will automatically load the extension

> **Important**: Make sure to select the dist folder that was created after building the project, not the root project folder.


## Acknowledgements

Shout out to [Frontend Mentor](https://www.frontendmentor.io/) for consistently putting out challenges that push frontend thinking and execution. The foundation of this project was shaped by one of their tasks.

Big thanks to [Christopher Ndubuisi](https://github.com/mad-max-fury/mad-max-fury) for the thoughtful suggestion that took this from a simple UI concept to a working Chrome extension.


***
Made with 🩷 by Crownedtechie 
- Email - [@nenchi00@gmail.com](mailto:nenchi00@gmail.com)
- LinkedIn - [@Chinenye U. Agu](https://www.linkedin.com/in/chinenye-u-agu-53b715193/)
