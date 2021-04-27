import { server } from './app'
import './websocket/client'
import './websocket/admin'

server.listen(3333, () => console.log('Server is running at port 3333'))