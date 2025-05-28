//@React
import { useEffect, useState } from "react";
//------------------------------------------------------

//@Third-Party
import { useSearchParams } from "react-router";
//------------------------------------------------------

//@Types
import type { ISearch } from "~/pages/main/components/search/Search";

interface IUseSearch extends ISearch {}
//------------------------------------------------------

export function useSearch({ searchParam }: IUseSearch) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get(searchParam) ?? ""
  );

  function handleSearchTerm(value: string) {
    setSearchTerm(value);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (searchTerm) {
        searchParams.set(searchParam, searchTerm);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(searchParam);
        setSearchParams(searchParams);
      }
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return {
    searchTerm,
    handleSearchTerm,
  };
}
