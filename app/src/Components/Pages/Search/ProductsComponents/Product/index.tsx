import Image from "next/image";
import IProduct from "../../../../../@types/Product";
import Link from "next/link";
import { Truck } from "lucide-react";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedInstallmentsValue = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(Number(product.installments?.amount));

  return (
    <Link href={product.permalink}>
      <div className="bg-white py-2 px-2 flex items-center relative">
        <div className="flex items-center gap-x-2 shrink-0 flex-1 tablet:gap-x-4">
          <div className="bg-white min-w-[150px] max-h-[160px] tablet:max-w-[160px]">
            <Image
              className="rounded-lg w-40 object-contain aspect-square tablet:w-40"
              src={product.thumbnail}
              alt={product.title}
              width={160}
              height={160}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk5NfBQABxAEHa9/cKwAAAABJRU5ErkJggg=="
            />
          </div>

          <div className="flex flex-col gap-y-2 flex-1">
            <div className="flex items-center">
              <div className="w-full flex justify-between tablet:pr-12">
                <div className="flex items-center gap-x-2">
                  <h1 className="text-grayTextML font-light text-xl desktop:text-2xl">
                    {formattedPrice}
                  </h1>
                  {product.shipping.free_shipping && (
                    <div className="bg-green-500 w-4 h-4 rounded-full flex items-center justify-center">
                      <Truck className="w-2" />
                    </div>
                  )}
                </div>

                <p className="text-gray-400 text-[10px] hidden tablet:flex desktop:text-xs">
                  {product.address.state_name}
                </p>
              </div>
            </div>

            <p className="text-grayTextML text-sm font-thin line-clamp-3 tablet:line-clamp-2 tablet:text-base tablet:pr-24 desktop:text-xl">
              {product.title}
            </p>

            {product.installments && (
              <span className="text-green-500 font-light text-xs flex gap-x-[2px] desktop:text-sm">
                <div className="text-grayTextML">
                  <span>em</span>
                </div>{" "}
                {product.installments.quantity}x de&nbsp;
                {formattedInstallmentsValue}
              </span>
            )}

            <p className="text-xs text-grayTextML tablet:hidden">
              {product.address.state_name}
            </p>
          </div>
        </div>

        <div className="bg-gray-200 w-[95%] h-[1px] absolute bottom-0 translate-x-1/2 right-[50%]" />
      </div>
    </Link>
  );
};

export default Product;
