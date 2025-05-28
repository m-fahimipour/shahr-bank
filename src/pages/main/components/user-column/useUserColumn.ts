//@React
import { useState } from "react";
//------------------------------------------------------

//@Services
import { useGetUsersQuery } from "~/services";
//------------------------------------------------------

//@Types
import type { IUser } from "~/types/common";
//------------------------------------------------------

export function useUserColumn() {
  const { data: userData, isLoading } = useGetUsersQuery(undefined);
  const [searchedData, setSearchData] = useState<IUser[] | undefined>(
    undefined
  );

  function handlerSearch(searchValue: string) {
    if (searchValue) {
      setSearchData(
        userData?.filter((user) =>
          (
            user.name.firstname.toLowerCase() + user.name.lastname.toLowerCase()
          ).includes(searchValue.toLowerCase())
        )
      );
    } else {
      setSearchData([]);
    }
  }

  return {
    userData,
    searchedData,
    isLoading,
    handlerSearch,
  };
}
