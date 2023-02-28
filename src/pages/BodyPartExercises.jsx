import React from "react";
import { bodyPartImages } from "../assets/body_part_images";
import { MainPageContent } from "../components";

export default function BodyPartExercises() {
  return (
    <MainPageContent
      data={bodyPartImages}
      title="Exercise categories by body part"
      subpath="bodyPart"
    />
  );
}
