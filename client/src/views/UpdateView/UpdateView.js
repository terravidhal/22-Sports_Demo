import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './UpdateView.css';
import AthleteForm from '../../components/AthleteForm/AthleteForm';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';





const UpdateView = (props) => {

  const { id } = useParams();
  const [athObj, setAthObj] = useState({});
  const [loaded, setLoaded] = useState(false); // verifie quand si ls donnees st recupereés et disponibles
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); 


  //get  data one specific athlete
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/athletes/" + id)
      .then((res) => {
        setAthObj(res.data);
        setLoaded(true); // données dispo on set en "true"
      })
      .catch((err) => console.log(err));
  }, [id]); // bof



  // update one specific athlete
  const updateAthlete = (athObj, setParams1,setParams2,setParams3, setParams4) => {
    axios
      .patch(
        "http://localhost:8000/api/athletes/" + id,

        athObj 
      )
      .then((res) => {
       // console.log(res.data);
        // on vide les erreurs si on entr dns ce cas
         setErrors({});
       // clear form
        setParams1(""); // lifting state du title
        setParams2("");
        setParams3("");
        setParams4("");
        // redirect
        navigate("/home");
      })
      .catch(err=>{
        console.log("err//////", err)
        const errorResponse = err.response.data.errors; // / Récupère les erreurs de err.response.data
        // Set Errors
        setErrors(errorResponse);
      }) 
  };



  return (
    <div className="UpdateView">
      <h1>Update a Athlete</h1>
      {loaded === true ? 
        <AthleteForm requestPostorPatch={updateAthlete} initialFirstName={athObj.firstName} 
        initialLastName={athObj.lastName} initialSport={athObj.sport}
        initialTeam={athObj.team}
        errors={errors}
        setErrors={setErrors} />
       : null}
    </div>
  );

};











UpdateView.propTypes = {};

UpdateView.defaultProps = {};

export default UpdateView;
