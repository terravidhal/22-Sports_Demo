const Athlete = require('../models/athlete.model');
 


module.exports.findAllAthletes = (req, res) => {
    Athlete.find()
        .sort({ firstName: 1 })
        .then((allDaAthletes) => {
            res.json(allDaAthletes)
        })
        .catch((err) => {
             res.status(400).json(err)
        });
}
 
module.exports.findOneSingleAthlete = (req, res) => {
    Athlete.findOne({ _id: req.params.id })
        .then(oneSingleAthlete => {
            res.json(oneSingleAthlete)
        })
        .catch((err) => {
             res.status(400).json(err)
        });}
 

module.exports.createNewAthlete = (req, res) => {
    Athlete.create(req.body)
        .then(newlyCreatedAthlete => {
            res.json(newlyCreatedAthlete)
        })
        .catch((err) => {
            res.status(400).json(err) 
        });}
 

module.exports.updateExistingAthlete = (req, res) => {
    Athlete.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAthlete => {
            res.json(updatedAthlete)
        })
        .catch((err) => {
             res.status(400).json(err)
        });}
 
        
module.exports.deleteAnExistingAthlete = (req, res) => {
    Athlete.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
             res.status(400).json(err)
        });}


    