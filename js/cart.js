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
const customerComment = document.getElementById("ordercomment")

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



const getBill = (e)=>
{


    const pizzaValues = {1:1500,2:1900,3:1950,4:1900,5:1100,6:1700}
    const crustValues = {1:200,2:300,3:100}
    const toppingsValues = {1:200,2:200,3:100,4:150,5:80,6:30}
    let thePizzaPrice;
    let thePizzaTopping;
    let thePizzaCrust;
    let theSelectedSize;
    

    
    

    function getPizza()
    {
 
    // Get and display the selected pizza
        for(let i = 0;i<pizzaSelection.length;i++)
        {
            var pizzaselects = pizzaSelection[i]
            var getPrice = pizzaValues[pizzaselects.value]
      
            if(pizzaselects.selected)
            {
                console.log(pizzaselects.innerHTML)
                console.log(pizzaselects.value)
                console.log(getPrice);
                // pizzaAmount.innerText = getPrice
                thePizzaPrice = getPrice






            
                displayPizza.innerText = pizzaselects.innerHTML 

            } 
         

        }
       
    } getPizza()  




    function getSize()
    {
        for(let i = 0;i<pizzaSize.length;i++)
        {
            // let multiplyRates = [0.25,0.5,1]
            var sizeSelects = pizzaSize[i]
            var selectedValue = sizeSelects.value
            // var selectedValue2 = sizeSelects.innerHTML
            if(sizeSelects.selected)
            {
                console.log(selectedValue);
                console.log(sizeSelects.innerHTML)
                displaySize.innerText = sizeSelects.innerHTML
                theSelectedSize = selectedValue

            }


        
        }


        





    } getSize()
    


    function getCrust()
    {
        for(let i = 0;i<crustSelection.length;i++)
            {
                let crustSelects = crustSelection[i]
                let crustSelectsValues  = crustSelection[i].value
                let getCrustPrice = crustValues[crustSelectsValues]

                if(crustSelects.selected)
                {
                    console.log(crustSelects.innerHTML)
                    console.log(crustSelectsValues);
                    console.log(getCrustPrice);
                    crustAmount.innerText = getCrustPrice
                    displayCrust.innerText = crustSelects.innerHTML

                    thePizzaSize = getCrustPrice



                }
            }
    }getCrust()
        
   
    function getToppings()
    {
        for(let i = 0;i<toppingSelection.length;i++)
            {
                let toppingSelects = toppingSelection[i]
                let toppingSelectsValue = toppingSelection[i].value
                let getToppingsPrice = toppingsValues[toppingSelectsValue]
                if(toppingSelects.selected)
                {
                    console.log(toppingSelects.innerHTML)
                    console.log(toppingSelectsValue);
                    console.log(getToppingsPrice);
                    topAmount.innerText = getToppingsPrice
                    displayTop.innerText = toppingSelects.innerHTML
                    thePizzaTopping = getToppingsPrice





                }
            }
    } getToppings()
        
      
    function checkMode()
    {
        if(deliverBtn.checked == true)
        {
            displayMode.innerText = deliverBtn.name
            deliverFee.innerText = 200
        }
        else
        {
            displayMode.innerText = pickupBtn.name
        }
    }
    checkMode()
        



    function getCustomerComment()
    {
        let comment = commentInput.value
        customerComment.innerText = comment
    }
    getCustomerComment()




    function displayBill()
    {

        

        if(theSelectedSize == 1)
        {
            sumOfPizza =  thePizzaPrice * 0.25
           pizzaAmount.innerText = sumOfPizza

        }
        else if (theSelectedSize == 2)
        {
            sumOfPizza2 =  thePizzaPrice * 0.5
            pizzaAmount.innerText = sumOfPizza2

        }
        else
        {
            sumOfPizza3 = thePizzaPrice * 1
            pizzaAmount.innerText = sumOfPizza3

        }


  
        


        console.log(thePizzaPrice)
        console.log(thePizzaTopping)
        console.log(thePizzaCrust)
        console.log(theSelectedSize);


    }displayBill()



    // 

    function calcTotal()
    {
    }calcTotal()

    

        
}






    

getBill()



    





summaryBtn.addEventListener("click",getBill)
