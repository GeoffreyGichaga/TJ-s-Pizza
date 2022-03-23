const fulName = document.getElementById("fname")
const email = document.getElementById("email")




const sendBtn = document.getElementById("sendbtn")

 let displayMessage = ()=>
 {
     let fulNameInput = fulName.value
     let emailInput = email.value
     alert("Hello " + fulNameInput + " We will get back to you soon")
 }
 sendBtn.addEventListener("click" ,displayMessage)
