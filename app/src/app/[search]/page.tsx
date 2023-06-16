import { Metadata } from "next";
import Products from "../../Components/Pages/Search/Products";

interface Props {
  params: { search: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const search = params.search;

  return {
    title: `${search} | Mercado Livre 📦`,
    description:
      "Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis.",
  };
}

export default function Search() {
  return (
    <div className="mt-12 pb-32">
      <Products />
    </div>
  );
}
