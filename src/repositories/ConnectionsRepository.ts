import { Repository } from "typeorm"
import { Connection } from '../entities/Connection'


class ConnectionsRepositories extends Repository<Connection> {}

export { ConnectionsRepositories }