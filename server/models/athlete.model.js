const mongoose = require('mongoose');
 

const AthleteSchema = new mongoose.Schema(
   {
        firstName: { 
          type: String,
          required: [true, "firstName is required"],
          maxlength: [12, "firstName must be less than 12 characters long"]
        },
        lastName: { 
          type: String,
          required: [true, "lastName is required"],
          maxlength: [12, "lastName must be less than 12 characters long"]
        },
        sport: { 
          type: String,
        },
        team: { 
          type: String,
        },
   }, 
   { timestamps: true }
);
 
const Athlete = mongoose.model('Athlete', AthleteSchema);
 
module.exports = Athlete;