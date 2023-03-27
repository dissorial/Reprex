import React from "react";
import { targetMuscleImages } from "../assets/target_muscle_images";
import { MainPageContent } from "../components";

export default function TargetMuscleExercises() {
  return (
    <MainPageContent
      data={targetMuscleImages}
      title="Exercise categories by target muscle"
      subpath="target"
    />
  );
}
