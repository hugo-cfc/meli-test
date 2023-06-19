import Image from "next/image";
import SearchImage from "../../assets/images/search.svg";

interface EmptySearchProps {
  description: string;
}

export default function EmptySearch({ description }: EmptySearchProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 py-4">
      <Image
        className="w-[200px] animate-fadeImage tablet:w-[400px]"
        src={SearchImage}
        alt="Busca no site"
      />

      <h1 className="text-center text-gray-600 tablet:text-xl">
        {description}
      </h1>
    </div>
  );
}
