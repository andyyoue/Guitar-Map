NOTE MAP GUITAR — V5.4 REPAIR & QA RELEASE
Build: V5.4 · Build 2026-07-15.1

Purpose
Repair usability, navigation, musical state synchronization, and regression issues without adding major features.

Key repairs
- Guided E → A → E → A selections preserve the selected sequence index.
- Guided sequence indicators, chord root, title, fretboard, finger display, audio target, and playback derive from shared application state.
- Guided progression sequence controls synchronize with progression state.
- Guided harmony items E, A, and B are selectable and preserve selection.
- Activity tiles use one openActivity() navigation function and visibly scroll to rendered content.
- Guided lessons use a simplified control presentation.
- Lesson exit is now Back to learning path.
- Manual controls and Choose another activity use distinct labels.
- Fretted fingering dots are positioned closer to the destination fret wire.
- Chord Play buttons use the displayed guitar voicing, including open and muted strings.
- Chord and progression boards receive a short 145 ms visual redraw transition.
- Canonical open chords regression-checked: E, Em, A, Am, D, Dm, G, C, B7.
- Optional QA panel available by adding ?debug to the URL.
- Build and service-worker cache updated together.

QA panel example
https://your-site.example/?debug

Validation performed
- JavaScript syntax passed.
- Canonical open-chord fret records passed.
- Guided initialization and refresh use separate reset/preserve paths.
- Exact displayed-voicing audio logic is present.
- Nested deployment package verified.

Important
Actual iPhone microphone and installed-PWA behavior still require physical-device testing after deployment.
