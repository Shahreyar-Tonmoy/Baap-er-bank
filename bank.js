document.getElementById('submit-btn1').addEventListener('click', function () {
    const textField = document.getElementById('text-field')
    const newAmount = textField.value;

    const depositTotalElement = document.getElementById('Deposit-constainer')
    const previousAmount = depositTotalElement.innerText
    const total = parseFloat(previousAmount) + parseFloat(newAmount)
    

    if(!isNaN(total)){
        depositTotalElement.innerText = total
    textField.value = ""
    const totalCon = document.getElementById('total-container')
    const totalAmount = totalCon.innerText
    const totalAmountOf = parseFloat(totalAmount) + parseFloat(total)
    totalCon.innerText = totalAmountOf
    }
    
})




