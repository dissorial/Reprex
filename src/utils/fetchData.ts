const apikey: string = import.meta.env.VITE_API_KEY;

interface ExerciseOptions {
  method: string;
  headers: {
    "X-RapidAPI-Host": string;
    "X-RapidAPI-Key": string;
  };
}

export const exerciseOptions: ExerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": apikey,
  },
};

export const fetchData = async (
  url: string,
  options: RequestInit
): Promise<any> => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
