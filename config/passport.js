const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const User = require('../models/User')

//passport auth with googleOAUTH
module.exports = function (passport) {
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
    //saving the user profile data in 'newUser'
    async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.lastName,
        image: profile.photos[0].value
      }
      try {
        let user = await User.findOne({
          googleId: profile.id
        })
        if (user) {
          done(null, user)
        } else {
          user = await User.create(newUser)
          done(null, user)
        }
      } catch (err) {
        console.log(err)

      }

    }))

  passport.serializeUser((user, cb) => {
    process.nextTick(() => {
      cb(null, {
        id: user.id,
        username: user.username,
        name: user.name
      });
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, user);
    });
  });

}