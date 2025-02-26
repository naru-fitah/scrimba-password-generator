const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let firstPassword = document.getElementById("password-one")
let secondPassword = document.getElementById("password-two")

function renderPasswords() {
    let password1 = "";  // Start with an empty string
    let password2 = "";

    for (let i = 0; i < 15; i++) { // Loop exactly 15 times
        let randomFirstIndex = Math.floor(Math.random() * characters.length);
        let randomSecondIndex = Math.floor(Math.random() * characters.length);

        password1 += characters[randomFirstIndex]; // Append character
        password2 += characters[randomSecondIndex];
    }

    firstPassword.textContent = password1; // Assign the final string
    secondPassword.textContent = password2;
}

function generatePasswords() {
    renderPasswords();
}
