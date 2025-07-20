# 🧩 About the Project

Welcome to the staging-web branch! This branch is my solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). No API calls here — this branch is all mock data, straight from what was provided for the challenge. Just had fun building things out with it. Hopefully it helps someone!

## Table of contents

- [Overview](#overview)
  - [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)

## Overview

### Features

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## My process

### Built with

- [Typescript](https://www.typescriptlang.org/) - Strict typing
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### Project Structure

src/
├── assets/        # Svgs
├── components/    # Shared components
├── utils/         # Helper zone
├── App.tsx        # Root component that holds the UI structue
├── data.ts        # Mock extension data 
├── index.css      # Main css file
└── main.tsx       # Boots the app, mounts <App /> to the DOM
public/            # Images and other static files
environments/      # Environment-specific configuration

### Installation

#### Prerequisites

- Node.js (v20 or later)
- npm


#### Steps

1. Clone the repository
```sh
  git clone https://github.com/CrownedTechie/chrome-extensions-manager.git
```

2. Install Dependencies
```sh
  npm install 
```

3. Run the Development Server
```sh
  npm run dev
```

5. Build for Production
```sh
  npm run build
```

***
Made with 🩷 by Crownedtechie 
- Email - [@nenchi00@gmail.com](mailto:nenchi00@gmail.com)
- LinkedIn - [@Chinenye U. Agu](https://www.linkedin.com/in/chinenye-u-agu-53b715193/)
