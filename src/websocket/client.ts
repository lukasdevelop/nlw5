import {io} from '../app'

io.on('connection', (socket) => {
    socket.on('client_first_access', (params) => {
        console.log(params)
    })
})