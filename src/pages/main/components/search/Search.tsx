//@Components
import { useSearch } from "~/pages/main/components/search/useSearch";
//------------------------------------------------------

//@Third-Party
import { Input } from "~/components/ui/input";
//------------------------------------------------------

//@Types
export interface ISearch {
  searchParam: "userSearch" | "productSearch" | "cartSearch";
}
//------------------------------------------------------

export function Search({ searchParam }: ISearch) {
  const { searchTerm, handleSearchTerm } = useSearch({
    searchParam,
  });
  return (
    <Input
      className="shrink-0"
      placeholder="search..."
      value={searchTerm}
      onChange={(e) => handleSearchTerm(e.target.value)}
    />
  );
}
