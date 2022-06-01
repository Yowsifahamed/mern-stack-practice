import express from 'express'
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors"
import postRoutes from './routes/post.js';

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors());


app.use('/posts', postRoutes);

const CONNECTION_url = 'mongodb+srv://yowsif:fullstack12mm@cluster0.zzkam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runnung port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', true);