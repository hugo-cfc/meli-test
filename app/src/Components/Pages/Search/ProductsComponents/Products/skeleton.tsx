import ProductSkeleton from "../Product/skeleton";

const ProductsSkeleton = () => {
  const ProductLoadingMock = Array(5)
    .fill(null)
    .map(() => <ProductSkeleton key={crypto.randomUUID()} />);

  return ProductLoadingMock;
};

export default ProductsSkeleton;
