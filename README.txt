NOTE MAP GUITAR - V5.2 RC FRIENDLY TESTER BUILD

Build:
V5.2 RC · Build 2026-07-11.2

Purpose:
A tester-ready release candidate focused on confidence and coherence, not new feature sprawl.

Release-candidate changes:
- Visible V5.2 RC build label in the header and page hint.
- Clear cached version / reload control for GitHub Pages/PWA testing.
- Added manifest.webmanifest and sw.js with a versioned cache name.
- Service worker deletes old caches on activation.
- Primary entry is Learn: "One small thing to try."
- Full learning path remains hidden behind "Show the full learning path."
- Explore freely replaces the "Advanced" player-level language.
- Local progress memory stores current step and last activity.
- Canonical beginner chord data includes:
  E, Em, A, Am, D, Dm, G, C, B7.
- Beginner chord navigation remains limited to friendly open chords.
- Progressions use more learner-facing names and show full chord sequence context.
- Scale practice language emphasizes one compact area rather than the full neck.
- Solo Trainer language emphasizes exact string/fret phrase positions.
- Tuner no-signal state hides/dims the needle; in-tune state turns green.

Validation performed:
- JavaScript syntax check passed.
- Canonical open chord records verified against expected fret patterns.
- Zip structure verified.

Package:
note-map-guitar-v5-2-rc/index.html
note-map-guitar-v5-2-rc/README.txt
note-map-guitar-v5-2-rc/manifest.webmanifest
note-map-guitar-v5-2-rc/sw.js
