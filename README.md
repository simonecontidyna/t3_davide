# Tic Tac Toe

A simple, elegant Tic Tac Toe game that runs directly in any browser. No build tools, no dependencies, no installation -- just open `index.html` and play.

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES6-yellow)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- Classic two-player gameplay (X and O)
- Automatic win and draw detection
- Modern UI with gradient background and responsive design
- Accessible: ARIA labels, keyboard navigation, visible focus indicators
- Content Security Policy and security meta tags built-in
- Zero dependencies -- single HTML file, works offline

## How to Run

**Option 1 -- Double-click:**
Open `index.html` in your browser. That's it.

**Option 2 -- Clone and open:**
```bash
git clone https://github.com/simonecontidyna/t3_davide.git
cd t3_davide
# Open index.html in your default browser:
# Windows
start index.html
# macOS
open index.html
# Linux
xdg-open index.html
```

## How to Play

1. The game starts with Player X's turn
2. Click on any empty square to place your mark
3. Players alternate turns
4. First player to get three in a row (horizontal, vertical, or diagonal) wins
5. If all squares are filled with no winner, the game is a draw
6. Click "Reset Game" to start over

## Project Structure

```
t3_davide/
├── index.html    # The entire game (HTML + CSS + JS in one file)
├── .gitignore
├── LICENSE
└── README.md
```

## Security

### Content Security Policy

The HTML includes a strict CSP `<meta>` tag that restricts resource loading to same-origin and inline styles/scripts only. This prevents external XSS and data injection attacks.

### Additional Security Meta Tags

| Meta Tag | Value | Purpose |
|----------|-------|---------|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline'; ...` | Restricts resource origins |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer information |

### Zero Dependencies

This project has **no npm packages, no build tools, and no external scripts**. The entire application is self-contained in a single HTML file, which eliminates supply chain attacks entirely.

## Accessibility

- All game squares have descriptive `aria-label` attributes (e.g. "Square top-left, marked X")
- Game status uses `aria-live="polite"` for screen reader announcements
- Visible focus indicators on all interactive elements (WCAG compliant)
- Semantic HTML with `role` attributes for the game grid
- Full keyboard navigation support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT -- see [LICENSE](LICENSE).