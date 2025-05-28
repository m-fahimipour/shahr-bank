//@Components
import { useSearch } from "~/pages/main/components/search/useSearch";
//------------------------------------------------------

//@Third-Party
import { Input } from "~/components/ui/input";
//------------------------------------------------------

//@Types
export interface ISearch {
  handlerSearch: (val: string) => void;
}
//------------------------------------------------------

export function Search({ handlerSearch }: ISearch) {
  const { searchTerm, handleSearchTerm } = useSearch({ handlerSearch });
  return (
    <Input
      className="shrink-0"
      placeholder="search..."
      value={searchTerm}
      onChange={(e) => handleSearchTerm(e.target.value)}
    />
  );
}
