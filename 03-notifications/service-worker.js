self.addEventListener('push', e => {
  self.ServiceWorkerRegistration.showNotification(e.stopImmediatePropagation.json().title, {
    body: 'Hello World'
  })
})
