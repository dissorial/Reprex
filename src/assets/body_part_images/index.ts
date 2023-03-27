import back from "./back.png";
import cardio from "./cardio.png";
import chest from "./chest.png";
import lower_arms from "./lower_arms.png";
import lower_legs from "./lower_legs.png";
import neck from "./neck.png";
import shoulders from "./shoulders.png";
import upper_arms from "./upper_arms.png";
import upper_legs from "./upper_legs.png";
import waist from "./waist.png";

type BodyPartImages = {
  [key: string]: {
    image: string;
    title: string;
    link: string;
  };
};

const bodyPartImages = {
  back: {
    image: back,
    title: "Back",
    link: "/back",
  },
  shoulders: {
    image: shoulders,
    title: "Shoulders",
    link: "/shoulders",
  },
  chest: {
    image: chest,
    title: "Chest",
    link: "/chest",
  },
  upper_arms: {
    image: upper_arms,
    title: "Upper Arms",
    link: "/upper-arms",
  },
  cardio: {
    image: cardio,
    title: "Cardio",
    link: "/cardio",
  },
  lower_arms: {
    image: lower_arms,
    title: "Lower Arms",
    link: "/lower-arms",
  },
  lower_legs: {
    image: lower_legs,
    title: "Lower Legs",
    link: "/lower-legs",
  },
  neck: {
    image: neck,
    title: "Neck",
    link: "/neck",
  },
  upper_legs: {
    image: upper_legs,
    title: "Upper Legs",
    link: "/upper-legs",
  },
  waist: {
    image: waist,
    title: "Waist",
    link: "/waist",
  },
};

export { bodyPartImages, BodyPartImages };
