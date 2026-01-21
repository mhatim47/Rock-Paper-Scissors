# Rock Paper Scissors Game 🎮

A simple and interactive Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript. Play against the computer and test your luck and strategy!

## 📋 Table of Contents
- [Features](#features)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

## ✨ Features
- **Interactive UI**: Clean and intuitive user interface with radio button selection
- **Computer AI**: Random computer choice generation for unpredictable gameplay
- **Real-time Results**: Instant feedback showing computer's choice and game winner
- **Responsive Design**: Works seamlessly across different screen sizes
- **Form-Based Input**: Simple form submission for player selections

## 🎯 How to Play
1. Select your choice: **Rock**, **Paper**, or **Scissors**
2. Click the **Play** button
3. The computer will make its random choice
4. The game will display:
   - What the computer chose
   - Who won the round (Player, Computer, or Draw)

## 📜 Game Rules
The classic Rock Paper Scissors rules apply:
- **Rock** beats **Scissors** ✂️
- **Scissors** beats **Paper** 📄
- **Paper** beats **Rock** 🪨
- If both players choose the same option, it's a **Draw**

## 📁 Project Structure
```
Rock-Paper-Scissors/
├── index.html      # Main HTML file with form and game structure
├── main.js         # Game logic and event handling
├── style.css       # Styling and layout
├── images/         # Directory for images (if any)
└── README.md       # This file
```

### File Descriptions
- **index.html**: Contains the form with radio buttons for player choices and displays the results
- **main.js**: Core game logic including:
  - `getPlayerChoice()`: Retrieves the player's selection from the form
  - `game()`: Generates a random computer choice
  - `whoWin()`: Determines the winner based on game rules
- **style.css**: Styling for a visually appealing user interface

## 💻 Technologies Used
- **HTML5**: Page structure and form elements
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Game logic and event listeners
  - Arrow functions
  - FormData API
  - Array methods

## 🚀 Installation & Setup

### Quick Start
1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd Rock-Paper-Scissors
   ```
3. Open `index.html` in your web browser
   - Double-click the file, or
   - Right-click and select "Open with your browser"

### No Dependencies
This project has **no external dependencies**. It uses only vanilla HTML, CSS, and JavaScript, so it runs directly in your browser!

## 📖 Usage
1. Open the game in your browser
2. Select one of the three options (Rock, Paper, or Scissors)
3. Click the "Play" button to submit your choice
4. View the result showing:
   - The computer's choice
   - The winner of the round
5. Repeat to play multiple rounds!

## 🔮 Future Enhancements
Possible improvements for this project:
- **Score Tracking**: Keep track of wins, losses, and draws across multiple rounds
- **Best of N**: Implement "Best of 3" or "Best of 5" game modes
- **Animations**: Add smooth transitions and animations for better UX
- **Sound Effects**: Include audio feedback for wins and losses
- **Local Storage**: Save game history and statistics
- **Difficulty Levels**: Add computer AI with different strategies
- **Multiplayer**: Allow two players to compete against each other
- **Mobile Optimization**: Enhanced touch-friendly interface
- **Theme Switcher**: Dark mode and light mode options

## 📝 Notes
- The game uses `FormData` API to retrieve selected radio button values
- Computer choices are randomized using `Math.random()`
- The winner logic is determined by the `whoWin()` function

---

**Have fun playing! Good luck! 🍀**