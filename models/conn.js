const pgp = require('pg-promise') ({
    query: e => {
        console.log('QUERY:', e.query);
    }
})

const options = {
    host: 'localhost',
    database: 'digital_crafts_class',
    user: 'ranger'
}

const db = pgp(options);

module.exports = db;