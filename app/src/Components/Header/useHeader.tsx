import { FormEvent, useState } from "react";

const useHeader = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return { handleSubmit, search, setSearch };
};

export default useHeader;
