import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CreateView.css';
import AthleteForm from '../../components/AthleteForm/AthleteForm';
import axios from 'axios';
import {  useNavigate, Link } from 'react-router-dom';





const CreateView = (props) => {

  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();
  const {setAllAthletes, allAthletes} = props;

  // create one athlete
  const createAthlete = (athObj, setParams1,setParams2,setParams3,setParams4) => {
    axios
      .post(
        "http://localhost:8000/api/athletes", athObj 
      )
      .then((res) => {
        console.log(res.data);
        // on vide les erreurs si on entr dns ce cas
        setErrors({});
        setAllAthletes([...allAthletes, res.data]); //  necessaire avc cette methode

        // clear form
        setParams1(""); // lifting state du firstName
        setParams2("");
        setParams3("");
        setParams4("");
        // redirect
        navigate("/home");
      })
      .catch(err=>{
        console.log("err//////", err)
        const errorResponse = err.response.data.errors ; // / Récupère les erreurs de err.response.data
       
        // Set Errors
        setErrors(errorResponse);
        
      }) 
  };

  return (
    <div className="CreateView">
      <AthleteForm
        requestPostorPatch={createAthlete}
        initialFirstName=""
        initialLastName=""
        initialSport=""
        initialTeam=""
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );

};














CreateView.propTypes = {};

CreateView.defaultProps = {};

export default CreateView;
