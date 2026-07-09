NOTE MAP GUITAR - VERSION 4.7

Build focus: diagnostic fixes from the 4.5 UX/accuracy review, carried forward on the current tuner-enabled code line.

Fixes:
- Early Learner Chord Shapes now prioritizes complete standard/open beginner chord shapes instead of defaulting to cheats/triads.
- E major in Early Learner now opens as the complete standard open E chord: 0-2-2-1-0-0.
- Added explicit complete open chord records for C, A, G, E, D, Em, Am, and Dm.
- Manual Standard/Open shapes also include those complete open records where applicable.
- Scale Map task buttons remain Explore Scale / Practice Scale / Hear the Key, but the playback button no longer duplicates "Hear the Key".
- Explore Scale is now a visual exploration task with no playback button.
- Practice Scale playback button now says Play route.
- Hear the Key playback button now says Play.

Validation:
- JavaScript syntax passes.
- Early Learner E major resolves to E standard open with frets 0-2-2-1-0-0.
- Manual E major Standard/Open resolves to the complete open E shape.
- Scale Map Explore Scale shows no duplicate Hear the Key playback button.
- Scale Map Hear the Key has one task selector plus a generic Play action.
- Scale Map Practice Scale uses Play route.

Packaged with nested folder structure:
note-map-guitar-v4-7/index.html
note-map-guitar-v4-7/README.txt
