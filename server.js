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
  res.end(JSON.stringify({
    success: true,
    data: todos
  }));
})

const PORT = 6000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`))