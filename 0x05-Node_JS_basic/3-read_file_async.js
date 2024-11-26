const fs = require('fs');

function countStudents(dataPath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const lines = data.toString('utf-8')
        .trim().split('\n');
      const fields = {};
      let total_students = 0;
      for (const row of lines.slice(1, lines.length)) {
        const record = row.trim().split(',');
        if (record) {
          const field = record[record.length - 1];
          if (!fields[field]) {
            fields[field] = [];
          }
          total_students++;
          fields[field].push(record[0]);
        }
      }
      console.log(`Number of students: ${total_students}`);
      for (const [field, value] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${value.length}. List: ${value.join(', ')}`);
      }
      resolve(true);
    });
  });
}

module.exports = countStudents;
