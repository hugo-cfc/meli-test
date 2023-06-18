import Image from "next/image";
import SearchImage from "../../assets/images/search.svg";

interface EmptySearchProps {
  description: string;
}

export default function EmptySearch({ description }: EmptySearchProps) {
  return (
    <div className="w-full h-full py-4 flex flex-col gap-y-4 items-center justify-center">
      <Image
        className="w-[200px] animate-fadeImage tablet:w-[400px]"
        src={SearchImage}
        alt="Busca no site"
      />

      <h1 className="text-gray-600 tablet:text-xl text-center">
        {description}
      </h1>
    </div>
  );
}
