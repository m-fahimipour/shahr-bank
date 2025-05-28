//@React
import { useEffect, useState } from "react";
//------------------------------------------------------

//@Third-Party
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";
//------------------------------------------------------

//@Types
import type { TRootState } from "~/store/store";
import type { ICartItem } from "~/types/common";
//------------------------------------------------------

export function useCartColumn() {
  const cartItems = useSelector(
    (state: TRootState) => state.cart.selectedProducts
  );
  const [searchParams] = useSearchParams();

  const [searchedData, setSearchData] = useState<ICartItem[] | undefined>([]);

  useEffect(() => {
    if (searchParams.has("cartSearch")) {
      setSearchData(
        cartItems?.filter((item) =>
          item.product.title
            .toLowerCase()
            .includes(searchParams.get("cartSearch")!.toLowerCase())
        )
      );
    } else {
      setSearchData([]);
    }
  }, [searchParams.get("cartSearch"), cartItems.length]);

  return {
    cartItems,
    searchedData,
    hasCartSearchParams: searchParams.has("cartSearch"),
  };
}
