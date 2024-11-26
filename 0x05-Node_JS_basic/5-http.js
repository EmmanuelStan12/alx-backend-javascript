const fs = require('fs');
const http = require('http');

const app = http.createServer();
const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

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

const ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
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
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
