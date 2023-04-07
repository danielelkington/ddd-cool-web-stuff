self.addEventListener('fetch', e => {
    e.respondWith(new Response('I work offline'))
})
