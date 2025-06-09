# 🎯 Whac-A-Mole Game

A classic whac-a-mole browser game built with HTML, CSS, and JavaScript. This project was designed by Professor Alexandre Meslin from PUC-RIO.

## 🎮 Demo

[Play the game here](https://allanarpavao.github.io/whac-a-mole/)

## 📖 About

This is a web-based implementation of the classic whac-a-mole arcade game. Players must click on moles that randomly appear from holes to score points while avoiding misses and wrong clicks.

## ✨ Features

- **Interactive gameplay** with start/stop controls
- **Real-time scoring system** tracking hits, misses, errors, and balance
- **Responsive design** using Bootstrap framework
- **Custom graphics** and animations
- **Multiple pages** including rules and records (static page)
- **Custom cursor** that changes to hammer during gameplay

## 🛠️ Technology Stack

- **HTML5** - Structure and markup
- **CSS3** - Styling and animations
- **JavaScript** - Game logic and interactivity
- **Bootstrap 5.3.6** - Responsive design framework
- **Google Fonts** - Custom typography (Bungee Spice)

## 📁 Repository Overview

├── css/
│ └── style.css # Main stylesheet
├── javascript/
│ └── jogo.js # Game logic and functionality
├── images/ # Game assets and graphics
├── index.html # Main landing page
├── tabuleiro.html # Game board page
├── regras.html # Game rules page
├── recordes.html # Records/scores page

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Open `index.html` in your web browser or serve it using a local server

### How to Play
1. Click the "Start" button to begin the game
2. Moles will randomly appear from holes
3. Click on the moles quickly before they disappear
4. Your score is calculated based on hits minus misses and errors
5. Click "Stop" to end the game

## 🎯 Game Mechanics

- **Acertos (Hits)**: Successfully clicked moles
- **Perdidos (Missed)**: Moles that disappeared without being clicked
- **Errados (Errors)**: Clicks on empty holes
- **Saldo (Balance)**: Final score calculation (Hits - Missed - Errors)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.