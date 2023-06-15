import Image from "next/image";
import IProduct from "../../@types/Product";
import Link from "next/link";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const formatedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(product.price);

  return (
    <Link href={product.permalink}>
      <div className="bg-white py-2 px-2 flex justify-between">
        <div className="flex items-center justify-start">
          <Image
            className="rounded-lg w-48 aspect-square"
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={300}
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <h1>{formatedPrice}</h1>
              <div>
                {!product.free_shipping && (
                  <div className="bg-green-600 w-4 h-4 rounded-full" />
                )}
              </div>
            </div>
            <p>{product.title}</p>
            <p>
              Em {product.installments.quantity} vezes de $
              {product.installments.amount}
            </p>
          </div>
        </div>

        <div>
          <p>{product.address.state_name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
