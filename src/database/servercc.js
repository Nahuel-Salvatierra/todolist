import sql from 'mysql';

const dbSettings = {
    user: '',
    password: '',
    server: '',
    database: ''
}


sql.connect(dbSettings)