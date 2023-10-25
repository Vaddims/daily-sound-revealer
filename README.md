# Daily Sound Revealer

## Introduction

Daily Sound Revealer is a delightful application crafted to unveil a new sound to the user every day. Dive into a soothing or intriguing auditory experience daily, and keep track of the sounds you've already accessed. This application is built with the power of React, and employs TypeScript for a strongly-typed, error-resilient codebase.

## Project Structure

The project is organized into various folders and files, primarily revolving around React components, services, and assets.

- **`assets/`** - This directory contains the sound files.
    - **`sounds/`** - Place your sound files here with the naming convention `<incremental_number>.<file_extension>`.
- **`config.json`** - Configuration file for setting the start date and sound index offset.
- **`index.tsx`** - The entry point for the React application.
- **`src/`** - The source directory contains all the TypeScript and CSS files.
    - **`routes/`** - This directory holds the route-specific components.
        - **`Sound`** - Sound page based on the sound index from the URL.
        - **`Sounds`** - Catalog of sounds.
    - **`components/`** - Holds reusable components.
        - **`LinkCard`** - A link card component for navigating to individual sound pages.
    - **`services/`** - Contains service files for managing sounds and save states.
        - **`save.service.ts`** - Provides functions for marking sounds as used.
        - **`sound.service.ts`** - Offers functions for accessing sound data.

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/daily-sound-revealer.git
```

1. Navigate into the project directory.

```bash
cd daily-sound-revealer
```

1. Install the project dependencies.

```bash
npm install
```

1. Start the development server.

```bash
npm start
```

Now, the application should be running on http://localhost:3000.

## Configuration

The configuration and setup of the Daily Sound Revealer are centralized in the `config.json` file and the `assets/sounds` directory.

### Config.json

The `config.json` file is crucial for the setup and behaviour of the Daily Sound Revealer application. It's located at the root of the `src` directory. Here's a breakdown of its properties:

- `startDate`: Specifies the start date for the sound unveiling. Format: `MM/DD/YYYY`.
- `soundIndexOffset`: An offset value for sound indexing.

Ensure to set these values appropriately before running or building the application.

### Adding New Sounds

To add new sounds, simply place the sound files in the `assets/sounds` directory. Ensure to follow the naming convention for the sound files as described below:

- Naming Convention: `<incremental_number>.<file_extension>`

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, you can contact the author via email at [vadym.iefremov@gmail.com](mailto:vadym.iefremov@gmail.com).