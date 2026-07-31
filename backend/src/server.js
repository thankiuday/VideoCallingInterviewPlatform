import express from "express";
import dotenv from "dotenv";
import path from "path";
import { ENV } from "./lib/.env";


dotenv.config();
const app = express();

const __dirname = path.resolve();


app.get("/health", (req, res) => {
  res.status(200).json({status:"API is healthy and running"});
});

 console.log("NODE_ENV",ENV.NODE_ENV);
// make our app ready for deployment
if(ENV.NODE_ENV === "production"){
   
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist","index.html"));
    }
    )
}

app.listen(ENV.PORT, ()=>{
    console.log("Server is running on port",ENV.PORT);
})