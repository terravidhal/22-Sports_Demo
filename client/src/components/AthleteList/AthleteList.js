import React from 'react';
import PropTypes from 'prop-types';
import './AthleteList.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';



const AthleteList =  (props) => {
  const { allAthletes, deleteAthlete } = props;

  return (
    
    <div className="AthleteList">
      <h2>All athletes:</h2>
      { 
         allAthletes.map((elt, index)=> {
          return (
            <div key={index} className='one_athlete'>
              <Link className="athlete_name" to={`/athletes/${elt._id}`}> 
                {elt.firstName} Page details! 
              </Link>
              |
              <Link to={"/athletes/edit/" + elt._id}>
                Edit
              </Link>
              |
              {/* <button onClick={()=>{deleteAthlete(elt._id)}}>Delete</button> */}
              <DeleteButton athleteId={elt._id} successCallback={()=>deleteAthlete(elt._id)}/>
            </div>
          );
        }) 
      } 
    </div>
    );
};




AthleteList.propTypes = {};

AthleteList.defaultProps = {};

export default AthleteList;
