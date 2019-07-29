import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

export const subscribe = (cb) => {
    socket.on('timer', timestamp => cb(null, timestamp))
    socket.emit('subscribeToTimer', 1000)
}

export const board = (cb) => {
    socket.on('board', board => cb(null, board))
} 

export const seller = (character, cb) => {
    socket.on('sellerMove', seller => cb(null, seller))
    socket.emit('seller', character)
} 

export const getCarpets = (carpet, cb) => {
    socket.on('carpetStatus', carpets => cb(null, carpets))
    socket.emit('carpets', carpet)
}

export const getGame = (game, cb) => {
    socket.on('getGame', gameR => cb(null, gameR))
    socket.emit('game', game)
}