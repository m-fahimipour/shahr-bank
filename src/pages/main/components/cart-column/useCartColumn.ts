//@React
import { useState } from "react";
//------------------------------------------------------

//@Third-Party
import { useSelector } from "react-redux";
//------------------------------------------------------

//@Types
import type { TRootState } from "~/store/store";
import type { ICartItem } from "~/types/common";
//------------------------------------------------------

export function useCartColumn() {
  const cartItems = useSelector(
    (state: TRootState) => state.cart.selectedProducts
  );
  const [searchedData, setSearchData] = useState<ICartItem[] | undefined>(
    undefined
  );

  function handlerSearch(searchValue: string) {
    if (searchValue) {
      setSearchData(
        cartItems?.filter((item) =>
          item.product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setSearchData([]);
    }
  }

  return {
    cartItems,
    searchedData,
    handlerSearch,
  };
}
