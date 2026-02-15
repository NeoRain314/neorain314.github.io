<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["vocabFile"])) { // Überprüft, ob eine Datei hochgeladen wurde
    $file = $_FILES["vocabFile"]["tmp_name"]; // Speichert den temporären Speicherort der Datei

    if (($handle = fopen($file, "r")) !== FALSE) { // Öffnet die Datei im Lesemodus
        $vocab_language_a = []; // Erstellt ein leeres Array für die erste Sprache
        $vocab_language_b = []; // Erstellt ein leeres Array für die zweite Sprache

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) { // Liest jede Zeile der CSV-Datei
            if (count($data) == 2) { // Stellt sicher, dass genau zwei Spalten existieren
                $vocab_language_a[] = $data[0]; // Fügt das erste Wort ins erste Sprach-Array ein
                $vocab_language_b[] = $data[1]; // Fügt das zweite Wort ins zweite Sprach-Array ein
            }
        }
        fclose($handle); // Schließt die Datei nach dem Lesen

        // Speichern als JSON für den JavaScript-Zugriff
        $vocabData = [
            "language_a" => $vocab_language_a, // Speichert die erste Sprachliste
            "language_b" => $vocab_language_b  // Speichert die zweite Sprachliste
        ];

        file_put_contents("vocab.json", json_encode($vocabData)); // Speichert die Daten in einer JSON-Datei

        echo "Datei erfolgreich hochgeladen! <a href='index.php'>Zurück</a>"; // Erfolgsnachricht mit Link zurück zur Hauptseite
    } else {
        echo "Fehler beim Öffnen der Datei."; // Fehlermeldung, falls die Datei nicht gelesen werden kann
    }
} else {
    echo "Ungültige Anfrage."; // Fehlermeldung, falls kein Upload erfolgt ist
}
?>
