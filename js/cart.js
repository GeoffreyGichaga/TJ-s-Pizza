// elements
const pizzaSelection = document.getElementById("PizzaName")
const crustSelection = document.getElementById("crust")
const toppingSelection = document.getElementById("topping")
const pizzaSize = document.getElementById("pizzasize")

// Pickup /delivery 

const deliverBtn = document.getElementById("deliver")
const pickupBtn = document.getElementById("pickup")

const transport = document.getElementById("transport")
const customerAddress = document.getElementById("address")

// LOcation Details
const locationInput = document.getElementById("location")

// Coomment
const commentInput = document.getElementById("comment")

// Bill 
// info
const displayPizza = document.getElementById("selectedpizza")
const displayCrust = document.getElementById("selectedcrust")  
const displayTop = document.getElementById("selectedtop")  
const displaySize = document.getElementById("selectedsize")  
const displayMode = document.getElementById("mode")

// AMountss
const pizzaAmount = document.getElementById("pizzaamount")  
const crustAmount = document.getElementById("crustamount")  
const topAmount = document.getElementById("topamount")  
const sizeAmount = document.getElementById("sizeamount")
const deliverFee = document.getElementById("deliveryfee")  

const deliveryFee = document.getElementById("deliveryoption")

// Buttons
const summaryBtn = document.getElementById("summary")


// Display address input id user selects

let displayAddressInput = ()=>
{
    if(deliverBtn.checked == true)
    {
        customerAddress.style.display = "block"

    }
    else
    {
        customerAddress.style.display = "none"

    }    
}
displayAddressInput()

deliverBtn.addEventListener("click",displayAddressInput)