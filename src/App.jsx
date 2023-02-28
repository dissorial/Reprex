import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  BodyPartExercises,
  EquipmentExercises,
  TargetMuscleExercises,
  ExerciseList,
  ExerciseDetail,
  SearchPage,
  Homepage,
} from "./pages";

import { Footer, Nav } from "./components";

const App = () => {
  return (
    <div className="bg-gray-900 ">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bodyPart" element={<BodyPartExercises />} />
        <Route path="/equipment" element={<EquipmentExercises />} />
        <Route path="/target" element={<TargetMuscleExercises />} />
        <Route path="/:querytype/:attribute" element={<ExerciseList />} />

        <Route
          path="/exercise-detail/:bodyPart/:equipment/:exerciseName/:exerciseTarget/:exerciseGif"
          element={<ExerciseDetail />}
        />
        <Route path="/search/:searchQuery" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
