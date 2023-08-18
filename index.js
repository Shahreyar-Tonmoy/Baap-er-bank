const submit = document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const emailField = document.getElementById('user-email')

    const email = emailField.value
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    console.log(email, password)
    if (email === 'Shahreyartonmoy001@gmail.com' && password === 'Tonmoy#001'){
        window.location.href = 'bank.html'
    }
    else if (email=== 'Tonmoymspc@gmail.com' && password=== 'Tonmoy#001'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid Password')
    }

})






