import abductors from "./abductors.png";
import abs from "./abs.png";
import adductors from "./adductors.png";
import biceps from "./biceps.png";
import calves from "./calves.png";
import cardiovascular_system from "./cardiovascular_system.png";
import delts from "./delts.png";
import forearms from "./forearms.png";
import glutes from "./glutes.png";
import hamstrings from "./hamstrings.png";
import lats from "./lats.png";
import pectorals from "./pectorals.png";
import quads from "./quads.png";
import spine from "./spine.png";
import traps from "./traps.png";
import triceps from "./triceps.png";
import upper_back from "./upper_back.png";

type TargetMuscleImages = {
  [key: string]: {
    image: string;
    title: string;

    link: string;
  };
};

const targetMuscleImages = {
  abductors: {
    image: abductors,
    title: "Abductors",
    link: "/abductors",
  },
  abs: {
    image: abs,
    title: "Abs",
    link: "/abs",
  },
  adductors: {
    image: adductors,
    title: "Adductors",
    link: "/adductors",
  },
  biceps: {
    image: biceps,
    title: "Biceps",
    link: "/biceps",
  },
  calves: {
    image: calves,
    title: "Calves",
    link: "/calves",
  },
  cardiovascular_system: {
    image: cardiovascular_system,
    title: "Cardiovascular System",
    link: "/cardiovascular-system",
  },
  delts: {
    image: delts,
    title: "Delts",
    link: "/delts",
  },
  forearms: {
    image: forearms,
    title: "Forearms",
    link: "/forearms",
  },
  glutes: {
    image: glutes,
    title: "Glutes",
    link: "/glutes",
  },
  hamstrings: {
    image: hamstrings,
    title: "Hamstrings",
    link: "/hamstrings",
  },
  lats: {
    image: lats,
    title: "Lats",
    link: "/lats",
  },
  pectorals: {
    image: pectorals,
    title: "Pectorals",
    link: "/pectorals",
  },
  quads: {
    image: quads,
    title: "Quads",
    link: "/quads",
  },
  spine: {
    image: spine,
    title: "Spine",
    link: "/spine",
  },
  traps: {
    image: traps,
    title: "Traps",
    link: "/traps",
  },
  triceps: {
    image: triceps,
    title: "Triceps",
    link: "/triceps",
  },
  upper_back: {
    image: upper_back,
    title: "Upper Back",
    link: "/upper-back",
  },
};

export { targetMuscleImages, TargetMuscleImages };
