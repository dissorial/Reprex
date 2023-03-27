import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Similar, ExerciseDetailCard } from "../components";

interface ExerciseItem {
  id: string;
  name: string;
  target: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
}

const ExerciseDetail = () => {
  const { bodyPart, equipment, exerciseName, exerciseTarget, exerciseGif } =
    useParams<{
      bodyPart: string;
      equipment: string;
      exerciseName: string;
      exerciseTarget: string;
      exerciseGif: string;
    }>();

  const [similarExercisesByBodyPart, setSimilarExercisesByBodyPart] = useState<
    ExerciseItem[]
  >([]);
  const [similarExercisesByTarget, setSimilarExercisesByTarget] = useState<
    ExerciseItem[]
  >([]);
  const [similarExercisesByEquipment, setSimilarExercisesByEquipment] =
    useState<ExerciseItem[]>([]);

  const formatString = (str: string) =>
    str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

  const decodedBodyPart = bodyPart
    ? formatString(decodeURIComponent(bodyPart))
    : "";
  const decodedEquipment = equipment
    ? formatString(decodeURIComponent(equipment))
    : "";
  const decodedExerciseName = exerciseName
    ? formatString(decodeURIComponent(exerciseName))
    : "";
  const decodedExerciseTarget = exerciseTarget
    ? formatString(decodeURIComponent(exerciseTarget))
    : "";
  const decodedExerciseGif = exerciseGif ? decodeURIComponent(exerciseGif) : "";

  useEffect(() => {
    const fetchExercises = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const data = await fetchData(
        `${exerciseDbUrl}/exercises/bodyPart/${decodedBodyPart.toLowerCase()}`,
        exerciseOptions
      );
      setSimilarExercisesByBodyPart(data);
    };
    fetchExercises();
  }, []);

  useEffect(() => {
    const similarExercises = similarExercisesByBodyPart.filter(
      (exercise) => exercise.equipment === decodedEquipment.toLowerCase()
    );
    setSimilarExercisesByEquipment(similarExercises);
  }, [similarExercisesByBodyPart]);

  useEffect(() => {
    const similarExercises = similarExercisesByBodyPart.filter(
      (exercise) => exercise.target === decodedExerciseTarget.toLowerCase()
    );
    setSimilarExercisesByTarget(similarExercises);
  }, [similarExercisesByBodyPart]);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 ">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <ExerciseDetailCard
        decodedBodyPart={decodedBodyPart}
        decodedEquipment={decodedEquipment}
        decodedExerciseName={decodedExerciseName}
        decodedExerciseTarget={decodedExerciseTarget}
        decodedExerciseGif={decodedExerciseGif}
      />
      <Similar
        title="Similar exercises by equipment"
        exercises={similarExercisesByEquipment}
      />
      <Similar
        title="Similar exercises by target muscle"
        exercises={similarExercisesByTarget}
      />
    </div>
  );
};

export default ExerciseDetail;
