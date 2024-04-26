const http = require('http');

const todos = [
  {id: 1, text: 'words'},
  {id: 2, text: 'word'},
  {id: 3, text: 'wor'},
  {id: 4, text: 'wo'}
]
const server = http.createServer((req, res)=> {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('X-Powered-By', 'Node.js')

  res.writeHead(404, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
  })
  res.end(JSON.stringify({
    success: false,
    error: 'Not found',
    data: todos
  }));
})

const PORT = 6000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`))