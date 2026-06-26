NOTE MAP GUITAR - V2.1.1

Bugfix release.

Important: index.html is now self-contained and includes the CSS/JS inline.
This means the fret diagram should still work even if only index.html is uploaded.

For GitHub Pages you can upload either:
- index.html only, or
- all files if you want to keep the project structure.

Fixes:
- Defensive default values for View Mode, Pattern, and Fret Window.
- Inline fallback so missing app.js/style.css does not break the diagram.
