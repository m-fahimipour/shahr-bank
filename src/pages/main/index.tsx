//@Components
import { CartColumn } from "~/pages/main/components/cart-column/CartColumn";
import { ProductColumn } from "~/pages/main/components/product-column/ProductColumn";
import { UserColumn } from "~/pages/main/components/user-column/UserColumn";
//------------------------------------------------------

export default function MainPage() {
  return (
    <div className="flex flex-wrap h-screen p-5 overflow-auto">
      <div className="flex items-center w-full sm:w-1/2 md:w-1/3 h-full overflow-auto">
        <UserColumn />
      </div>
      <div className="flex items-center w-full sm:w-1/2 md:w-1/3  h-full overflow-auto">
        <ProductColumn />
      </div>
      <div className="flex items-center w-full sm:w-1/2 md:w-1/3 h-full overflow-auto">
        <CartColumn />
      </div>
    </div>
  );
}
