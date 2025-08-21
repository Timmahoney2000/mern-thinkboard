import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();




{/*
import path from "path";
import { fileURLToPath } from "url";

import Note from "./models/Note.js";
import notesControllers from "./controllers/notesControllers.js";
*/}
    



console.log('Loaded ENV:', process.env);

console.log('Mongo URI:', process.env.MONGODB_URI);






const app = express();
const PORT = process.env.PORT || 5001;



// middleware to parse JSON
app.use(express.json()); //this will parse JSON data in the request body
// our simple custom middleware
app.use(cors());
app.use(rateLimiter);



app.use((req, res) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
})

app.use("api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
})


});


