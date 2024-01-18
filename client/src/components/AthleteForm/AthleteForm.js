import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AthleteForm.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';



const AthleteForm = (props) => {

    
  const { initialFirstName, initialLastName,initialSport,initialTeam, 
        requestPostorPatch, errors, setErrors } = props;
  const [firstName, setFirstName] = useState(initialFirstName); 
  const [lastName, setLastName] = useState(initialLastName);
  const [sport, setSport] = useState(initialSport);
  const [team, setTeam] = useState(initialTeam);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  
  


  const onSubmitHandler =  (e) => {
      e.preventDefault();
      requestPostorPatch({ firstName, lastName, sport, team}, setFirstName, setLastName, setSport, setTeam);
  }

  // 2e methode
  const SubmitButton2 =  () =>{
    if (firstName.length >= 2 && lastName.length >= 2) {
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
  };

  // 1ere methode
  const SubmitButton =  () =>{
    if (firstName.length >= 2 && lastName.length >= 2) {
      setIsActive(true);
      return <button type="submit" className="submit_btn active">submit</button>;
    }
    else{
      setIsActive(false);
      return <button type="submit" className="submit_btn" disabled>submit</button>;
    }
  };
  
  useEffect(() => {
    SubmitButton2();
    SubmitButton();
    console.log(firstName.length);
    console.log(lastName.length);
  }, [firstName, lastName]);


  
  const handleFirstNameErrors = (e) =>{ 
     setFirstName(e.target.value);
    
    if (e.target.value.length < 2) {
       setErrors({...errors,firstName:{ message: "FirstName must be at least 2 characters" }});
    } 
    else  {
       setErrors({...errors,firstName:{ message: "" }});
    }
  } 


  const handleLastNameErrors = (e) =>{ 
    setLastName(e.target.value);
   
    if (e.target.value.length < 2) {
      setErrors({...errors,lastName:{ message: "LastName must be at least 2 characters" }});
    } 
    else  {
       setErrors({...errors,lastName:{ message: "" }});
    }
  } 



  return (
      <div className="AthleteForm">
         <h1>Athlete Manager</h1>

        <form onSubmit={onSubmitHandler}>
           <div className='field'>
               <label>firstName :</label><br/>
               <TextField id="outlined-basic"  value={firstName} onChange = {(e)=>handleFirstNameErrors(e)} className="text_field" label="FirstName" variant="outlined" />

               {/* <input type="text" value={firstName} onChange = {(e)=>handleFirstNameErrors(e)}/> */}
               { errors.firstName ? 
                      <p style={{color:"red"}}>{errors.firstName.message}</p>
                      : null
               }
           </div>
           <div className='field'>
               <label>lastName :</label><br/>
               <TextField id="outlined-basic"  value={lastName} onChange = {(e)=>handleLastNameErrors(e)} className="text_field" label="Outlined" variant="outlined" />

               {/* <input type="text" value={lastName} onChange = {(e)=>handleLastNameErrors(e)}/> */}
               { errors.lastName ? 
                      <p style={{color:"red"}}>{errors.lastName.message}</p>
                      : null
               }
           </div>
           <div className='field'>
               <label>sport :</label><br/>
               <TextField id="outlined-basic"  value={sport} onChange = {(e)=>setSport(e.target.value)} className="text_field" label="Outlined" variant="outlined" />

               {/* <input type="text" value={sport} onChange = {(e)=>setSport(e.target.value)}/> */}
               { errors.sport ? 
                      <p style={{color:"red"}}>{errors.sport.message}</p>
                      : null
               }
           </div>
           <div className='field'>
               <label>team :</label><br/>
               <TextField id="outlined-basic"  value={team} onChange = {(e)=>setTeam(e.target.value)} className="text_field" label="Outlined" variant="outlined" />

               {/* <input type="text" value={team} onChange = {(e)=>setTeam(e.target.value)}/> */}
               { errors.team ? 
                      <p style={{color:"red"}}>{errors.team.message}</p>
                      : null
               }
           </div>
           <input disabled={ isActive === false ? true : false} className={ isActive === false ? "submit_btn": "submit_btn active"} value="submit"  type="submit"/>
           <SubmitButton/>
           <button onClick={()=>navigate("/")}>Cancel</button>
        </form>
      </div>
   )
};


AthleteForm.propTypes = {};

AthleteForm.defaultProps = {};

export default AthleteForm;







