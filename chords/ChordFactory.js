import A from "./Chord_A.js";
import B from "./Chord_B.js";
import C from "./Chord_C.js";
import D from "./Chord_D.js";
import E from "./Chord_E.js";
import F from "./Chord_F.js";
import G from "./Chord_G.js";

export default function chordFactory(name) {

    if(name === 'A') {
        return new A();
    }
    if(name === 'B') {
        return new B();
    }
    if(name === 'C') {
        return new C();
    }
    if(name === 'D') {
        return new D();
    }
    if(name === 'E') {
        return new E();
    }
    if(name === 'F') {
        return new F();
    }
    if(name === 'G') {
        return new G();
    }
}