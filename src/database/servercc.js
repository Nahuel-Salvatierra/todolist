import mysql from 'mysql2/promise';
import 'dotenv/config'


async function main () {
    const connection = await mysql.createPool({
        database: process.env.DATABASE_MYSQL,
        user: process.env.USER_DB,
        host: process.env.HOST_MYSQL,
        password: process.env.USER_DB_PASSWORD,
        ssl : {
            rejectUnauthorized: false
        }
    
    });
    
    const [rows] = await connection.query('select * from usuarios')
    console.log(rows)
}

main()

// getConnection();

