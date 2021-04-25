import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateConnections1619318288796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "connections",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: 'admin_id',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "socket_id",
                        type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
