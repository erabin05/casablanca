const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 5000

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});


http.listen(port, function(){
  console.log(`listening on ${port}`)
});