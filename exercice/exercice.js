import chordFactory from "../chords/ChordFactory.js"
import randomChordChooser from "../util/randomChordChooser.js"

//               DOM                       //
let chordView = document.querySelector(".chord");
let triadeView = document.querySelector(".triade");

//               Variables                 //
let chords = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let randomChord;


chordView.innerHTML = randomChordChooser(chords);

randomChord = chordFactory(chordView.innerHTML);

// TODO
// Falta adicionar uma forma do usuário dar input na tríade que corresponde ao acorde randomico.