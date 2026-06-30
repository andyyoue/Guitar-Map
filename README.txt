NOTE MAP GUITAR - V3 ALPHA 8

Single-file release: upload index.html to GitHub Pages.

Alpha 8 fix:
- Moved informational boxes underneath the fretboard:
  - title/subtitle
  - suggested path
  - why this works
- Kept the audio/action strip above the fretboard so playing actions stay near the map.
- Added Early Learner > Chord Shapes action buttons:
  - Next type
  - Next root
- Next root keeps the current chord type.
- Folded in alpha 5-7 fixes:
  - Neck Notes audio state refresh.
  - Scale playback uses root-to-root ascending playback.
  - Scale/note playback pulses matching fretboard notes.
  - Progression chip taps refresh the audio label.
  - Shape navigation forces the fret window to show the selected shape.
  - Manual views get context-specific guidance below the fretboard.

V3 alpha idea:
- Adds a Today Coach above the existing fretboard.
- Uses two skill levels: Early learner and Manual mode.
- Early learner exposes three focused tools: Chord shapes, Neck notes, and Pentatonic shapes.
- Chord shapes adds guided root-note and chord-type selectors.
- Neck notes shows all locations for one selected note across the neck.
- Pentatonic shapes supports major and minor pentatonic only.
- Manual mode reveals the full manual control set.
- Keeps the manual Note Map, Chord, and Progression controls from V2.1.6.

Early learner tools included:
- Chord shapes.
- Neck notes.
- Pentatonic shapes.

Learning themes used:
- Beginner overwhelm from seeing too much fretboard at once.
- Pentatonic shape confusion and open-string shortcuts.
- Chord shape families: E/A/D forms and small triads.
- Sus2/sus4 embellishments from Free Fallin'.
- Dorian and Mixolydian curiosity.
- Memorizing small solo phrases instead of brute-force pattern practice.

Alpha 4 fix:
- Resequenced root/key selectors so chord-shape and pentatonic root choices start at A.
- Added browser-native Web Audio playback: chord views play the selected chord, note drills play the selected note, and scale/pattern views play the active scale notes.
- Added Solo Blueprint phrase playback with visual animation through the phrase chips and matching fretboard notes.
- Reworked Solo Blueprint text to give a concrete instruction on first view: play the phrase, copy it, pause, then change the ending.

Alpha 3 fix:
- Removed the redundant Early Learner "Show me" button; guided views now update directly from the selectors.
- Reviewed and tightened the right-side guidance so it matches the active screen function.
- Reordered the Neck Notes selector to start at A.
- Early Learner major pentatonic now opens on the root-based lower-fret box, so A major pentatonic starts at the fret 2-5 pattern.
- Root notes now keep the yellow root color inside pattern views, matching the guidance text.

Alpha 2 fix:
- Versioned this build as V3 alpha 2, with a separate zip/package name.
- Fixed Early Learner C major so the first shape is the standard open C grip: x32010.
- Reinstated the Early Learner chord label option: show finger numbers or note names on chord diagrams.

Previous alpha fix:
- Replaced the odd G major shortcut shapes with standard open G shapes: 320003 and 320033.
- Tightened compact chord generation so small shapes must include the defining chord tones; this fixes ambiguous Bm shapes that looked like B major.
- Fixed barre fingering fallback so repeated notes on the barre fret render as the same finger, e.g. F#m shows 1-1-1 plus 2 and 3 rather than splitting the barre across 1/2/3/4.
- Renamed Easy / cheat to Cheats / triads and made that mode include valid small triads alongside beginner shortcut grips. If no compact shape exists for a chord type, it falls back to same-quality practical shapes instead of a major fallback.
- Expanded Manual mode progressions to 16 transposable types: classic rock/folk, pop anthem, 50s/doo-wop, folk circle, sad/emotional, romantic, suspense/resolve, minor walk-down, Andalusian cadence, blues, quick-change blues, jazz blues shell, turnaround, funk/Dorian-ish, modal rock, and plagal/amen.
- Added diminished triad support for progression use, so the jazz blues #IVdim passing chord renders as an actual diminished shape.
- Added Manual mode Solo Blueprint: choose key, major/minor pentatonic or blues scale, a phrase blueprint, and fret area. The app highlights a small note subset and shows a phrase recipe instead of dumping the whole scale on the player.
