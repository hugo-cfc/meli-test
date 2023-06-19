import ProductSkeleton from "../Product/skeleton";

export const ProductsSkeleton = Array(5)
  .fill(null)
  .map(() => <ProductSkeleton key={crypto.randomUUID()} />);
