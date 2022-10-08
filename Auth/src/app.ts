import  express  from "express";
import 'express-async-errors'
import {json} from 'body-parser';
import mongoose from "mongoose";
import cookieSession from 'cookie-session';


// Routes Handler:
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

// Middleware:
import { errorHandler } from "@nghilt/common";

// Not found Error:
import { NotFoundError } from "@nghilt/common";



const app = express();
app.set('trust proxy',true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
)
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.all('*', async (req,res,next) => {
    throw new NotFoundError();
})

app.use(errorHandler)

export {app};