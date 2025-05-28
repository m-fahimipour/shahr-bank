//@React
import { useState } from "react";
//------------------------------------------------------

//@Services
import { useGetProductsQuery } from "~/services";
//------------------------------------------------------

//@Types
import type { IProduct } from "~/types/common";
//------------------------------------------------------

export function useProductColumn() {
  const { data: productData, isLoading } = useGetProductsQuery(undefined);
  const [searchedData, setSearchData] = useState<IProduct[] | undefined>(
    undefined
  );

  function handlerSearch(searchValue: string) {
    if (searchValue) {
      setSearchData(
        productData?.filter((prod) =>
          prod.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setSearchData([]);
    }
  }

  return {
    productData,
    searchedData,
    isLoading,
    handlerSearch,
  };
}
