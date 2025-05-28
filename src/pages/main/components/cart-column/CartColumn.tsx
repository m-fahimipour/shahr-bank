//@Components
import { CartCard } from "~/pages/main/components/cart-column/CartCard";
import { useCartColumn } from "~/pages/main/components/cart-column/useCartColumn";
import { ColumnContainer } from "~/pages/main/components/ColumnContainer";
import { Search } from "~/pages/main/components/search/Search";
//------------------------------------------------------

export function CartColumn() {
  const { cartItems, searchedData, hasCartSearchParams } =
    useCartColumn();
  return (
    <ColumnContainer>
      <Search searchParam="cartSearch" />
      <div className="flex flex-col gap-2 grow-1 overflow-auto">
        {(hasCartSearchParams ? searchedData : cartItems)?.map((cartItem) => (
          <CartCard
            key={cartItem.product.id}
            cartItem={cartItem}
          />
        ))}
      </div>
    </ColumnContainer>
  );
}
