import chordFactory from "./chords/ChordFactory.js"

let chordTitle = document.querySelector('#chord');
let chordName = 'B';
let chord = chordFactory(chordName);

chordTitle.innerHTML += " " + chordName;


let chordTriade = document.querySelector('#triade');
chordTriade.innerHTML += chord.tonic + " - " + chord.third + " - " + chord.fifth;