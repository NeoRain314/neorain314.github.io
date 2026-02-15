/*let vocab_language_a = ["Haus", "Dana", "Katze"]; // Speichert die erste Sprache
let vocab_language_b = ["House", "The name of a strange person", "Cat"]; // Speichert die zweite Sprache

let language_a = "german"; // Name der ersten Sprache
let language_b = "english"; // Name der zweiten Sprache

let curr_vocab = 0; // Aktuelle Vokabel-Position im Array
let new_vocab = true; // Gibt an, ob die nächste Vokabel oder die Übersetzung angezeigt wird
let mode = 0; // 0: a->b, 1: b->a (Sprachenwechsel)

const button = document.getElementById("button"); // Holt das Button-Element
const card = document.getElementById("voc_card"); // Holt das Element, das die Vokabel zeigt
const lang_display = document.getElementById("language"); // Holt das Anzeige-Element für die Sprache

lang_display.innerHTML = language_a + " → " + language_b; // Setzt die Standard-Sprachrichtung
button.innerText = "- press to start -"; // Setzt den Standard-Button-Text

// Funktion zum Laden der Vokabeln aus der JSON-Datei
function loadVocab() {
    fetch("vocab.json") // Holt die Daten aus der JSON-Datei
        .then(response => response.json()) // Konvertiert die Antwort in ein JSON-Objekt
        .then(data => {
            vocab_language_a = data.language_a; // Aktualisiert die erste Sprachliste
            vocab_language_b = data.language_b; // Aktualisiert die zweite Sprachliste
            console.log("Vokabeln geladen:", vocab_language_a, vocab_language_b); // Debug-Log für geladene Vokabeln
        })
        .catch(error => console.error("Fehler beim Laden der Vokabeln:", error)); // Gibt eine Fehlermeldung aus, falls JSON nicht geladen werden kann
}

loadVocab(); // Lädt die Vokabeln beim Start

function button_click() {
    button.innerText = "-- next --"; // Ändert den Button-Text nach erstem Klick

    let vocab_1, vocab_2, lang_1, lang_2;

    if (mode === 0) { // Modus: Sprache A -> Sprache B
        vocab_1 = vocab_language_a;
        vocab_2 = vocab_language_b;
        lang_1 = language_a;
        lang_2 = language_b;
    } else { // Modus: Sprache B -> Sprache A
        vocab_1 = vocab_language_b;
        vocab_2 = vocab_language_a;
        lang_1 = language_b;
        lang_2 = language_a;
    }

    if (new_vocab) { // Falls eine neue Vokabel angezeigt werden soll
        curr_vocab++;
        if (curr_vocab >= vocab_1.length) curr_vocab = 0; // Springt am Ende der Liste zum Anfang
        card.innerHTML = vocab_1[curr_vocab]; // Zeigt das Wort aus der aktuellen Sprachliste
        new_vocab = false;
    } else { // Falls die Übersetzung angezeigt werden soll
        card.innerHTML = vocab_2[curr_vocab]; // Zeigt die Übersetzung aus der zweiten Sprachliste
        new_vocab = true;
    }
}

function change_language() {
    mode = (mode + 1) % 2; // Wechselt zwischen den beiden Sprachrichtungen
    lang_display.innerHTML = mode === 0 ? `${language_a} → ${language_b}` : `${language_b} → ${language_a}`; // Aktualisiert die Anzeige der Sprachrichtung
}
*/




let vocab_language_a = ["Hund", "Katze", "Maus", "Haus", "ein fast ganz toller Mesnsch (bestimmt nicht...)"];
let vocab_language_b = ["dog", "cat", "mouse", "house", "Mari(j)on"];

let language_a = "german";
let language_b = "english";

let curr_vocab = 0;
let new_vocab = true;
let mode = 0; //0: a->b; 1: b->a

const button = document.getElementById("button");
const card = document.getElementById("voc_card");
const lang_display = document.getElementById("language");

lang_display.innerHTML = language_a + " → " + language_b;
button.innerText = "- press to start -";
console.log("start");

function button_click(){
	button.innerText = "-- next --";
	//console.log("test");
	let vocab_1;
	let vocab_2;
	let lang_1;
	let lang_2;

	if(mode==0){
		vocab_1 = vocab_language_a;
		vocab_2 = vocab_language_b;
		lang_1 = language_a;
		lang_2 = language_b;
	} else {
		vocab_1 = vocab_language_b;
                vocab_2 = vocab_language_a;
                lang_1 = language_b;
                lang_2 = language_a;
	}

	if(new_vocab){
		curr_vocab++;
		if(curr_vocab > vocab_language_a.length-1) curr_vocab = 0;
		console.log(lang_1);
	 	card.innerHTML = vocab_1[curr_vocab] /*+ " (" + lang_1 + ")"*/;
		new_vocab = false;

	}else{
		console.log(lang_2)
		card.innerHTML = vocab_2[curr_vocab] /*+ " (" + lang_2 + ")"*/;
		new_vocab = true;
	}
}

function change_language(){
	mode++;
	if(mode>1) mode=0;

	if(mode==0) lang_display.innerHTML = language_a + " → " + language_b;
	if(mode==1) lang_display.innerHTML = language_b + " → " + language_a;
}

function upload_file(){
	console.log("not available right now");
}

