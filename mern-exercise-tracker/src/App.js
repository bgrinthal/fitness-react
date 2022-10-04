import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// import components
import Navbar from "./components/navbar"
import ExerciseList from "./components/exercise-list"
import EditExercise from "./components/edit-exercise"
import CreateExercise from "./components/create-exercise"
import CreateUser from "./components/create-user"

// react router adds url paths to component
// Route / goes to ExerciseList, /edit/:id goes to EditExercise, ect.
function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
