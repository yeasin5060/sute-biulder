import "dotenv/config";
import express from 'express';
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

const corsOptions = {
    origin: process.env.TRUSTED_ORIGIN?.split(',') || [],
    credentials: true
};

const app = express();

const port = process.env.PORT || 3000;


// Middleware
app.use(cors(corsOptions))
app.use(express.json());

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.get('/', (req, res) => {
    res.send('Server is Live!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});