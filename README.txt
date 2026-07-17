NOTE MAP GUITAR — V6.0 LEARN & EXPLORE
Build: V6.0 · Build 2026-07-16.1

PRODUCT CHANGE
V6 separates the application into two distinct experiences sharing the same musical engine.

LEARN GUITAR
- Calm guided entry.
- The app chooses the lesson, chord, key, pattern, and sequence.
- The learner sees one next step and presses Start.
- Guided lessons do not expose Manual controls.
- Progress memory remains local in the browser.

EXPLORE THE NECK
- Dedicated workbench home.
- Separate destinations for Chords, Scales, Progressions, Solo Trainer, and Harmony.
- Each destination displays only its relevant controls.
- Progressions explicitly includes the Progression type selector.
- Byzantine / Double Harmonic Major remains available under Scales.

GLOBAL
- Tuner remains available from the header and V6 home.
- Existing musical engine, chord data, scale data, progression logic, audio, and tuner are preserved.
- Service-worker cache and visible build number updated together.

SMOKE TESTS COMPLETED
- Home contains Learn, Explore, and Tuner entries.
- Learn hub contains a visible next lesson and Start action.
- Explore hub contains five activity destinations.
- Chords, Scales, Progressions, Solo Trainer, and Harmony routes are present.
- Progression type selector is present and contains the full style list.
- Complete progression rendering remains present.
- Guided lesson screen and fretboard route are present.
- Manual controls are hidden by the guided-route CSS.
- JavaScript syntax passed.
- Static DOM and route wiring checks passed.

LIMITATION
A full automated browser interaction test could not be completed in this build environment because the installed headless Chromium process would not start reliably. Physical iPhone Safari, installed-PWA, microphone, and touch testing should still be performed after deployment.
