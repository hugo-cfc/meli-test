const ProductSkeleton = () => (
  <div className="relative flex animate-pulse items-center gap-x-2 bg-white px-2 py-2">
    <div className="h-[160px] w-[160px] bg-gray-300" />

    <div className="flex flex-1 flex-col gap-y-2">
      <div className="h-6 w-24 bg-gray-400" />

      <div className="h-12 w-[150px] bg-gray-400 tablet:w-[240px]" />

      <div className="h-6 w-[120px] bg-gray-400" />
    </div>
  </div>
);

export default ProductSkeleton;
