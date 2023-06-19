const FiltersSkeletons = () => (
  <div className="flex animate-pulse flex-col gap-y-2">
    <div className="mb-3 flex flex-col gap-y-2">
      <div className="h-10 w-full bg-gray-300" />
      <div className="h-4 w-14 bg-gray-300" />
    </div>

    <div className="mb-1 h-5 w-14 bg-gray-300" />

    <div className="h-5 w-28 bg-gray-300" />

    <div className="h-5 w-36 bg-gray-300" />

    <div className="h-5 w-32 bg-gray-300" />

    <div className="mt-2 flex items-center gap-x-1">
      <div className="h-5 w-16 rounded-md border-[1px] bg-gray-300" />

      <span className="text-grayTextML">-</span>

      <div className="h-5 w-16 rounded-md border-[1px] bg-gray-300" />

      <div className="h-5 w-5 rounded-[100%] bg-gray-400" />
    </div>
  </div>
);

export default FiltersSkeletons;
