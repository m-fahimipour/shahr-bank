import { useEffect, useRef, useState } from "react";
import { useGetProductsQuery } from "../../../../services";
import type { IProduct } from "../../../../types/common";

export function useProductColumn() {
  const { data: productData, isLoading } = useGetProductsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchedData, setSearchData] = useState<IProduct[] | undefined>(
    undefined
  );

  function handleSearchTerm(value: string) {
    setSearchTerm(value);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (searchTerm) {
        setSearchData(
          productData?.filter((prod) =>
            prod.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setSearchData([]);
      }
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return {
    productData,
    searchedData,
    isLoading,
    searchTerm,
    handleSearchTerm,
  };
}
