const useModalSorter = () => {
  const options = [
    {
      id: "relevance",
      name: "Mais relevantes",
    },
    {
      id: "price_desc",
      name: "Maior preço",
    },
  ];

  return { options };
};

export default useModalSorter;
