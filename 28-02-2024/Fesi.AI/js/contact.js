    const form = document.querySelector("#form")
    const submitButton = document.querySelector("#submit")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1B8_z21byBMmlh4hk7de64SfkuTLScoVqdywuyUhBMyXN05HRl27LAi_3oL3B6cNu/exec'
 
    form.addEventListener('submit', e => {
      submitButton.disabled = true
      e.preventDefault()
      let requestBody = new FormData(form)
      fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(response => {
           alert('De informatie is verzonden!', response)
           window.location.reload();
           submitButton.disabled = false
          })
        .catch(error => {
        alert('Er is iets misgegaan, probeer het opnieuw', error.message)
          submitButton.disabled = false
 
        }
        )
    })
