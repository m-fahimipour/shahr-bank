//@React
import { useLayoutEffect, useRef, useState } from "react";
//------------------------------------------------------

//@Third-Party
import { useSearchParams } from "react-router";
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
  const [searchParams] = useSearchParams();
  const [searchedData, setSearchData] = useState<IProduct[] | undefined>([]);
  const { data: productData, isLoading } = useGetProductsQuery(undefined);

  function handlerScroll(e: UIEvent<HTMLDivElement>) {
    if (
      (e.currentTarget.scrollTop + Number(columnRef.current?.clientHeight)) /
        e.currentTarget.scrollHeight >
      0.9
    ) {
      setPage(2);
    }
  }

  useLayoutEffect(() => {
    if (searchParams.has("productSearch")) {
      setSearchData(
        productData?.filter((prod) =>
          prod.title
            .toLowerCase()
            .includes(searchParams.get("productSearch")!.toLowerCase())
        )
      );
    } else {
      setSearchData([]);
    }
  }, [searchParams.get("productSearch"), isLoading]);

  return {
    productData: page == 1 ? productData?.slice(0, 10) : productData,
    searchedData,
    isLoading,
    columnRef,
    hasProductSearchParams: searchParams.has("productSearch"),
    handlerScroll,
  };
}
