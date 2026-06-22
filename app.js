const chromaticSharp = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const chromaticFlat = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const keys = ["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"];
const naturalRoots = ["C","D","E","F","G","A","B"];
const tuning = ["E","B","G","D","A","E"];
const maxFret = 15;

const scaleDefs = {
  major:{name:"Major scale",intervals:[0,2,4,5,7,9,11],degrees:["1","2","3","4","5","6","7"],why:"The major scale is the full seven-note home map. Chords, pentatonics and modes can be treated as filters on this same map."},
  naturalMinor:{name:"Natural minor scale",intervals:[0,2,3,5,7,8,10],degrees:["1","2","b3","4","5","b6","b7"],why:"Natural minor changes the 3rd, 6th and 7th compared with major, giving the darker minor sound."},
  majorPentatonic:{name:"Major pentatonic",intervals:[0,2,4,7,9],degrees:["1","2","3","5","6"],why:"Major pentatonic is the major scale with the 4th and 7th removed. Fewer notes means fewer clashes."},
  minorPentatonic:{name:"Minor pentatonic",intervals:[0,3,5,7,10],degrees:["1","b3","4","5","b7"],why:"Minor pentatonic gives the essential rock/blues minor sound. It is a five-note filter across the whole neck."},
  blues:{name:"Minor blues",intervals:[0,3,5,6,7,10],degrees:["1","b3","4","b5","5","b7"],why:"The blues scale is minor pentatonic plus the flat 5. That extra note is the classic blues tension note."},
  mixolydian:{name:"Mixolydian",intervals:[0,2,4,5,7,9,10],degrees:["1","2","3","4","5","6","b7"],why:"Mixolydian is major with a flat 7. It is useful over dominant 7 chords and has a rootsy sound."},
  dorian:{name:"Dorian",intervals:[0,2,3,5,7,9,10],degrees:["1","2","b3","4","5","6","b7"],why:"Dorian is minor with a natural 6. It keeps the minor feel but sounds brighter and funkier."}
};
const chordDefs = {
  none:{name:"No chord overlay",intervals:[]},
  major:{name:"Major",suffix:"",intervals:[0,4,7],formula:"1-3-5"},
  minor:{name:"Minor",suffix:"m",intervals:[0,3,7],formula:"1-b3-5"},
  dominant7:{name:"Dominant 7",suffix:"7",intervals:[0,4,7,10],formula:"1-3-5-b7"},
  major7:{name:"Major 7",suffix:"maj7",intervals:[0,4,7,11],formula:"1-3-5-7"},
  minor7:{name:"Minor 7",suffix:"m7",intervals:[0,3,7,10],formula:"1-b3-5-b7"},
  sus2:{name:"Sus2",suffix:"sus2",intervals:[0,2,7],formula:"1-2-5"},
  sus4:{name:"Sus4",suffix:"sus4",intervals:[0,5,7],formula:"1-4-5"}
};

const baseShapes = {
  E: {
    major:{frets:[0,2,2,1,0,0], fingers:["","2","3","1","",""]},
    minor:{frets:[0,2,2,0,0,0], fingers:["","2","3","","",""]},
    minor7:{frets:[0,2,0,0,0,0], fingers:["","2","","","",""]},
    major7:{frets:[0,2,1,1,0,0], fingers:["","3","1","2","",""]},
    sus2:{frets:[0,2,4,4,0,0], fingers:["","1","3","4","",""]},
    sus4:{frets:[0,2,2,2,0,0], fingers:["","1","2","3","",""]}
  },
  A: {
    major:{frets:["x",0,2,2,2,0], fingers:["","","1","2","3",""]},
    minor:{frets:["x",0,2,2,1,0], fingers:["","","2","3","1",""]},
    minor7:{frets:["x",0,2,0,1,0], fingers:["","","2","","1",""]},
    major7:{frets:["x",0,2,1,2,0], fingers:["","","2","1","3",""]},
    sus2:{frets:["x",0,2,2,0,0], fingers:["","","1","2","",""]},
    sus4:{frets:["x",0,2,2,3,0], fingers:["","","1","2","3",""]}
  },
  D: {
    major:{frets:["x","x",0,2,3,2], fingers:["","","","1","3","2"]},
    minor:{frets:["x","x",0,2,3,1], fingers:["","","","2","3","1"]},
    minor7:{frets:["x","x",0,2,1,1], fingers:["","","","2","1","1"]},
    major7:{frets:["x","x",0,2,2,2], fingers:["","","","1","2","3"]},
    sus2:{frets:["x","x",0,2,3,0], fingers:["","","","1","3",""]},
    sus4:{frets:["x","x",0,2,3,3], fingers:["","","","1","3","4"]}
  }
};

function prefersFlats(key){return key.includes("b") || ["F","Bb","Eb","Ab","Db","Gb"].includes(key);}
function noteIndex(note){let i=chromaticSharp.indexOf(note); if(i>=0)return i; return chromaticFlat.indexOf(note);}
function noteName(index,key){const names=prefersFlats(key)?chromaticFlat:chromaticSharp; return names[((index%12)+12)%12];}
function intervalLabel(interval,scaleDef){const i=scaleDef.intervals.indexOf(interval); return i>=0?scaleDef.degrees[i]:"";}
function cleanRoot(root){return root.replace("#","").replace("b","");}
function transposeItem(item, offset){return typeof item === "number" ? item + offset : item;}
function shapePosition(frets){const nums=frets.filter(f=>typeof f==="number" && f>0); return nums.length?Math.min(...nums):0;}
function generateShapes(root, quality){
  const target = noteIndex(root);
  let shapes = [];
  for (const family of ["E","A","D"]) {
    const base = baseShapes[family][quality];
    if (!base) continue;
    const familyIndex = noteIndex(family);
    for (let offset=0; offset<=12; offset++) {
      if ((familyIndex + offset) % 12 !== target) continue;
      const frets = base.frets.map(f=>transposeItem(f, offset));
      const fingers = [...base.fingers];
      const nums = frets.filter(f => typeof f === "number");
      if (Math.max(...nums) > maxFret) continue;
      const location = offset===0 ? "open position" : `around fret ${offset}`;
      shapes.push({
        name: `${root}${chordDefs[quality].suffix} ${family}-shape`,
        frets, fingers,
        note: `${family}-family shape, ${location}. Fingering numbers are shown where practical; barre shapes may need index-finger barring.`,
        position: shapePosition(frets)
      });
    }
  }
  shapes.sort((a,b)=>a.position-b.position);
  return shapes;
}
function closestShapeIndex(shapes,targetPos){
  let best=0, bestScore=Infinity;
  shapes.forEach((s,i)=>{const score=Math.abs(s.position-targetPos); if(score<bestScore){best=i; bestScore=score;}});
  return best;
}

const els = {};
["viewModeSelect","mapControls","fingeringControls","progressionControls","keySelect","scaleSelect","chordSelect","displaySelect","chordRootSelect","fingeringTypeSelect","prevShape","nextShape","shapeName","shapeDetails","progressionKeySelect","musicTypeSelect","positionSelect","prevProgressionChord","nextProgressionChord","prevProgressionShape","nextProgressionShape","progressionName","progressionDetails","fretboard","summaryTitle","summaryNotes","explanation"].forEach(id=>els[id]=document.getElementById(id));

let shapeIndex=0, progressionChordIndex=0, progressionShapeOffset=0;

keys.forEach(k=>{[els.keySelect,els.progressionKeySelect].forEach(sel=>{const o=document.createElement("option"); o.value=k; o.textContent=k; sel.appendChild(o);});});
naturalRoots.forEach(k=>{const o=document.createElement("option"); o.value=k; o.textContent=k; els.chordRootSelect.appendChild(o);});
els.keySelect.value="A"; els.progressionKeySelect.value="A"; els.scaleSelect.value="major"; els.chordSelect.value="major"; els.chordRootSelect.value="A"; els.fingeringTypeSelect.value="major";

function setVisibleControls(){
  const mode=els.viewModeSelect.value;
  els.mapControls.classList.toggle("hidden", mode!=="map");
  els.fingeringControls.classList.toggle("hidden", mode!=="fingering");
  els.progressionControls.classList.toggle("hidden", mode!=="progression");
}
function drawFretboardWithShape(shape,title,details,why){
  let html=`<div class="fretboard"><div class="fret-row"><div></div>`;
  for(let fret=0; fret<=maxFret; fret++) html+=`<div class="fret-number">${fret}</div>`;
  html+=`</div>`;
  const visualFrets=[...shape.frets].reverse();
  const visualFingers=[...shape.fingers].reverse();
  tuning.forEach((openString, visualStringIndex)=>{
    html+=`<div class="fret-row"><div class="string-label">${openString}</div>`;
    const targetFret=visualFrets[visualStringIndex];
    const finger=visualFingers[visualStringIndex];
    for(let fret=0; fret<=maxFret; fret++){
      let label="."; let className="outside";
      if(targetFret==="x" && fret===0){ label="x"; className="muted"; }
      else if(targetFret===fret){ label=targetFret===0?"0":(finger||"●"); className="fingering"; if(targetFret===0) className+=" open-string"; }
      html+=`<div class="fret-cell"><span class="note ${className}">${label}</span></div>`;
    }
    html+=`</div>`;
  });
  html+=`</div>`;
  els.fretboard.innerHTML=html;
  els.summaryTitle.textContent=title;
  els.summaryNotes.textContent=details;
  els.explanation.textContent=why;
}
function renderNoteMap(){
  const key=els.keySelect.value, scaleDef=scaleDefs[els.scaleSelect.value], chordDef=chordDefs[els.chordSelect.value], rootIndex=noteIndex(key);
  const scaleNotes=scaleDef.intervals.map(i=>noteName(rootIndex+i,key));
  const chordNotes=chordDef.intervals.map(i=>noteName(rootIndex+i,key));
  els.summaryTitle.textContent=`${key} ${scaleDef.name}`;
  els.summaryNotes.textContent=`Scale notes: ${scaleNotes.join("  ")}`+(chordDef.intervals.length?` | ${key} ${chordDef.name} chord tones: ${chordNotes.join("  ")}`:"");
  els.explanation.textContent=scaleDef.why+(chordDef.intervals.length?` The ${key} ${chordDef.name} overlay highlights ${chordDef.formula}: ${chordNotes.join(", ")}.`:"");

  let html=`<div class="fretboard"><div class="fret-row"><div></div>`;
  for(let fret=0; fret<=maxFret; fret++) html+=`<div class="fret-number">${fret}</div>`;
  html+=`</div>`;
  tuning.forEach(openString=>{
    html+=`<div class="fret-row"><div class="string-label">${openString}</div>`;
    const openIndex=noteIndex(openString);
    for(let fret=0; fret<=maxFret; fret++){
      const currentIndex=(openIndex+fret)%12;
      const interval=(currentIndex-rootIndex+12)%12;
      const inScale=scaleDef.intervals.includes(interval), inChord=chordDef.intervals.includes(interval), isRoot=interval===0;
      const className=isRoot?"root":inChord?"chord":inScale?"scale":"outside";
      let label=els.displaySelect.value==="degrees"?(intervalLabel(interval,scaleDef)||"."):noteName(currentIndex,key);
      if(!inScale && !inChord && !isRoot) label=".";
      html+=`<div class="fret-cell"><span class="note ${className}">${label}</span></div>`;
    }
    html+=`</div>`;
  });
  html+=`</div>`;
  els.fretboard.innerHTML=html;
}
function renderFingering(){
  const root=els.chordRootSelect.value, quality=els.fingeringTypeSelect.value;
  const shapes=generateShapes(root, quality);
  if(shapeIndex>=shapes.length) shapeIndex=0;
  const shape=shapes[shapeIndex];
  els.shapeName.textContent=`${shape.name} (${shapeIndex+1} of ${shapes.length})`;
  els.shapeDetails.textContent=shape.note;
  drawFretboardWithShape(shape, `${root}${chordDefs[quality].suffix} chord fingering`, `Suggested fingering restored: numbers indicate fingers; 0 = open; x = muted; ● = barre/position note.`, `This view answers the physical question: how do I play ${root}${chordDefs[quality].suffix}? Use previous/next to step through practical shapes.`);
}
const progressions={
  classic:{name:"Classic rock / folk", numerals:["I","IV","V","I"], note:"Simple, strong and familiar."},
  pop:{name:"Pop / anthem", numerals:["I","V","vi","IV"], note:"The big modern pop progression."},
  sad:{name:"Sad / emotional", numerals:["vi","IV","I","V"], note:"Starts on the relative minor for emotional pull."},
  blues:{name:"Blues", numerals:["I7","IV7","I7","V7"], note:"Dominant 7 chords give the blues flavor."},
  funk:{name:"Funk / Dorian-ish", numerals:["i7","IV7","i7","bVII"], note:"Minor 7 center with a brighter, funkier movement."}
};
const numeralMap={I:[0,"major"],i:[0,"minor"],"i7":[0,"minor7"],"I7":[0,"dominant7"],IV:[5,"major"],"IV7":[5,"dominant7"],V:[7,"major"],"V7":[7,"dominant7"],vi:[9,"minor"],"bVII":[10,"major"]};
function progressionChords(){
  const key=els.progressionKeySelect.value, prog=progressions[els.musicTypeSelect.value], rootIndex=noteIndex(key);
  return prog.numerals.map(n=>{const [interval,quality]=numeralMap[n]; const root=noteName(rootIndex+interval,key); return {numeral:n, root:cleanRoot(root), displayRoot:root, quality};});
}
function renderProgression(){
  const key=els.progressionKeySelect.value, prog=progressions[els.musicTypeSelect.value], chords=progressionChords();
  if(progressionChordIndex>=chords.length) progressionChordIndex=0;
  const current=chords[progressionChordIndex];
  const targetPos=els.positionSelect.value==="open"?0:Number(els.positionSelect.value);
  const shapes=generateShapes(current.root, current.quality);
  const closest=closestShapeIndex(shapes,targetPos);
  let idx=(closest+progressionShapeOffset)%shapes.length; if(idx<0) idx+=shapes.length;
  const shape=shapes[idx];
  const chordLabels=chords.map((c,i)=>`${i===progressionChordIndex?"▶ ":""}${c.displayRoot}${chordDefs[c.quality].suffix}`).join(" → ");
  els.progressionName.textContent=`${key} ${prog.name}`;
  els.progressionDetails.textContent=chordLabels + ` | ${els.positionSelect.options[els.positionSelect.selectedIndex].text}`;
  drawFretboardWithShape(shape, `${current.displayRoot}${chordDefs[current.quality].suffix} in ${key} ${prog.name}`, chordLabels, `${prog.note} The app is choosing a nearby shape so the progression stays in the same fretboard area. Fingering numbers are shown where practical; ● usually means a barre or position note.`);
}
function render(){setVisibleControls(); if(els.viewModeSelect.value==="map")renderNoteMap(); if(els.viewModeSelect.value==="fingering")renderFingering(); if(els.viewModeSelect.value==="progression")renderProgression();}
[els.keySelect,els.scaleSelect,els.chordSelect,els.displaySelect,els.viewModeSelect,els.chordRootSelect,els.fingeringTypeSelect,els.progressionKeySelect,els.musicTypeSelect,els.positionSelect].forEach(el=>el.addEventListener("change",()=>{ if(el===els.chordRootSelect || el===els.fingeringTypeSelect) shapeIndex=0; if([els.progressionKeySelect,els.musicTypeSelect,els.positionSelect].includes(el)){progressionChordIndex=0; progressionShapeOffset=0;} render();}));
els.prevShape.addEventListener("click",()=>{const shapes=generateShapes(els.chordRootSelect.value,els.fingeringTypeSelect.value); shapeIndex=(shapeIndex-1+shapes.length)%shapes.length; render();});
els.nextShape.addEventListener("click",()=>{const shapes=generateShapes(els.chordRootSelect.value,els.fingeringTypeSelect.value); shapeIndex=(shapeIndex+1)%shapes.length; render();});
els.prevProgressionChord.addEventListener("click",()=>{const chords=progressionChords(); progressionChordIndex=(progressionChordIndex-1+chords.length)%chords.length; progressionShapeOffset=0; render();});
els.nextProgressionChord.addEventListener("click",()=>{const chords=progressionChords(); progressionChordIndex=(progressionChordIndex+1)%chords.length; progressionShapeOffset=0; render();});
els.prevProgressionShape.addEventListener("click",()=>{progressionShapeOffset--; render();});
els.nextProgressionShape.addEventListener("click",()=>{progressionShapeOffset++; render();});
render();
