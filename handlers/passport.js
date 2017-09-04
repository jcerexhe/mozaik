const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(User.createStrategy());

passport.use(new FacebookStrategy({
  clientID: process.env.FBCLIENT,
  clientSecret: process.env.FBSECRET,
  callbackURL: process.env.FBCALLBACK,
  profileFields: ['id', 'displayName', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOne({ 'facebookId': profile.id });
  if (user) return done(null, user);
  else {
    const user = new User({
      facebookId: profile.id,
      facebookToken: accessToken,
      name: profile.displayName,
      email: profile.emails[0].value
    });
    user.save(function(err) {
      if (err) throw err;
      return done(null, user);
    });
  }
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
