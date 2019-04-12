const User = require('../models/user');

module.exports = {
  signup
};


async function signup(req, res) {
  const user = new User(req.body);
  
  try {
    await user.save();
    console.log(user);
    // TODO: Send back a JWT instead of the user
    res.json(user);
  } catch (err) {
    console.log('hi');
    // Probably a duplicate email
    res.status(400).json(err);
  }
}