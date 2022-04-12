import express, { json } from "express";
import morgan from "morgan";
import usersRouter from "./routes/users.routes";
import actasRouter from "./routes/actas.routes";

const app = express();

//MW
app.use(morgan('dev'));
app.use(json());

//Init
app.use('/api/users',usersRouter);
app.use('/api/actas',actasRouter);

export default app;