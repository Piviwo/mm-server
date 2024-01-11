const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const db = require('./database.js')

app.use(cors())

app.get('/api/places', (req, res) => {
  res.send({response: "Get Places"})
  //request places from datapase
  
})

app.use(express.json());
app.post('/api/place', (req, res) => {
  const { name, image, type, longitude, latitude} = req.body;
  //res.send({ data: req.body });
  const sql = 'INSERT INTO locations (name, image, type, longitude, latitude) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, image, type, longitude, latitude], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send({send: 'Internal Server Error'});
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send({send: 'Data inserted successfully'});
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})