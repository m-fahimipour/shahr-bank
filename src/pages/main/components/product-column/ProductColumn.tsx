import { useProductColumn } from "./useProductColumn";

export function ProductColumn() {
  const { productData, searchedData, isLoading, handleSearchTerm, searchTerm } =
    useProductColumn();
  return (
    <div className="flex flex-col gap-3 h-full overflow-auto">
      <input
        type="text"
        className="shrink-0"
        onChange={(e) => handleSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div className="flex flex-col grow-1 overflow-auto">
        {isLoading
          ? null
          : (searchedData?.length ? searchedData : productData)?.map((prod) => (
              <div key={prod.id}>{prod.title}</div>
            ))}
      </div>
    </div>
  );
}
