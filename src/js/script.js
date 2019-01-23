//              DOM Objects                 //
let chordTitle = document.querySelector("#chordTitle");
let TriadeOfTheChordChoosedByUser = document.querySelector(
  "#TriadeOfTheChordChoosedByUser"
);
let buttons = document.querySelectorAll(".btn");

//              Variables                   //
let chordChoosedByUser = "";

//              Buttons event              //
buttons.forEach(chordNameButton => {
  // TODO: acho que posso deixar esse trecho de código mais legível se eu separar o callback da função forEach em uma função nomeada separada.
  chordNameButton.addEventListener("click", () => {
    pickChordChoosedByUser(chordNameButton);
    updateView();
  });
});

//              View                        //
function updateView() {
  TriadeOfTheChordChoosedByUser.innerHTML =
    chordChoosedByUser.tonic +
    " - " +
    chordChoosedByUser.third +
    " - " +
    chordChoosedByUser.fifth;

  // TODO: atualizar título 'Nome do Acorde'.
}

function pickChordChoosedByUser(chordNameButton) {
  // O array 'chords' está em um script serarado pra deixar os scripts menores.
  let chordFiltered = chords.filter(function(chord) {
    return chord.name === chordNameButton.innerHTML;
  });
  chordChoosedByUser = chordFiltered[0];
}
