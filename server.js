// Import the Express framework
import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./routes/UserRoute.js";
// Create an instance of the Express application
const app = express();
// Middleware to parse JSON data in incoming requests
app.use(express.json());
/* MONGOOSE SETUP */
// Define a different port for the server to listen on if the environment variable 'PORT' is set
const PORT = 3000 || 9000;
// app.listen(PORT, () => console.log(`Server Port: ${PORT}, DB connected`));
// Import and connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://Priyanka:srcn1224@cluster0.mobsisi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    // Start the Express server and listen on the specified port
    app.listen(PORT, () => console.log(`Server Port: ${PORT}, DB connected`));
  })
  .catch((error) => console.log(`${error} did not connect`));

app.use("/users", UserRoutes);
