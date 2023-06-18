const ProductSkeleton = () => (
  <div className="animate-pulse bg-white py-2 gap-x-2 px-2 flex items-center relative">
    <div className="bg-gray-300 w-[160px] h-[160px]" />

    <div className="flex flex-col gap-y-2 flex-1">
      <div className="bg-gray-400 w-24 h-6" />

      <div className="w-[150px] h-12 bg-gray-400 tablet:w-[240px]" />

      <div className="w-[120px] h-6 bg-gray-400" />
    </div>
  </div>
);

export default ProductSkeleton;
