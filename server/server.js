const express = require("express");
const cors = require('cors')    /* This is new */
const app = express();
app.use(cors())                 /* This is new */
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyAthleteRoutes = require("./routes/athlete.routes");
AllMyAthleteRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));