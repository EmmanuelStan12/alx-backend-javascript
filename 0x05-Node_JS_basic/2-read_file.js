const fs = require('fs');

function countStudents(dataPath) {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs.readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
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

  for (const [field, value] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${value.length}. List: ${value.join(', ')}`);
  }
}

module.exports = countStudents;
