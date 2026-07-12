NOTE MAP GUITAR - VERSION 4.10

Tuner diagnostic/reliability release.

Changes:
- Added a visible Mic signal meter in Tuner mode.
- Added tuner diagnostic status text so you can tell whether microphone audio is arriving before pitch detection locks.
- Simplified the tuner audio graph: microphone -> analyser -> silent gain -> destination. This is more reliable on Safari/iOS than an analyser-only graph.
- Removed the tuner filter chain for this diagnostic build so low E/A/D strings are not accidentally suppressed.
- Lowered the first-pass signal threshold and added clearer states: no signal, low signal, finding pitch, pitch unstable, pitch locked.
- Explicitly resumes AudioContext after Start tuner.

Acceptance checks:
- Tuner still requests microphone permission only after Start tuner.
- Tuner screen shows Mic signal meter while listening.
- JavaScript syntax check passes.
- Nested folder zip format retained.
