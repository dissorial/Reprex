export default function ExerciseDetailCard({
  decodedBodyPart,
  decodedEquipment,
  decodedExerciseName,
  decodedExerciseTarget,
  decodedExerciseGif,
}) {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-2 sm:py-24 lg:px-2">
        <h1 className="text-5xl font-bold tracking-tight text-gray-100">
          Exercise details
        </h1>

        <div className="mt-2 pb-5 text-sm sm:flex sm:justify-between w-1/3"></div>

        <div className="mt-8">
          <h2 className="sr-only">Exercise details</h2>

          <div className="space-y-24">
            <div className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
              <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-50">
                  <img
                    src={decodedExerciseGif}
                    alt={decodedExerciseName}
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="sm:col-span-12 md:col-span-7 ml-10">
                <dl className="grid grid-cols-1 gap-y-16 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                  <div>
                    <dt className="font-medium text-2xl text-gray-200">
                      Body part
                    </dt>
                    <dd className="mt-3 text-gray-300 text-xl">
                      <span className="block">{decodedBodyPart}</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-200 text-2xl">
                      Target muscle
                    </dt>
                    <dd className="mt-3 space-y-3 text-gray-300 text-xl">
                      <p>{decodedExerciseTarget}</p>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-200 text-2xl">
                      Equipment
                    </dt>
                    <dd className="mt-3 space-y-3 text-gray-300 text-xl">
                      <p>{decodedEquipment}</p>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-200 text-2xl">
                      Exericse name
                    </dt>
                    <dd className="mt-3 space-y-3 text-gray-300 text-xl">
                      <p>{decodedExerciseName}</p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
