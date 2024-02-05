const {Client} = require('pg');

const db = new Client({
  user: 'clientuser',
  password: process.env.PASSWORD,
  database: 'postgres'
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to postgres database');
});

module.exports = db;
