// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'electron',
    password: 'electron',
    database: 'electron'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

queryData = function () {
    connection.query('SELECT * FROM employees', (err, rows) => {
        if (err) throw err

        console.log('Data received from Db:\n')
        console.log(rows)
        const table = document.getElementById('results')
        rows.forEach((element, index) => {
            let row = table.insertRow(index)
            let cell1 = row.insertCell(0)
            let cell2 = row.insertCell(1)
            let cell3 = row.insertCell(2)
            cell1.innerText = element.first_name
            cell2.innerText = element.last_name
            cell3.innerText = element.email
        }, this);
    })
}

// export
module.exports = {queryData}