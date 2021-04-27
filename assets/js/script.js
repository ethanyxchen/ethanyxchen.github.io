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

The following stack overflow site was used for this code: 
https://stackoverflow.com/questions/12368910/html-display-image-after-selecting-filename

*/ 

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#journal-image')
                .attr('src', e.target.result)
                .width(400)
                .height(300);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

/* Button to go to journal page */

let homeButton = document.getElementById("go-home-button");

homeButton.onclick = goHome;

function goHome() {

    console.log("going to home page")
     
    window.location.href = 'index.html';
}