# Tic Tac Toe

A simple, elegant React-based Tic Tac Toe game built with Vite and modern web technologies.

![Tic Tac Toe](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-8.0-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- Classic two-player gameplay (X and O)
- Automatic win and draw detection
- Modern UI with gradient background and responsive design
- Accessible: ARIA labels, keyboard navigation, visible focus indicators
- Production security headers and Content Security Policy

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm

### Steps

1. Clone the repository:
```bash
git clone https://github.com/simonecontidyna/t3_davide.git
cd t3_davide
```

2. Install dependencies (use `ci` for reproducible builds):
```bash
npm ci
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at [http://localhost:3000](http://localhost:3000)

## Usage

1. The game starts with Player X's turn
2. Click on any empty square to place your mark
3. Players alternate turns
4. First player to get three in a row (horizontal, vertical, or diagonal) wins
5. If all squares are filled with no winner, the game is a draw
6. Click "Reset Game" to start over

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |

## Project Structure

```
t3_davide/
├── index.html              # HTML entry point with CSP meta tags
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies (pinned versions)
├── public/
│   └── _headers            # Production security headers (Netlify/Cloudflare)
├── src/
│   ├── App.jsx             # Game components and logic
│   ├── App.css             # Component styles
│   ├── index.jsx           # React entry point
│   └── index.css           # Global styles
├── LICENSE
└── README.md
```

## Security

### Content Security Policy

The application includes a strict CSP via a `<meta>` tag in `index.html` that restricts resource loading to same-origin only. This prevents XSS and data injection attacks.

### Production Security Headers

The `public/_headers` file provides additional HTTP security headers for deployment platforms that support it (Netlify, Cloudflare Pages):

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer information |
| `Permissions-Policy` | `camera=(), microphone=(), ...` | Disables unnecessary browser APIs |
| `X-XSS-Protection` | `0` | Disables legacy XSS filter (CSP is preferred) |

### Dependency Management

- All dependency versions are **pinned exactly** (no caret or tilde ranges)
- Use `npm ci` instead of `npm install` for reproducible builds
- The project uses only 23 total packages (vs 1300+ with Create React App)

### Environment Variables

All `.env` files are git-ignored by default. Use `.env.example` to document required variables without exposing real values.

## Accessibility

- All game squares have descriptive `aria-label` attributes (e.g. "Square top-left, marked X")
- Game status uses `aria-live="polite"` for screen reader announcements
- Visible focus indicators on all interactive elements (WCAG compliant)
- Semantic HTML with `role` attributes for the game grid

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - see [LICENSE](LICENSE).