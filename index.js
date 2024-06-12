const passLenSlider = document.getElementById("pass-len");
const passLenText = document.getElementById("pass-len-text");
const generateBtnEl = document.getElementById("generate-btn");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;<>?/"

let passLen = passLenSlider.value;
let includeUppercases = document.getElementById("uppercases__check").checked;
let includeNumbers = document.getElementById("numbers__check").checked;
let includeSymbols = document.getElementById("symbols__check").checked;
let firstGeneratedPassword = document.getElementById("first-generated-password")
let secondGeneratedPassword = document.getElementById("second-generated-password")

passLenText.textContent = "Password Length: 16";
passLenSlider.oninput = function() {
    passLenText.textContent = "Password Length: " + this.value;
}

function generatePassword() {
    let characters = lowercase
    let password = ''
    
    passLen = passLenSlider.value;
    includeUppercases = document.getElementById("uppercases__check").checked;
    includeNumbers = document.getElementById("numbers__check").checked;
    includeSymbols = document.getElementById("symbols__check").checked;
    
    if (includeUppercases) {
        characters += uppercase
    }
    if (includeNumbers) {
        characters += numbers
    }
    if (includeSymbols) {
        characters += symbols
    }
    
    for (let i = 0; i < passLen; i++) {
        let index = Math.floor(Math.random() * characters.length)
        password += characters.charAt(index)
    }
    
    return password;
}

generateBtnEl.addEventListener("click", function() {
    firstGeneratedPasswordValue = generatePassword()
    secondGeneratedPasswordValue = generatePassword()
    firstGeneratedPassword.textContent = firstGeneratedPasswordValue;
    secondGeneratedPassword.textContent = secondGeneratedPasswordValue;
})

firstGeneratedPassword.addEventListener("click", function() {
    navigator.clipboard.writeText(firstGeneratedPasswordValue);
})

secondGeneratedPassword.addEventListener("click", function() {
    navigator.clipboard.writeText(secondGeneratedPasswordValue);
})