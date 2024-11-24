const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root',
    password: 'atharv123', // Add your MySQL password here
    database: 'itachi',
    port: 3307, // Use MySQL port (default is 3306)
});

// Connect to the Database
db.connect((err) => {
    if (err) {
        console.error('DB connection failed:', err.message);
        return;
    }
    console.log('DB connection succeeded');
});

// Route to Add a Student
app.post('/students', (req, res) => {
    const { name, roll_number } = req.body;
    db.query(
        'INSERT INTO students (name, roll_number) VALUES (?, ?)',
        [name, roll_number],
        (err, result) => {
            if (err) {
                console.error('Error inserting student:', err);
                return res.status(500).send(err);
            }
            res.send({ message: "Student added successfully!" });
        }
    );
});

// Route to Add Marks for a Student
app.post('/marks', (req, res) => {
    const { student_id, subject_name, mse_marks, ese_marks } = req.body;
    db.query(
        'INSERT INTO marks (student_id, subject_name, mse_marks, ese_marks) VALUES (?, ?, ?, ?)',
        [student_id, subject_name, mse_marks, ese_marks],
        (err, result) => {
            if (err) {
                console.error('Error inserting marks:', err);
                return res.status(500).send(err);
            }
            res.send({ message: "Marks added successfully!" });
        }
    );
});

// Route to Get Results
app.get('/getresult', (req, res) => {
    const query = `
        SELECT s.id, s.name, s.roll_number, m.subject_name, 
               m.mse_marks, m.ese_marks, 
               (m.mse_marks * 0.3 + m.ese_marks * 0.7) AS final_marks
        FROM students s
        INNER JOIN marks m ON s.id = m.student_id
    `;
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching results:', err);
            return res.status(500).send(err);
        }
        res.send(result);
    });
});

// Start the Server
const PORT = 5959;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
