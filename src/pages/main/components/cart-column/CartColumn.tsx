//@Components
import { CartCard } from "~/pages/main/components/cart-column/CartCard";
import { useCartColumn } from "~/pages/main/components/cart-column/useCartColumn";
import { ColumnContainer } from "~/pages/main/components/ColumnContainer";
import { Search } from "~/pages/main/components/search/Search";
//------------------------------------------------------

export function CartColumn() {
  const { cartItems, searchedData, handlerSearch } = useCartColumn();
  return (
    <ColumnContainer>
      <Search handlerSearch={handlerSearch} />
      <div className="flex flex-col gap-2 grow-1 overflow-auto">
        {(searchedData?.length ? searchedData : cartItems)?.map((cartItem) => (
          <CartCard
            key={cartItem.product.id}
            cartItem={cartItem}
            handlerSearch={handlerSearch}
          />
        ))}
      </div>
    </ColumnContainer>
  );
}
