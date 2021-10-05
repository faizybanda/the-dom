//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

/*const billStringElement = document.querySelector(".billString");

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;   
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtn.addEventListener('click', calculateBtnClicked);
*/

var calculateBtn = document.querySelector('.calculateBtn');
var billTotalElem = document.querySelector('.billTotal');
var billString = document.querySelector('.billString');

var billTotal = 0;

function totalBill(){
  var billElements = billString.value.split(",");
  billTotal = 0;
  billElements.forEach(function(element){
    var trimmedElement = element.trim();
    if (trimmedElement === "call"){
      billTotal += 2.75
    }
    else if (trimmedElement === "sms"){
      billTotal += 0.75;
    }
  });

  billTotalElem.innerHTML = billTotal.toFixed(2);
}

calculateBtn.addEventListener("click", totalBill);