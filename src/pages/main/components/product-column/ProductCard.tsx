//@Third-Party
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "~/components/ui/button";
//------------------------------------------------------

//@Store
import { addToCart } from "~/store/slices/cart";
//------------------------------------------------------

//@Types
import type { IProduct } from "~/types/common";

interface IProductCard {
  product: IProduct;
}
//------------------------------------------------------

export function ProductCard({ product }: IProductCard) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col p-3 gap-3 w-full rounded-2xl border border-gray-500">
      {/* avatar and title */}
      <div className="flex items-center gap-4 overflow-hidden">
        <img
          className=" shrink-0 rounded-full overflow-hidden w-[32px] h-[42px]"
          width={32}
          height={42}
          src={product.image}
          alt={product.title}
        />
        <span
          className="grow-1 text-nowrap text-ellipsis overflow-hidden font-bold"
          title={product.title}
        >
          {product.title}
        </span>
      </div>

      {/* description */}
      <div className="flex gap-3">
        <span>description:</span>

        <p title={product.description}>
          {product.description.slice(0, 70) + " ..."}
        </p>
      </div>

      {/* add to cart button */}
      <Button
        className="bg-blue-500 hover:bg-blue-800 hover:cursor-pointer"
        variant={"default"}
        onClick={() => {
          dispatch(addToCart(product));
          toast.success(
            (product.title.length > 40
              ? product.title.slice(0, 40) + "..."
              : product.title) + " was added to cart"
          );
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
}
