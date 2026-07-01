NOTE MAP GUITAR - VERSION 3.1

Single-file release: upload index.html to GitHub Pages.

3.1 changes:
- Promoted the app from V3 alpha to base version 3.1.
- Renamed Manual View > Note map to Scale map.
- Shortened Early Learner "Root note" label to "Root" to align the controls.
- Updated the action strip above the fretboard:
  - shows the current chord/scale/note context first
  - Early Learner chord mode shows Next root, Next chord, Play chord
  - Next root preserves the current chord type
- Changed scale audio wording from Play scale to Play tones.
  - Current behavior is an ear check: root-to-root scale tones.
  - It is not yet a physical fingering/path playback feature.
- Fixed movable E/A/D-family chord fingerings so transposed shapes do not reuse impossible open-position finger numbers.
- Reviewed generated chord shapes with a validation script to catch duplicated finger numbers on different frets.

Included from the V3 alpha line:
- Early Learner mode with Chord shapes, Neck notes, and Pentatonic shapes.
- Manual mode with Scale map, Chord fingering, Progression, and Solo Blueprint.
- Browser-native Web Audio playback for chords, notes, scale tones, and solo phrases.
- Progression library with classic, pop, blues, jazz blues shell, romantic, suspense/resolve, and related options.
- Context-specific guidance underneath the fretboard.
