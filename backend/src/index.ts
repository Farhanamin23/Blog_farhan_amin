import mongoose from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import User from './User'
import dotenv from 'dotenv';
import { DatabaseUserInterface, UserInterface, } from './interfaces/Userinterface';

dotenv.config();
const LocalStrategy = passportLocal.Strategy
                 //${process.env.PART1STRING}${process.env.USERNAME}${process.env.PASSWORD}${process.env.PART2STRING}
mongoose.connect(`mongodb+srv://farhan:farhan@cluster0.aughysi.mongodb.net/?retryWrites=true&w=majority`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("success connected")
});

// Middleware 
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(
  session({
    secret: "secretcode",
    saveUninitialized: true,
    resave: true
  })
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


//passport
passport.use(new LocalStrategy((username: string, password: string, done) => {
  User.findOne({ username: username }, (err:any, user: DatabaseUserInterface) => {
    if (err) throw err;
    if (!user) return done(null, false);
    bcrypt.compare(password, user.password, (err, result: boolean) => {
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

passport.serializeUser((user:any, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id: string, cb) => {
  User.findOne({ _id: id }, (err : any, user: DatabaseUserInterface) => {
    const userInformation: UserInterface = {
      username: user.username,
      isAdmin: user.isAdmin,
      id: user._id
    };
    cb(err, userInformation);
  });
});


// Routes
app.post('/register', async (req, res) => {
  const { username, password } = req?.body;
  if (!username || !password || typeof username !== "string" || typeof password !== "string") {
    res.send("Improper Values");
    return;
  }
  User.findOne({ username }, async (err : any, doc: DatabaseUserInterface) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("success")
    }
  })
});

const isAdministratorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { user }: any = req;
  if (user) {
    User.findOne({ username: user.username }, (err : any, doc: DatabaseUserInterface) => {
      if (err) throw err;
      if (doc?.isAdmin) {
        next();
      }
      else {
        res.send("Sorry, only admin can perform this.")
      }
    })
  }
  else {
    res.send("Sorry, you arent logged in.")
  }
}
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("Success Terautotentikasi");
});

app.get("/get", (req, res) => {
  res.send(req.user);
});

app.get("/getalluser", isAdministratorMiddleware, async (req, res) => {
  const user = await User.find({}, (err: Error, data: UserInterface[]) => {
    if (err) throw err;
    res.send(data);
  } )
})

app.delete('/logout', function (req, res){
    req.session.destroy(function() {
    res.clearCookie('success');
    res.redirect('/');
});
});

app.post("/deleteuser",isAdministratorMiddleware, async (req, res) => {
  const { id } = req?.body;
  try {
    await User.findByIdAndDelete(id);
    res.send('success');
  } catch (err) {
    res.status(500).json({
    });
  }
});

// app.post("/deleteuser", async (req, res) => {
//   const { id } = req.body;
//   await User.findByIdAndDelete(id, (err: Error) => {
//     if (err) throw err
//   });
//   res.send("succes")
// })


app.listen(8000, () => {
  console.log("server running in port 8000");
  
});

