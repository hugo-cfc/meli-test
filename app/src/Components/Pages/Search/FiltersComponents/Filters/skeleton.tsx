const FiltersSkeletons = () => (
  <div className="animate-pulse flex flex-col gap-y-2">
    <div className="flex flex-col gap-y-2 mb-3">
      <div className="bg-gray-300 h-10 w-full" />
      <div className="bg-gray-300 h-4 w-14" />
    </div>

    <div className="bg-gray-300 mb-1 w-14 h-5" />

    <div className="bg-gray-300 w-28 h-5" />

    <div className="bg-gray-300 w-36 h-5" />

    <div className="bg-gray-300 w-32 h-5" />

    <div className="mt-2 flex gap-x-1 items-center">
      <div className="w-16 h-5 bg-gray-300 border-[1px] rounded-md" />

      <span className="text-grayTextML">-</span>

      <div className="w-16 h-5 bg-gray-300 border-[1px] rounded-md" />

      <div className="w-5 h-5 rounded-[100%] bg-gray-400" />
    </div>
  </div>
);

export default FiltersSkeletons;
