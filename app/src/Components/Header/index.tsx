"use client";

import Image from "next/image";
import LogoImage from "../../assets/logos/logo_ml.png";
import Input from "../Input";
import useHeader from "./useHeader";
import { Search } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { handleSubmit, search, setSearch, handleClickLogo } = useHeader();

  return (
    <header className="bg-yellowML h-12 px-2 py-2 border-b-[1px] border-gray-300">
      <div className="m-auto flex gap-x-4 items-center tablet:grid tablet:grid-cols-8 tablet:w-[670px] notebook:grid-cols-12 notebook:w-[1000px] desktop:w-[1200px]">
        <Link href="/" onClick={handleClickLogo}>
          <Image
            className="w-11 col-start-1 col-end-2"
            src={LogoImage}
            alt="Mercado Livre"
          />
        </Link>

        <form
          className="flex-1 tablet:col-start-2 tablet:col-end-9 notebook:col-start-2 notebook:col-end-13"
          onSubmit={handleSubmit}
        >
          <Input
            className="px-2 py-1 text-xs placeholder:font-normal placeholder-gray-300 tablet:text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            buttonIcon={<Search className="w-4" />}
            placeholder="Buscar produtos, marcas e muito mais"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
