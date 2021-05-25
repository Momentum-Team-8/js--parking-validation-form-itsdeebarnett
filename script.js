console.log('Add validation!');

//set up boolean to make sure input form is valid
let formIsValid;


//check for typos 

const form = document.querySelector("#parking-form")
const carYearInput = document.querySelector("#car-year")
const dateStart = document.querySelector("#start-date")
const daysInput = document.querySelector("#days")
const cardNumber = document.querySelector("#credit-card")
const expDate = document.querySelector("#expiration")
const submitButton = document.querySelector("#submit-button")



form.addEventListener('submit', event => {
    event.preventDefault()
    validateCarYear()
    // validateDate()
    validateCardNumber()
    validateExpDate() 

    

    if (formIsValid) {
        const total = document.createElement('div')
    
        let totalCost = daysInput.value * 5 
        

        document.querySelector("#car-field").classList.add('input-valid')
        document.querySelector(".input-group").classList.add('input-valid')
        document.querySelector("#days-field").classList.add('input-valid')
        document.querySelector("#credit-card-field").classList.add('input-valid')
        document.querySelector("#cvv-field").classList.add('input-valid')
        document.querySelector("#expiration-field").classList.add('input-valid')
        
        document.querySelector('#total').appendChild(total).innerHTML = "Total cost is $" + totalCost + "."
        
    }
})


function validateCarYear() {
    if (carYearInput.value < 1900 || carYearInput.value > 2021 ) {
    const error = document.createElement('div')

    document.querySelector(".input-group").classList.add('input-Invalid')
    document.querySelector('#car-field').appendChild(error).innerHTML = 'Year of car must be after 1900'
    formIsValid = false
} else{
    formIsValid = true
}
}



function validateExpDate() {



    // if (validateexpDate.value.split("/").lenght !=3) ( message =='' ? element.name+" failed in my test.n" : message}
    
    
    var regex = new RegExp(
        ("^\d{2}\/\d{2}$"
        ))
        if (!regex.test())
        return false;

    return luhnCheck(number);
}


function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}