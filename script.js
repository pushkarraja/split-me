const billInput = document.getElementById('bill-total-input')
const tipInput = document.getElementById('tip-input')
const numberOfPeopleDiv = document.getElementById('number-of-people')
const perPersonalTotalDiv = document.getElementById('per-person-total')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPercentage = Number(tipInput.value) / 100

    const tipAmount = bill * tipPercentage

    const totalAmount = tipAmount + bill

    const perPersonTotal = totalAmount / numberOfPeople
    perPersonalTotalDiv.innerText = `Rs.${perPersonTotal.toLocaleString('en-IN')}`
}

const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

const decreasePeople = () => {

    if (numberOfPeople <= 1) {
        return
    }

    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}