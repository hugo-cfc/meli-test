"use client";

import EmptySearch from "../../../../EmptySearch";
import Product from "../Product";
import useProducts from "../../../../../hooks/useProducts";
import ProductSkeleton from "../Product/skeleton";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";
import { RootState } from "../../../../../app/redux/store";

const Products = () => {
  const { isLoading } = useProducts();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  const ProductLoadingMock = Array(5)
    .fill(null)
    .map(() => <ProductSkeleton key={crypto.randomUUID()} />);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col col-start-3 col-end-9 notebook:col-end-13">
          {ProductLoadingMock}
        </div>
      ) : products.length > 0 ? (
        <>
          <div className="flex flex-col col-start-3 col-end-9 notebook:col-end-13">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="px-2 mt-4 tablet:col-start-1 tablet:col-end-9 notebook:col-end-13">
          <EmptySearch description="Não há anúncios que correspondam à sua busca" />
        </div>
      )}
    </>
  );
};

export default Products;
