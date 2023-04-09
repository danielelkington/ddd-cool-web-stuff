self.addEventListener('push', e => {
  console.log('Received notification', e)
  self.registration.showNotification(e.data.json().title, {
    body: 'Hello World'
  })
})
