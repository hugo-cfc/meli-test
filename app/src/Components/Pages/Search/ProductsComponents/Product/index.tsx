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
      <div className="relative flex items-center bg-white px-2 py-2">
        <div className="flex flex-1 shrink-0 items-center gap-x-2 tablet:gap-x-4">
          <div className="max-h-[160px] min-w-[150px] bg-white tablet:max-w-[160px]">
            <Image
              className="aspect-square w-40 rounded-lg object-contain tablet:w-40"
              src={product.thumbnail}
              alt={product.title}
              width={160}
              height={160}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk5NfBQABxAEHa9/cKwAAAABJRU5ErkJggg=="
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-2">
            <div className="flex items-center">
              <div className="flex w-full justify-between tablet:pr-12">
                <div className="flex items-center gap-x-2">
                  <h1 className="text-xl font-light text-grayTextML desktop:text-2xl">
                    {formattedPrice}
                  </h1>
                  {product.shipping.free_shipping && (
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
                      <Truck className="w-2" />
                    </div>
                  )}
                </div>

                <p className="hidden text-[10px] text-gray-400 tablet:flex desktop:text-xs">
                  {product.address.state_name}
                </p>
              </div>
            </div>

            <p className="text-sm font-thin text-grayTextML line-clamp-3 tablet:pr-24 tablet:text-base tablet:line-clamp-2 desktop:text-xl">
              {product.title}
            </p>

            {product.installments && (
              <span className="flex gap-x-[2px] text-xs font-light text-green-500 desktop:text-sm">
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

        <div className="absolute bottom-0 right-[50%] h-[1px] w-[95%] translate-x-1/2 bg-gray-200" />
      </div>
    </Link>
  );
};

export default Product;
