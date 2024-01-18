const AthleteController = require('../controllers/athlete.controller');
 
module.exports = app => {
    app.get('/api/athletes', AthleteController.findAllAthletes);  
    app.get('/api/athletes/:id', AthleteController.findOneSingleAthlete);
    app.patch('/api/athletes/:id', AthleteController.updateExistingAthlete); 
    app.post('/api/athletes', AthleteController.createNewAthlete);
    app.delete('/api/athletes/:id', AthleteController.deleteAnExistingAthlete);
}

