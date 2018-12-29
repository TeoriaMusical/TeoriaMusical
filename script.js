import chordFactory from "./chords/ChordFactory.js"

//              DOM Objects                 //
let chordTitle  = document.querySelector('#chord');        // Título
let chordTriade = document.querySelector('#triade');       // Tríade
let buttons     = document.querySelectorAll('.btn');       // Botões

//              Variables                   //
let chordChoosedByUser = "";

//              Buttons events              //
buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        
        chordChoosedByUser = btn.innerHTML;
        UpdateView();
    
    });
});

//              View                        //
function UpdateView() {

    let chord = chordFactory(chordChoosedByUser);

    chordTitle.innerHTML = "Acorde " + chordChoosedByUser;

    chordTriade.innerHTML = chord.tonic + " - " + chord.third + " - " + chord.fifth;

}