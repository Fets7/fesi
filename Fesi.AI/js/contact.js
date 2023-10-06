    const form = document.querySelector("#form")
    const submitButton = document.querySelector("#submit")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwyCQv-XG3_p7uypczqt-h6tyMoIrFF6KwuZRlJmnp3Agr8Q8aKRcWLdfzj4ylA3Si9/exec'
 
    form.addEventListener('submit', e => {
      submitButton.disabled = true
      e.preventDefault()
      let requestBody = new FormData(form)
      fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(response => {
           alert('Success!', response)
           submitButton.disabled = false
          })
        .catch(error => {
        alert('Error!', error.message)
          submitButton.disabled = false
 
        }
        )
    })