import randomNumber from "./randomNumber.js"

export default function randomChordChooser(chordArray) {
    return chordArray[randomNumber(0, chordArray.length)];
}