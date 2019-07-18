const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 5000

const connection = require('./connection')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (client) => {

  const squaresInBoard = (squares) => {
    let board = []
    let row = []
    squares.forEach((square, i)=> {
      row = [...row, square]
      if ((i+1)%7 === 0){
        board = [...board, row]
        row = []
      }
    })
    return board
  }

  connection.query('SELECT * FROM square', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        client.emit('board', squaresInBoard(data))
    }

  })




  client.on('seller', (seller) => {
    connection.query('UPDATE seller SET ? WHERE id=1', [seller], (err, data)=> {
      err && console.log(err)

      connection.query('SELECT * FROM seller', (err, data) => {
        if (err) {
          console.log(err)
        } else {
          client.emit('sellerMove', data)
        }
      })
    })
  })



});


http.listen(port, function(){
  console.log(`listening on ${port}`)
});