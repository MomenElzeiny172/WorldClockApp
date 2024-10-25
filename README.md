
# World Clock App

A simple React Native application that displays the current time for various cities around the world. The app updates the time every second and shows the local time based on each city's UTC offset.

## Features

- Displays the current time for multiple cities.
- Updates the time every second.
- Simple and clean user interface.

## Technologies Used

- React Native
- TypeScript

## Installation

To run this app on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MomenElzeiny172/WorldClockApp.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd WorldClockApp
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the app:**

   For iOS:

   ```bash
   npx react-native run-ios
   ```

   For Android:

   ```bash
   npx react-native run-android
   ```

## Usage

Once the app is running, you will see a list of cities along with their corresponding current times. The time will automatically update every second.

## Code Structure

- **`App.tsx`**: The main application component that renders the `WorldClockApp`.
- **`WorldClockApp.tsx`**: The component that contains the logic for displaying the time for different cities.
- **`cities.ts`**: Defines the `City` interface and an array of cities with their respective UTC offsets.

## Contribution

Feel free to fork the repository and submit a pull request for any improvements or features.
