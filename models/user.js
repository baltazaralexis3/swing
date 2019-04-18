const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    // email: {type: String, required: true, lowercase: true, unique: true},
    email: {type: String, required: true, lowercase: true, default: ''},
    password: {type: String, required: true, default: '' },
    // role: String
  }, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });

module.exports = mongoose.model('User', userSchema);