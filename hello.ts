addEventListener('fetch', (event) => {
  event.respondWith(new Response(JSON.stringify({
    url: event.request.url,
    method: event.request.method,
    hello: 'Hello, Deno Deploy!',
    headers: Object.fromEntries(event.request.headers.entries())
  }, null, 2), {
    headers: { "content-type": "application/json; charset=UTF-8" },
  }))
})
