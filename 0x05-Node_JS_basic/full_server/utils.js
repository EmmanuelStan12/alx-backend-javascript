const fs = require('fs');

function readDatabase(dataPath) {
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
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
