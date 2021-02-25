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

app.use(cors({
    origin: "*",
}));

app.options('*', cors());

app.use(express.json());

app.use("/games", gameRoutes);

app.use("/users", userRoutes);

app.use("/clearDatabase", clearDatabaseRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5555, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
