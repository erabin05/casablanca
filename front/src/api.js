import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

export const subscribe = (cb) => {
    socket.on('timer', timestamp => cb(null, timestamp))
    socket.emit('subscribeToTimer', 1000)
}

export const board = (cb) => {
    socket.on('board', board => cb(null, board))
} 