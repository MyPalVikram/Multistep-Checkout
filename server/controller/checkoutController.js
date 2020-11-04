const userLog = require('../db/database.js');

module.exports = {
  post: (req, res) => {
    const userData = new userLog(req.body);

    userData.save((err, data) => {
      if (err) {
        res.status(404).send();
        res.end()
      } else {
        res.status(200).send();
      }
    });
  }
}