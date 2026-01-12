# Text Typing App

A browser-based typing game built with Flask and JavaScript, focused on clean architecture, responsive UI, and real-time user interaction.

This project demonstrates practical full-stack fundamentals: backend routing with Flask, template inheritance with Jinja2, and client-side state management using vanilla JavaScript.

## Overview

#### What it does:

- Provides a typing interface with automatic cursor focus

- Starts a countdown timer when the user types

- Resets input after inactivity

- Encourages continuous typing without manual interaction

#### Why it matters

- Shows understanding of event-driven JavaScript

- Demonstrates Flask routing and template composition

- Focuses on UX details such as focus management and timing logic

## Tech Stack

Backend: Flask (Python)

Frontend: HTML5, CSS3, Bootstrap 5

Templating: Jinja2

Client Logic: JavaScript

Version Control: Git

## Key Features

Clean Flask application structure

Multiple routes (/, /game)

Reusable base layout and partial templates

Automatic cursor focus for better UX

Countdown timer with reset-on-input logic

Responsive layout using Bootstrap

## Project Structure

```bash
project/
├── main.py
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── game.html
│   ├── header.html
│   └── footer.html
│
├── static/
│   └── css/
│         └── style.css
│
├── LICENSE
└── README.md
```

## Requirements

- Python 3.8 or higher

- Flask

Install Flask using pip:
```bash
pip install flask
```

## Running the Application

1. Clone or download the repository.

2. Navigate to the project directory.

3. Run the application:
```bash
python main.py
```

4. Open your browser and visit:

- Home page: http://127.0.0.1:5000/

- Game page: http://127.0.0.1:5000/game

## Client-Side Behaviour

The typing textarea receives focus automatically when the page loads.
The countdown timer starts when the user begins typing.
If no input is detected within the set time limit, the input field is cleared.
Clicking anywhere on the page restores focus to the typing area.

## Development Notes

debug=True is enabled for development only.
Ensure all templates are placed in the templates directory.
Static files must be referenced using url_for('static', ...).

## License

This project is intended for educational and personal learning purposes. You are free to modify and extend it.
