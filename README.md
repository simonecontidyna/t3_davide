# Tic Tac Toe

A simple, elegant React-based Tic Tac Toe game built with modern web technologies.

![Tic Tac Toe](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- 🎮 **Classic Gameplay**: Enjoy the traditional 3x3 Tic Tac Toe experience
- 🎨 **Modern UI**: Beautiful gradient background with clean, responsive design
- ⚡ **Instant Feedback**: Real-time game status updates
- 🔄 **Easy Reset**: Quick game reset to start fresh
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices

## Demo

The game features:
- Two-player local gameplay (X and O)
- Automatic win detection
- Turn indicator showing whose move it is
- Winner announcement
- Reset button to start a new game

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd tic-tac-toe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open automatically in your browser at [http://localhost:3000](http://localhost:3000)

## Usage

### How to Play

1. The game starts with Player X's turn
2. Click on any empty square to place your mark (X or O)
3. Players alternate turns
4. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled with no winner, the game ends in a draw
6. Click "Reset Game" to start a new game at any time

### Game Controls

- **Click on squares**: Place your mark
- **Reset Game button**: Start a new game

## Project Structure

```
tic-tac-toe/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main game component and logic
│   ├── App.css            # Component-specific styles
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## Technical Details

### Technologies Used

- **React 18.2.0**: UI library for building the game interface
- **React DOM 18.2.0**: React rendering for web browsers
- **React Scripts 5.0.1**: Build tooling and development server

### Key Components

- **App**: Main application component that wraps the game
- **Board**: Game board component managing game state and logic
- **Square**: Individual square component for the game grid

### Game Logic

The game uses React hooks for state management:
- `useState` for tracking the board state (array of 9 squares)
- `useState` for tracking the current player (X or O)
- Win detection algorithm checking all 8 possible winning combinations

### Win Detection

The game checks for winners by evaluating these patterns:
- 3 horizontal rows
- 3 vertical columns
- 2 diagonal lines

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Customization

### Changing Colors

Edit `src/App.css` to customize:
- Background gradient (`.App` class)
- Square colors (`.square` class)
- Button colors (`.reset-button` class)

### Adjusting Board Size

To create a larger board, modify:
- The array size in `useState(Array(9).fill(null))`
- The winning combinations in `calculateWinner` function
- The grid layout in the render method

### Adding Features

Potential enhancements:
- Player name input
- Score tracking
- Sound effects
- AI opponent
- Game history
- Different difficulty levels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Built following the official React tutorial
- Inspired by classic Tic Tac Toe gameplay
- Created as a demonstration of React state management

## Author

Created with ❤️ using React

## Support

For issues, questions, or suggestions, please open an issue on the repository.

---

Enjoy playing Tic Tac Toe! 🎮