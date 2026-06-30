NOTE MAP GUITAR - V3 ALPHA 7

Based on V3 alpha 6.

Fixes:
- Restored the fretboard after the alpha-6 regression caused by wrong data-note variables in map/chord renderers.
- Fixed Manual chord view showing stale/non-contextual guidance from the prior mode.

Instruction-box improvements:
- Manual chord view now shows chord tones, interval names, and semitone gap recipe.
- Manual note map, progression, and solo blueprint views now get context-specific guidance rather than a generic Manual mode message.

Validation:
- JavaScript syntax check passes.
- Runtime smoke test passes for:
  - initial load
  - Manual chord
  - Manual note map
  - Manual progression
  - Solo Blueprint
  - Early Learner neck notes
