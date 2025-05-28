//@React
import { useRef, useState } from "react";
//------------------------------------------------------

//@Services
import { useGetProductsQuery } from "~/services";
//------------------------------------------------------

//@Types
import type { IProduct } from "~/types/common";
import type { UIEvent } from "react";
//------------------------------------------------------

export function useProductColumn() {
  const [page, setPage] = useState<number>(1);
  const columnRef = useRef<HTMLDivElement | null>(null);
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

  function handlerScroll(e: UIEvent<HTMLDivElement>) {
    if (
      (e.currentTarget.scrollTop + Number(columnRef.current?.clientHeight)) /
        e.currentTarget.scrollHeight >
      0.9
    ) {
      setPage(2);
    }
  }

  return {
    productData: page == 1 ? productData?.slice(0, 10) : productData,
    searchedData,
    isLoading,
    columnRef,
    handlerSearch,
    handlerScroll,
  };
}
