"use client";

import EmptySearch from "../../../../EmptySearch";
import Product from "../Product";
import { useSearchContext } from "../../../../../app/Context/searchContext";
import useProducts from "./useProducts";
import ProductSkeleton from "../../Skeletons/ProductSkeleton";
import FiltersSkeletons from "../../Skeletons/FiltersSkeleton";
import { useId } from "react";

const Products = () => {
  const { products } = useSearchContext();
  const { isLoading } = useProducts();
  const skeletonId = useId();

  const ProductLoadingMock = Array(5)
    .fill(null)
    .map(() => <ProductSkeleton key={skeletonId} />);

  return (
    <>
      {isLoading ? (
        <div className="col-start-1 mt-16 tablet:col-end-9 notebook:col-end-13 tablet:grid tablet:grid-cols-8 tablet:gap-x-4 notebook:grid-cols-12">
          <div className="hidden tablet:flex flex-col col-start-1 col-end-3">
            <FiltersSkeletons />
          </div>

          <div className="flex flex-col col-start-3 col-end-9 notebook:col-end-13">
            {ProductLoadingMock}
          </div>
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
