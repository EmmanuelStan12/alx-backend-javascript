class AppController {
  static getHomepage(_, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
