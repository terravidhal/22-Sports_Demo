import React from 'react';
import PropTypes from 'prop-types';
import './DeleteButton.css';
import axios from 'axios';







const DeleteButton = (props) => {
  const {athleteId, successCallback } = props;


  const deleteAthletefunc = (e) => {
      axios.delete('http://localhost:8000/api/athletes/' +athleteId)
          .then(res=>{
              successCallback(); // => console.log(res.data);
          })
         .catch((err)=>console.log(err))
  }


  return (
      <button onClick={deleteAthletefunc}>
          Delete
      </button>
  );
}



DeleteButton.propTypes = {};

DeleteButton.defaultProps = {};

export default DeleteButton;
