const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'EasyGoingDB'
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to EasyGoing database');
});
  
db.query('SELECT * FROM locations', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});


/*db.end((err) => {
  if (err) {
    console.error('Error closing connection:', err);
    return;
  }
  console.log('Connection closed');
});*/

module.exports = db;
