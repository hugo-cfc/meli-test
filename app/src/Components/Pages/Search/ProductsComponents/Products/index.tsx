"use client";

import { RootState } from "../../../../../app/redux/store";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";
import useProducts from "../../../../../hooks/useProducts";
import EmptySearch from "../../../../EmptySearch";
import Product from "../Product";
import ProductsSkeleton from "./skeleton";

const Products = () => {
  const { isLoading } = useProducts();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  return (
    <>
      {isLoading ? (
        <section className="col-start-3 col-end-9 flex flex-col notebook:col-end-13">
          <ProductsSkeleton />
        </section>
      ) : products.length > 0 ? (
        <section className="col-start-3 col-end-9 flex flex-col notebook:col-end-13">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <section className="mt-4 px-2 tablet:col-start-1 tablet:col-end-9 notebook:col-end-13">
          <EmptySearch description="Não há anúncios que correspondam à sua busca" />
        </section>
      )}
    </>
  );
};

export default Products;
