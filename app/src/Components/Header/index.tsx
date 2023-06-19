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
    <header className="h-12 border-b-[1px] border-gray-300 bg-yellowML px-2 py-2">
      <div className="m-auto flex items-center gap-x-4 tablet:grid tablet:w-[670px] tablet:grid-cols-8 notebook:w-[1000px] notebook:grid-cols-12 desktop:w-[1200px]">
        <Link href="/" onClick={handleClickLogo}>
          <Image
            className="col-start-1 col-end-2 w-11"
            src={LogoImage}
            alt="Mercado Livre"
            priority
          />
        </Link>

        <form
          className="flex flex-1 items-center tablet:col-start-2 tablet:col-end-9 notebook:col-start-2 notebook:col-end-13"
          onSubmit={handleSubmit}
        >
          <Input
            className="px-2 py-2 text-xs placeholder-gray-300 placeholder:font-normal tablet:py-1.5 tablet:text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar produtos, marcas e muito mais"
          />
          <button
            type="submit"
            className="bg-grayML px-2 py-1 transition-all hover:bg-gray-100"
          >
            <Search className="w-4" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
