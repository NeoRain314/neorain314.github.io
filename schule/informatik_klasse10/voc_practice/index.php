<!DOCTYPE html>
<html>
<head>
    <title>Vokabel Trainer</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/formate.css">
</head>
<body>
    <a href="https://www.schulewasmer.de/~shellu32/voc_practice/..">back to main site</a>
    <br>

    <div class="container">
        <p id="language"></p>
        <table><tr><th id="voc_card">Vokabel</th></tr></table>
        <br>
        <button id="button" onclick="button_click()">-- next --</button>
    </div>

    <br><br>
    <div id="button_settings">
        <button id="button_language" onclick="change_language()">change language</button>
        <button id="button_upload" onclick="document.getElementById('uploadForm').style.display='block'">upload vocab file</button> <!-- Zeigt das Upload-Formular an -->
    </div>

    <!-- Upload-Formular -->
    <div id="uploadForm" style="display: none;"> <!-- Verstecktes Formular für den Datei-Upload -->
        <form action="upload.php" method="post" enctype="multipart/form-data"> <!-- Formular sendet Datei an upload.php -->
            <input type="file" name="vocabFile" accept=".csv"> <!-- Ermöglicht den Upload von CSV-Dateien -->
            <button type="submit">Hochladen</button> <!-- Startet den Upload -->
        </form>
    </div>

    <script src="script/script.js"></script> <!-- Bindet das JavaScript ein -->
</body>
</html>

