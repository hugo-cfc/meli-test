"use client";

import { RootState } from "@/app/redux/store";
import EmptySearch from "@/Components/EmptySearch";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import useProducts from "@/hooks/useProducts";

import Product from "../Product";
import { ProductsSkeleton } from "./skeleton";

const Products = () => {
  const { isLoading } = useProducts();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  return (
    <>
      {isLoading ? (
        <section
          className="col-start-3 col-end-9 flex flex-col notebook:col-end-13"
          data-testid="skeleton"
        >
          {ProductsSkeleton}
        </section>
      ) : products.length > 0 ? (
        <section
          className="col-start-3 col-end-9 flex flex-col notebook:col-end-13"
          data-testid="products-section"
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <section className="mt-4 px-2 tablet:col-start-1 tablet:col-end-9 notebook:col-end-13">
          <EmptySearch
            description="Não há anúncios que correspondam à sua busca"
            data-testid="empty-search"
          />
        </section>
      )}
    </>
  );
};

export default Products;
