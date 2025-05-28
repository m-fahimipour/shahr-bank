//@Third-Party
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "~/components/ui/button";
//------------------------------------------------------

//@Store
import { decrease, deleteFromCart, increase } from "~/store/slices/cart";
//------------------------------------------------------

//@Types
import type { ICartItem } from "~/types/common";

interface ICartCard {
  cartItem: ICartItem;
}
//------------------------------------------------------

export function CartCard({ cartItem }: ICartCard) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col p-3 gap-3 w-full rounded-2xl border border-gray-500">
      {/* avatar and title */}
      <div className="flex items-center gap-4 overflow-hidden">
        <img
          className=" shrink-0 rounded-full overflow-hidden w-[32px] h-[42px]"
          width={32}
          height={42}
          src={cartItem.product.image}
          alt={cartItem.product.title}
        />
        <span
          className="grow-1 text-nowrap text-ellipsis overflow-hidden font-bold"
          title={cartItem.product.title}
        >
          {cartItem.product.title}
        </span>
      </div>

      {/* description */}
      <div className="flex gap-3">
        <span>description:</span>

        <p title={cartItem.product.description}>
          {cartItem.product.description.slice(0, 70) + " ..."}
        </p>
      </div>

      {/* action section */}
      <div className="flex gap-5 items-center justify-between">
        <Button
          className="bg-red-500 hover:bg-red-800 hover:cursor-pointer"
          variant={"default"}
          onClick={() => {
            dispatch(deleteFromCart(cartItem.product));
            toast.error(
              (cartItem.product.title.length > 40
                ? cartItem.product.title.slice(0, 40) + "..."
                : cartItem.product.title) + " was removed"
            );
          }}
        >
          Remove
        </Button>

        <div className="flex justify-between items-center gap-2">
          <Button
            className="hover:cursor-pointer"
            onClick={() => {
              dispatch(decrease(cartItem.product));
              if (cartItem.count > 1) {
                toast.error(
                  (cartItem.product.title.length > 40
                    ? cartItem.product.title.slice(0, 40) + "..."
                    : cartItem.product.title) + " decreased"
                );
              }
            }}
          >
            {"-"}
          </Button>
          <span className="text-2xl">{cartItem.count}</span>
          <Button
            className="hover:cursor-pointer"
            onClick={() => {
              dispatch(increase(cartItem.product));
              toast.success(
                (cartItem.product.title.length > 40
                  ? cartItem.product.title.slice(0, 40) + "..."
                  : cartItem.product.title) + " increased"
              );
            }}
          >
            {"+"}
          </Button>
        </div>
      </div>
    </div>
  );
}
