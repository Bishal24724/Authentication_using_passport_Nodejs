import express from 'express';
import session from 'express-session';
import passport from './config/passport.js';
import sequelize from './config/sequelize.js';
import authRoutes from './routes/auth.js';
import dashboardRoutes from './routes/dashboard.js'; // Import protected routes

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Session middleware
app.use(
  session({
    secret: 'bishaldhakal',
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true }, 
  })
);


app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes); // if we are authenticated then it will be display





app.listen(8000,async()=>{
    console.log("server is running on port 8000");
  try{
    await sequelize.sync({ force: false });
    console.log("database connected");
  }catch(error){
    console.log("unable to connect to the database");
  }
});

