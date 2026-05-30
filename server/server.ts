import "dotenv/config";
import express from 'express';
import cors from "cors";

const corsOptions = {
    origin: process.env.TRUSTED_ORIGIN?.split(',') || [],
    credentials: true
};

const app = express();

const port = process.env.PORT || 3000;


// Middleware
app.use(cors(corsOptions))
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Server is Live!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});