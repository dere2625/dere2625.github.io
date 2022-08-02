const con = require('mysql2')
const connection = con.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password : 'password',
    database : 'entries'
})

connection.connect();

function test(input,callback){
    let query = `SELECT * FROM entries.entries where word like '${input}%' limit 10;`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        callback(rows)
    });
}
function findOne(input,callback){
    let query = `SELECT * FROM entries.entries where word = '${input}%' limit 10;`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        callback(rows)
    });
}

const _test = test;
const _findOne = findOne
exports. _test = test;
exports._findOne =  findOne;

connection.end;