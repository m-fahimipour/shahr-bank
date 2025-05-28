//@Components
import { Loading } from "~/components/ui/Loading";
import { ColumnContainer } from "~/pages/main/components/ColumnContainer";
import { ProductCard } from "~/pages/main/components/product-column/ProductCard";
import { useProductColumn } from "~/pages/main/components/product-column/useProductColumn";
import { Search } from "~/pages/main/components/search/Search";
//------------------------------------------------------

export function ProductColumn() {
  const {
    productData,
    searchedData,
    isLoading,
    columnRef,
    hasProductSearchParams,
    handlerScroll,
  } = useProductColumn();
  return (
    <ColumnContainer>
      <Search searchParam="productSearch" />
      <div
        ref={columnRef}
        className="flex flex-col gap-2 grow-1 overflow-auto"
        onScroll={handlerScroll}
      >
        {isLoading ? (
          <Loading />
        ) : (
          (hasProductSearchParams ? searchedData : productData)?.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))
        )}
      </div>
    </ColumnContainer>
  );
}
