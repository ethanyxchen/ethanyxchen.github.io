/* Dark Mode/Light mode buttons */

function displayLightButton() {
    lightButton.style.display = "block";
}

function closeLightButton() {
    lightButton.style.display = "none";
}

function displayDarkButton() {
    darkButton.style.display = "block";
}

function closeDarkButton() {
    darkButton.style.display = "none"
}

function toggleDark() {

    console.log("Toggling dark");

    let theme = document.body;
    theme.classList.toggle("dark-mode");

    displayLightButton();
    closeDarkButton();
}

function toggleLight() {
    let theme = document.body;
    theme.classList.toggle("dark-mode");

    displayDarkButton();
    closeLightButton();
}

let darkButton = document.getElementById("dark-theme-button");
let lightButton = document.getElementById("light-theme-button");

lightButton.onclick = toggleLight;
darkButton.onclick = toggleDark;


/* Button to go to journal page */

let journalButton = document.getElementById("write-option");

journalButton.onclick = gotoJournalEntry;

function gotoJournalEntry() {

    console.log("going to journal entry page")
     
    window.location.href = 'journal-entry.html';
}

/* Javascript from online sources to upload journal image 

The following stack overflow sites were used for this code: 
https://stackoverflow.com/questions/12368910/html-display-image-after-selecting-filename
https://stackoverflow.com/a/55544625 

*/ 

function readURL(input) {

    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('journal-image');
        output.src = reader.result;
    }

    reader.readAsDataURL(event.target.files[0]);
}

/* Button to go to journal page */

let homeButton = document.getElementById("go-home-button");

homeButton.onclick = goHome;

function goHome() {

    console.log("going to home page")
     
    window.location.href = 'index.html';
}