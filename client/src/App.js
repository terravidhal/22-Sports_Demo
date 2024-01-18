import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import UpdateView from "./views/UpdateView/UpdateView";
import CreateView from "./views/CreateView/CreateView";
import DetailsView from "./views/DetailsView/DetailsView";









function App() {

  const [allAthletes, setAllAthletes] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"  />} />  {/* redirection */}
        <Route path="/home" element={<HomeView
         allAthletes={allAthletes}
         setAllAthletes={setAllAthletes}/>} />
        <Route path="/athletes/create" element={<CreateView
        allAthletes={allAthletes}
        setAllAthletes={setAllAthletes} />} />
        <Route path="/athletes/:id" element={<DetailsView />}/>
        <Route path="/athletes/edit/:id" element={<UpdateView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
