import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './HomeView.css';
import AthleteList from '../../components/AthleteList/AthleteList';
import axios from 'axios';
import { Link } from 'react-router-dom';





const HomeView = (props) => {
  const {allAthletes, setAllAthletes} = props;


  
  // get all athletes
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/athletes")
      .then((res) => setAllAthletes(res.data))
      .catch((err) => console.log(err));
  }, []); // important!



  // delete One specific athlete
  const deleteAthlete = (athleteId) => {
    axios
      .delete("http://localhost:8000/api/athletes/" + athleteId)
      .then((res) => {
       // console.log(res.data);
        setAllAthletes(allAthletes.filter(athlete=> athlete._id !== athleteId)); //  necessaire! empeche ls appels courant au back-end
      })
      .catch((err) => console.log(err));
  };

  




  return (
    <div className="HomeView">
      <Link to="/athletes/create">Add athlete</Link>
      <AthleteList allAthletes={allAthletes} deleteAthlete={deleteAthlete} />
    </div>
  );

};









HomeView.propTypes = {};

HomeView.defaultProps = {};

export default HomeView;
