//@React
import { useEffect, useState } from "react";
//------------------------------------------------------

//@Types
import type { ISearch } from "~/pages/main/components/search/Search";

interface IUseSearch extends ISearch {}
//------------------------------------------------------

export function useSearch({ handlerSearch }: IUseSearch) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleSearchTerm(value: string) {
    setSearchTerm(value);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      handlerSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return {
    searchTerm,
    handleSearchTerm,
  };
}
