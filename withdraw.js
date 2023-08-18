document.getElementById('submit-btn-withdraw').addEventListener('click',function(){
    
    const withdraw = document.getElementById('text-field-withdraw')

    const newAmountOfWithdraw = withdraw.value

    const withdrawOfElement = document.getElementById('withdraw-container')

    const withdrawmoney = withdrawOfElement.innerText
    
    const totalWithdraw = parseFloat(withdrawmoney) + parseFloat(newAmountOfWithdraw)

    
if(!isNaN(totalWithdraw)){
    withdrawOfElement.innerText = totalWithdraw

    withdraw.value = ""

    const totalCon = document.getElementById('total-container')
    const totalAmount = totalCon.innerText
    
    const totalAmountOf = parseFloat(totalAmount) - parseFloat(totalWithdraw)
    totalCon.innerText = totalAmountOf
}
   
})