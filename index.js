const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const noCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const passwordBtn = document.getElementById("password-button")
const  resetBtn = document.getElementById("reset-button")

let passwordOneEl = document.getElementById("password1-el")
let passwordTwoEl = document.getElementById("password2-el")
let copiedOne = document.getElementById("copied-one")
let copiedTwo = document.getElementById("copied-two")
let passwordLength = document.getElementById("password-length")
let copyText = document.getElementById("copy-text")
let specialCharacters = document.getElementById("contains-characters")
let blockOne =  document.querySelector('.password-block1')
let blockTwo =  document.querySelector('.password-block2')

let password1 = ""
let password2 = ""

function generatePassword() {
    if (specialCharacters.checked) {
    for ( let i = 0; i < characters.length; i++ ) {
        let passwordGeneratedOne = Math.floor( Math.random() * characters.length)    
    return characters[passwordGeneratedOne]
    }
        } else {
    for ( let i = 0; i < noCharacters.length; i++ ) {
        let passwordGeneratedOne = Math.floor( Math.random() * noCharacters.length)    
    return noCharacters[passwordGeneratedOne]    
    }    
}
}


passwordBtn.addEventListener("click", function () {
    let lengthValue = passwordLength.value
    password1 = ""
    password2 = ""
    copiedOne.textContent = ""
    copiedTwo.textContent = ""
    for (let i = 0; i < lengthValue; i++) {
        password1 += generatePassword()
        password2 += generatePassword()   
        passwordOneEl.textContent = password1
        passwordTwoEl.textContent = password2  
    }
    copyText.textContent = "Click the password to copy to clipboard"   
    blockOne.classList.remove('password-clicked')
    blockTwo.classList.remove('password-clicked')
})

resetBtn.addEventListener("click", function() {
    passwordLength.value = 15
    specialCharacters.checked = true
    password1 = ""
    password2 = ""
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    copiedOne.textContent = ""
    copiedTwo.textContent = ""
    copyText.textContent = ""
    blockOne.classList.remove('password-clicked')
    blockTwo.classList.remove('password-clicked')

  })


  passwordOneEl.addEventListener("click", function() {
    copiedTwo.textContent = ""
    copyPass = passwordOneEl.innerHTML
    navigator.clipboard.writeText(copyPass)
    blockTwo.classList.remove('password-clicked')
    blockOne.classList.add('password-clicked')
    copiedOne.textContent = "Copied to clipboard"
  })

  passwordTwoEl.addEventListener("click", function() {
    copiedOne.textContent = ""
    copyPass = passwordTwoEl.innerHTML
    navigator.clipboard.writeText(copyPass)
    blockOne.classList.remove('password-clicked')
    blockTwo.classList.add('password-clicked')    
    copiedTwo.textContent = "Copied to clipboard"
   })

