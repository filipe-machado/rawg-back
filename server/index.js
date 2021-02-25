import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

import gameRoutes from "./routes/gameRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import clearDatabaseRoute from "./routes/clearDatabaseRoute.js";

const app = express();

conf = {
  port: process.env.PORT || process.argv[2] || 5555,

  originUndefined: function (req, res, next) {
    if (!req.headers.origin) {
      res.json({
        mess: 'You are visiting the service locally.'
      });
    } else {
      next();
    }
  },
  cors: {
    origin: function (origin, cb) {
      let wl = ['https://rawgax.netlify.app'];
      if (wl.indexOf(origin) != -1) {
        cb(null, true);
      } else {
        cb(new Error('invalid origin: ' + origin), false);
      }
    },
    optionsSuccessStatus: 200
  }
};

app.use(conf.originUndefined, cors(conf.cors));

app.use(express.json());

app.use("/games", gameRoutes);

app.use("/users", userRoutes);

app.use("/clearDatabase", clearDatabaseRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(conf.port, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
