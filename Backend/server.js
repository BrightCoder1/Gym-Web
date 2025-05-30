import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();


const port = process.env.PORT || 2000;

app.listen(3000, () => {
    console.log(`http://localhost:${port}`);
})