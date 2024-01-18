import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DetailsView.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../../components/DeleteButton/DeleteButton';



const DetailsView = (props) => {

  const [Oneathlete, setPerson] = useState({})
  const {id} = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
      axios.get("http://localhost:8000/api/athletes/" + id)
          .then( res => {
              setPerson(res.data);
          })
          .catch( err => console.log(err) );
  }, [id]); // pas tellement necessaire car le composant s'affich sur une nvelle page, donc elle est actualisée par la même occasion

  return (
      <div className="DetailsView">
        <h1>Page details :</h1>
        <div className="fields">
            <p>
              <span className='infos'>FirstName:</span>
              <span className='infos_field'> {Oneathlete.firstName}</span>
            </p>
            <p>
              <span className='infos'>LastName:</span>
              <span className='infos_field'> {Oneathlete.lastName}</span>
            </p>
            <p>
              <span className='infos'>Sport:</span>
              <span className='infos_field'> {Oneathlete.sport}</span>
            </p>
            <p>
              <span className='infos'>Team:</span>
              <span className='infos_field'> {Oneathlete.team}</span>
            </p>
        </div>
        <Link to="/"> 
              Return Home Page! 
        </Link>
        <div className="btn-del">
        <DeleteButton athleteId={id} successCallback={() => navigate("/")} />
        </div>
      </div>
  );
}





DetailsView.propTypes = {};

DetailsView.defaultProps = {};

export default DetailsView;
