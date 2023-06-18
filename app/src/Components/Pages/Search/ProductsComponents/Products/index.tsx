"use client";

import EmptySearch from "../../../../EmptySearch";
import Product from "../Product";
import { useSearchContext } from "../../../../../app/Context/searchContext";
import useProducts from "./useProducts";

const Products = () => {
  const { products } = useSearchContext();
  const { isLoading } = useProducts();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : products.length > 0 ? (
        <div className="flex flex-col col-start-3 col-end-9">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptySearch description="Não há anúncios que correspondam à sua busca" />
      )}
    </>
  );
};

export default Products;
