"use client";

import EmptySearch from "../../../../Components/EmptySearch";
import Product from "../Product";
import { useSearchContext } from "../../../../app/Context/searchContext";
import useProducts from "./useProducts";

const Products = () => {
  const { products } = useSearchContext();
  const { isLoading } = useProducts();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <EmptySearch description="Não há anúncios que correspondam à sua busca" />
      )}
    </>
  );
};

export default Products;
