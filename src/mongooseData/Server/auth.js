import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const router = express.Router();

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback',
},
  async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = new User({ googleId: profile.id, email: profile.emails[0].value });
      await user.save();
    }
    done(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res.status(201).send('User created');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
  res.json({ token });
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, 'your_jwt_secret');
    res.redirect(`/?token=${token}`);
  }
);

export default router;
