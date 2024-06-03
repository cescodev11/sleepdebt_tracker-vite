import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
