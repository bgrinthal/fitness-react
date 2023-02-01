import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import components
import Navbar from "./components/navbar";
import ExerciseList from "./components/exercise-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import DailyRoutine from "./components/daily-routine";

// react router adds url paths to component
// Route / goes to ExerciseList, /edit/:id goes to EditExercise, ect.
function App() {
  
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Routes>
        <Route path="/" element={<ExerciseList />}/>
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
        <Route path="/routine" element={<DailyRoutine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
