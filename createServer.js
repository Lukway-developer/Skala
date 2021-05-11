const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/') {
    let body = []

    req
      .on('data', chunk => {
        const birthday = new Date(chunk)
        const weekday = birthday.getDay()
        switch (weekday) {
          case 0:
            body.push('Sunday')
            break
          case 1:
            body.push('Monday')
            break
          case 2:
            body.push('Tuesday')
            break
          case 3:
            body.push('Wednesday')
            break
          case 4:
            body.push('Thursday')
            break
          case 5:
            body.push('Friday')
            break
          case 6:
            body.push('Saturday')
            break
          default:
            body.push('Insert your birthday')
            break
        }
      })
      .on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        body = body.toString()
        res.end(body)
      })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8000)
console.log('Server up on http://localhost:8000')
