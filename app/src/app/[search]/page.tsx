import getProducts from "../../fetchers/getProducts";
import { Metadata } from "next";
import Product from "../../Components/Product";

export const metadata: Metadata = {
  title: "| Mercado Livre 📦",
  description:
    "Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis.",
};

export default async function SearchResult({
  params,
}: {
  params: { search: string };
}) {
  const products = await getProducts({ search: params.search });

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
