import cors from 'cors';
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import * as dotenv from 'dotenv';
import PostRouter from './routes/Posts.js';
import GenerateImageRouter from './routes/GenerateImage.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true}));

// error handling 
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.use('/api/post', PostRouter);
app.use('/api/generateImage', GenerateImageRouter);

// Default get route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to DreamPixel!",
    });
});

// MongoDB connection
const connectDB = async () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => {
        console.error("MongoDB connection failed:");
        console.error(error);
    });
}

// function to start the server
const startServer = async () => {
    try {
        connectDB();
        app.listen(8080, () => console.log("Server is running on port 8080"));
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

startServer();