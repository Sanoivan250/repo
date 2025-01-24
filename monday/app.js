const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'student_db',
});

db.connect((err) => {
    if (err) {
        console.log(`Error in connecting to database ${err}`);
        return;
    } else {
        console.log('Database connected successfully');
    }
});


app.get('/', (req, res) => {
    res.send('Welcome to the Student Registration App');
});

app.get('/register', (req, res) => {
    res.render('addstudent');
});


app.post('/form', (req, res) => {
    const { name, age, level, email, phone, home } = req.body;
    const sql = `INSERT INTO students (name, age, level, email, phone, home) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [name, age, level, email, phone, home], (err) => {
        if (err) {
            res.status(500).send(`Error adding student ${err}`);
            return;
        }
        res.send('Student added!');
    });
});


app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(`Error fetching students ${err}`);
            return;
        }
        res.render('liststudents', { students: results });
    });
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});