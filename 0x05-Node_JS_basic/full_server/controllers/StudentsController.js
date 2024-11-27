const readDatabase = require('../utils');

class StudentController {
  static getAllStudents(_, response) {
    const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(DB_FILE)
      .then((records) => {
        const responseText = ['This is the list of our students'];
        const fields = Object.keys(records).sort();
        for (const field of fields) {
          const value = records[field];
          const msg = `Number of students in ${field}: ${value.length}. List: ${value.join(', ')}`;
          responseText.push(msg);
        }
        response.status(200).send(responseText.join('\n'));
    })
    .catch((err) => {
      const responseText = err instanceof Error ? err.message : err.toString();
      response.status(500).send(responseText);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(DB_FILE)
      .then((records) => {
        const msg = `List: ${records[major].join(', ')}`;
        response.status(200).send(msg);
    })
    .catch((err) => {
      const responseText = err instanceof Error ? err.message : err.toString();
      response.status(500).send(responseText);
    });

  }
}

module.exports = StudentController;
