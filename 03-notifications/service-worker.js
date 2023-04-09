self.addEventListener('push', e => {
  console.log('Received notification', e)
  const promiseChain = self.registration.showNotification('Hello world')
  e.waitUntil(promiseChain)
})
