let form = document.querySelector('form')

form.addEventListener('submit', async e => {
  //prevents default behavior of form (reload)
  e.preventDefault()

  // make fetch call

  let newMessage = {
    name: document.querySelector('#feedback-form-name').value,
    title: document.querySelector('#feedback-form-title').value,
    message: document.querySelector('#feedback-form-message').value
  }

  //make api call to add a new message

  let results = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(newMessage)
  })

  let messages = await results.json()

  updateFeedback(messages)
})

const displayMessages = async () => {
  let result = await fetch('/api')
  let messages = await result.json() //[{}, {}, {}]

  updateFeedback(messages)
}
