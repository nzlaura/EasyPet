const User = require('./db/db')
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy; //use an uppercase 'L' for local

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => { //use and uppercase 'L' for local
      User.getUserByName(username , (err, user) => { //just send down the username, instead of an object with the property username
        // might be needed to switched to a .then but try it out before switching it and see if it works
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => { // findOne doesn't exist. create a db function that finds a user by id and returns the user data and use that instead
      // might be needed to switched to a .then but try it out before switching it and see if it works
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation); // maybe return cb(null, userInformation) - as to say there isn't an error
    });
  });
};