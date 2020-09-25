const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('p#message-1')
const messageTwo = document.querySelector('p#message-2')
const weatherImage = document.querySelector('img#weather-icon')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        weatherImage.attributes['src'].value = data.image
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})