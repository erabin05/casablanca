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

  connection.query('SELECT * FROM square', (err_board, data) => {
    if (err_board) {
        console.log(`error when trying to get board : ${err_board}`)
    } else {
        client.emit('board', squaresInBoard(data))
    }
  })

  client.on('game', game => {
    connection.query('UPDATE game SET ? WHERE id=1', [game], (err_game) => {
      err_game && game && console.log(`error when trying to update game : ${err_game}`)
      
      connection.query('SELECT * FROM game', (err_getGame, data) => {
        if (err_getGame) {
          console.log(`error when trying to get game : ${err_getGame}`)
        } else {
          client.emit('getGame', data[0])
        }
      })
    })
  })

  client.on('seller', seller => {
    connection.query('UPDATE seller SET ? WHERE id=1', [seller], (err_seller, data)=> {
     err_seller && seller && console.log(`error when trying to update seller : ${err_seller}`)

      connection.query('SELECT * FROM seller', (err_sellerMove, data) => {
        if (err_sellerMove) {
          console.log(`error when trying to get seller : ${err_sellerMove}`)
        } else {
          client.emit('sellerMove', data)
        }
      })
    })
  })

  client.on('carpets', carpet => {

    const carpetID = carpet.id ? carpet.id : 0
    connection.query('UPDATE carpet SET ? WHERE id=?', [carpet, carpetID], (err_carpet, data) => {
    err_carpet && carpet && console.log(err_carpet)

      connection.query('SELECT * FROM carpet', (err_carpetStatus, data) => {
        if (err_carpetStatus) {
          console.log(`error when trying to get carpet : ${err_carpetStatus}`)
        } else {
          client.emit('carpetStatus', data)
        }
      })
    })
  })

});


http.listen(port, function(){
  console.log(`listening on ${port}`)
});