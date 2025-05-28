//@Components
import { ColumnContainer } from "~/pages/main/components/ColumnContainer";
import { ProductCard } from "~/pages/main/components/ProductCard";
import { useProductColumn } from "~/pages/main/components/product-column/useProductColumn";
import { Search } from "~/pages/main/components/search/Search";
//------------------------------------------------------

export function ProductColumn() {
  const { productData, searchedData, isLoading, handlerSearch } =
    useProductColumn();
  return (
    <ColumnContainer>
      <Search handlerSearch={handlerSearch}/>
      <div className="flex flex-col gap-2 grow-1 overflow-auto">
        {isLoading
          ? null
          : (searchedData?.length ? searchedData : productData)?.map((prod) => (
              <ProductCard product={prod} />
            ))}
      </div>
    </ColumnContainer>
  );
}
