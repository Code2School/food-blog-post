const path = require('path')

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'data.json'))
const middlewares = jsonServer.defaults()
const port = 3001

server.use(middlewares)
server.use('/api', router)
server.listen(port, () => {
  console.log(`JSON Server is running with port ${port}`)
})
