const fs = require('fs');
const express = require('express');

const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const app = express();

function countStudents(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.toString('utf-8')
          .trim().split('\n');
        const fields = {};
        for (const row of lines.slice(1, lines.length)) {
          const record = row.trim().split(',');
          if (record) {
            const field = record[record.length - 1];
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(record[0]);
          }
        }
        const report = [];
        const totalStudents = Object.values(fields)
          .reduce((acc, values) => acc + values.length, 0);
        report.push(`Number of students: ${totalStudents}`);
        for (const [field, value] of Object.entries(fields)) {
          report.push(`Number of students in ${field}: ${value.length}. List: ${value.join(', ')}`);
        }
        resolve(report.join('\n'));
      }
    });
  });
}

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening on PORT ${PORT}\n`);
});

module.exports = app;
