import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

const subscribe = (cb) => {
    socket.on('timer', timestamp => cb(null, timestamp))
    socket.emit('subscribeToTimer', 1000)
}

export default subscribe