    const form = document.querySelector("#form")
    const submitButton = document.querySelector("#submit")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwSI6i7qOAZwMlrZzdXhux--C08lGzUDdj0HrIeA9X2VBnIqGEqkAwzBCB-VKE1j4uS/exec'
 
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