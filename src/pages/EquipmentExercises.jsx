import React from "react";
import { equipmentImages } from "../assets/equipment_images";
import { MainPageContent } from "../components";

export default function EquipmentExercises() {
  return (
    <MainPageContent
      data={equipmentImages}
      title="Exercise categories by equipment"
      subpath="equipment"
    />
  );
}
